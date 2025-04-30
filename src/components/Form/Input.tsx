import { TextField, Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/axios";
import { notifyError, notifySuccess } from "../../helper/toast";

export const SignIn = () => {
  const navigate = useNavigate();

  const goSingUp = () => {
    navigate("/");
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data: token } = await axiosInstance.post(
        "/auth/signIn",
        formData
      );
      sessionStorage.setItem("token", token);
      notifySuccess("You are in!");
    } catch (error) {
      notifyError("Something went wrong!");
      console.error(error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Sign In
      </Typography>

      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        sx={{ width: 300 }}
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        variant="outlined"
        onChange={handleChange}
        sx={{ margin: "20px", width: "300px" }}
      />

      <Button type="submit" variant="contained" sx={{ margin: "20px" }}>
        Submit
      </Button>

      <Button onClick={goSingUp}>Sign Up</Button>
    </Box>
  );
};
