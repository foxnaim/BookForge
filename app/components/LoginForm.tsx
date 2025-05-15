"use client";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import { useState } from "react";

type FormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [error, setError] = useState("");

  const onSubmit = async (data: FormData) => {
    setError("");
    // Здесь ваша логика авторизации
    // Например, вызов signIn
  };

  return (
    <Box mt={4} sx={{ background: 'rgba(0,0,0,0.7)', borderRadius: 2, p: 3 }}>
      <Typography variant="h5" gutterBottom>Вход в систему</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          {...register("email", { required: "Email обязателен" })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Пароль"
          type="password"
          fullWidth
          margin="normal"
          {...register("password", { required: "Пароль обязателен" })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
          Войти
        </Button>
      </form>
    </Box>
  );
} 
