"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button, TextField, Container, Typography, Box, Alert } from '@mui/material';

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name }),
    });

    const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Ошибка регистрации');
      }

      // После успешной регистрации выполняем вход
      const signInResult = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (signInResult?.error) {
        throw new Error('Ошибка входа после регистрации');
      }

      router.push('/profile');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" className="flex flex-col items-center justify-center min-h-screen">
      <Box mt={10}>
        <Typography variant="h4" gutterBottom>Регистрация</Typography>
        {error && <Alert severity="error" className="mb-4">{error}</Alert>}
        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          <TextField 
            label="Имя" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            fullWidth 
            required 
            disabled={loading}
          />
          <TextField 
            label="Email" 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            fullWidth 
            required 
            disabled={loading}
          />
          <TextField 
            label="Пароль" 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            fullWidth 
            required 
            disabled={loading}
          />
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            type="submit" 
            disabled={loading}
          >
            {loading ? 'Регистрация...' : 'Зарегистрироваться'}
          </Button>
        </form>
        <Box mt={4} className="flex flex-col gap-2">
          <Button 
            variant="text" 
            color="primary" 
            fullWidth 
            onClick={() => router.push('/login')}
            disabled={loading}
          >
            Уже есть аккаунт? Войти
          </Button>
        </Box>
      </Box>
    </Container>
  );
} 
