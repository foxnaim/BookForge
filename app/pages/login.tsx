"use client";

import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Alert,
} from "@mui/material";
import { useState } from "react";

type FormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [error, setError] = useState("");

  const onSubmit = async (data: FormData) => {
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.error) {
      setError("Неверный email или пароль");
    } else {
      window.location.href = "/builder"; // или router.push
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={10}>
        <Typography variant="h4" gutterBottom>
          Вход в систему
        </Typography>

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
    </Container>
  );
}
