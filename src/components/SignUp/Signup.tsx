import { TextField, Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/axios";
import { notifyError, notifySuccess } from "../../helper/toast";

export const SignUp = () => {
  const navigate = useNavigate();

  const goSignIn = () => {
    navigate("/SignIn");
  };

  const goDashboard = () => {
    navigate("/dashboard");
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
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
      const res = await axiosInstance.post("/auth/signUp", formData);
      if (res.status < 400) {
        sessionStorage.setItem("token", res.data.token);
        notifySuccess(res.data.message);
        goDashboard();
      } else if (res.status >= 400) {
        notifyError(res.data.message);
      }
    } catch (error: any) {
      notifyError(error.response.data.message);
      console.log(error);
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
        Sign Up
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

      <TextField
        label="Full name"
        name="fullName"
        type="text"
        value={formData.fullName}
        onChange={handleChange}
        sx={{ width: 300 }}
      />

      <Button type="submit" variant="contained" sx={{ margin: "20px" }}>
        Submit
      </Button>

      <Button
        type="button"
        onClick={() => {
          goSignIn();
        }}
      >
        Sign In
      </Button>
    </Box>
  );
};
