"use client";

import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { FormData } from "@/app/types/type";
import "../style/globals.css"; 
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";

const theme = "dark";
const colors = {
  dark: {
    primary: "rgba(144, 202, 249, 0.06)",
    secondary: "rgba(255, 255, 255, 0.05)",
    accent: "rgba(187, 154, 247, 0.05)",
    gradient: "linear-gradient(45deg, #121212 0%, #1e1e1e 100%)",
    button: "#9099A7",
  },
};

const currentColors = colors[theme];

export default function Login() {
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
      window.location.href = "/builder";
    }
  };

  return (
    <>
      <AnimatedBackground />
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Container maxWidth="sm">
            <Box
              sx={{
                borderRadius: "1.5rem",
                padding: "3rem",
                boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
              }}
            >
              <Typography variant="h4" gutterBottom color="white" className="text-center">
                Вход в систему
              </Typography>

              {error && <Alert severity="error">{error}</Alert>}

              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  label="Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputProps={{
                    style: {
                      backgroundColor: currentColors.primary,
                      borderRadius: "999px",
                      padding: "0.5rem 1rem",
                      fontSize: "1.1rem",
                      color: "#fff",
                    },
                  }}
                  InputLabelProps={{ style: { color: "#ccc" } }}
                  {...register("email", { required: "Email обязателен" })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />

                <TextField
                  label="Пароль"
                  type="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputProps={{
                    style: {
                      backgroundColor: currentColors.primary,
                      borderRadius: "9999px",
                      padding: "0.5rem 1rem",
                      fontSize: "1.1rem",
                      color: "#fff",
                    },
                  }}
                  InputLabelProps={{ style: { color: "#ccc" } }}
                  {...register("password", { required: "Пароль обязателен" })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    style={{
                      backgroundColor: currentColors.button,
                      color: "#000",
                      borderRadius: "9999px",
                      padding: "0.5rem 1.5rem",
                      textTransform: "none",
                      fontSize: "1.3rem",
                      boxShadow: "0 4px 20px rgba(144, 202, 249, 0.4)",
                      marginTop: "1.5rem",
                    }}
                  >
                    Войти
                  </Button>
                </motion.div>
              </form>
              <Box mt={4} className="flex flex-col gap-2">
                <Button variant="text" color="primary" fullWidth onClick={() => window.location.href = '/register'}>
                  У вас нет аккаунта? Перейти к регистрации
                </Button>
              </Box>
            </Box>
          </Container>
        </motion.div>
      </Box>
    </>
  );
}
