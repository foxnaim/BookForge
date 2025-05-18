import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../lib/mongodb';
import { hash } from 'bcryptjs';

export async function POST(req: NextRequest) {
  const { email, password, name } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: 'Email и пароль обязательны' }, { status: 400 });
  }
  const client = await clientPromise;
  const db = client.db();
  const userExists = await db.collection('users').findOne({ email });
  if (userExists) {
    return NextResponse.json({ error: 'Пользователь уже существует' }, { status: 409 });
  }
  const hashedPassword = await hash(password, 10);
  const result = await db.collection('users').insertOne({
    email,
    password: hashedPassword,
    name: name || email,
    createdAt: new Date(),
    role: 'user',
  });
  return NextResponse.json({ success: true, userId: result.insertedId });
} 
