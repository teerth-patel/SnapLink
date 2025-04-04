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
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios"

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("email:", email);
    console.log("Password:", password);

    
    try {
      if (password != confirmPassword) {
        return response.status(405).json({success: false, message: 'password does not match'})
      } else {

        const response = await axios.post('http://localhost:5000/api/signup', {
          name,
          email,
          password
        });
        console.log('Login successful:', response.data);
      }
    } catch (error) {
        console.error('Login failed:', error.response?.data || error.message);
    }
  };
  
  return (
    <Container maxWidth="xs">
      <Paper elevation={3}
        sx={{ padding: 4, display: "flex", flexDirection: "column",
          alignItems: "center", mt: 8,
        }} >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Sign Up</Typography>

        <Box component="form" onSubmit={() => handleSignUp} sx={{ mt: 2 }}>
          <TextField fullWidth label="Full Name" variant="outlined"
            margin="normal" value={name} onChange={(e) => setName(e.target.value)}
          />
          <TextField fullWidth label="Email" variant="outlined"
            margin="normal" value={email} onChange={(e) => setemail(e.target.value)}
          />
          <TextField fullWidth label="Password" type="password" variant="outlined" 
            margin="normal" value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <TextField fullWidth label="Confirm Password" type="password" variant="outlined" 
            margin="normal" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
            Sign Up!
          </Button>
          <Button type="button" onClick={() => navigate('/login')} fullWidth variant="contained" color="info" sx={{ mt: 2, p: 0 }}>
            already a user? SIGN IN
          </Button>
        </Box>
      </Paper> 
    </Container>
  );
};

export default SignUp;
