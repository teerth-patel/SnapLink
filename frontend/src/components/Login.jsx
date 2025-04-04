import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("email:", email);
    console.log("Password:", password);
    
    try {
      const response = await axios.post('http://localhost:5000/api/signin', {
        email,
        password
      });
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
    }
  };
  
  return (
    <Container maxWidth="xs">
      <Paper elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8 }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Sign In</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField fullWidth label="email" variant="outlined"
            margin="normal" value={email} onChange={(e) => setemail(e.target.value)}
          />
          <TextField fullWidth label="Password" type="password" variant="outlined"
            margin="normal" value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
            Login
          </Button>
          <Button type="button" onClick={() => navigate('/signup')} fullWidth variant="contained" color="info" sx={{ mt: 2, p: 0 }}>
            Sign Up?
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
