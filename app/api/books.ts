"use server"

 import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get('userId');
  const client = await clientPromise;
  const db = client.db();
  const books = await db.collection('books').find({ userId }).toArray();
  return NextResponse.json(books);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection('books').insertOne({ ...data, createdAt: new Date(), updatedAt: new Date() });
  return NextResponse.json(result.ops?.[0] || result);
}

export async function PUT(req: NextRequest) {
  const { _id, ...update } = await req.json();
  const client = await clientPromise;
  const db = client.db();
  await db.collection('books').updateOne({ _id: new ObjectId(_id) }, { $set: { ...update, updatedAt: new Date() } });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const { _id } = await req.json();
  const client = await clientPromise;
  const db = client.db();
  await db.collection('books').deleteOne({ _id: new ObjectId(_id) });
  return NextResponse.json({ success: true });
} 
