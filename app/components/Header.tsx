// src/components/Header.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '@mui/material';

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 bg-opacity-90 shadow-lg">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-2xl font-bold text-white tracking-wide hover:text-blue-300 transition">My Book Builder</Link>
        <Link href="/builder" className="text-white hover:text-blue-400 transition">Генератор</Link>
        <Link href="/profile" className="text-white hover:text-blue-400 transition">Профиль</Link>
        {session?.user?.email === ADMIN_EMAIL && (
          <Link href="/admin" className="text-white hover:text-blue-400 transition">Админ</Link>
        )}
      </div>
      <div>
        {session ? (
          <Button color="secondary" variant="outlined" onClick={() => signOut()}>Выйти</Button>
        ) : (
          <Link href="/login">
            <Button color="primary" variant="contained">Войти</Button>
          </Link>
        )}
      </div>
    </header>
  );
}
