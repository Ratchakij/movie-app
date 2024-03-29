import {
  Alert,
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/authSlice";

const Login = () => {
  //   const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ username, password })).unwrap();

      //   dispatch(login(user)).then((res) => {
      //     if (res.payload) {
      //       setUsername("");
      //       setPassword("");
      //       navigate("/");
      //     }
      //   });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="h-screen"
    >
      <Paper elevation={10} className="p-8 w-[380px] mx-auto">
        <Grid align="center">
          <Avatar className="bg-[#1bbd7e]">
            <LockOutlinedIcon />
          </Avatar>
          <h2 className="my-2">Sign In</h2>
        </Grid>
        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
            className="my-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            className="my-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            className="my-2"
          >
            {loading ? "Loading..." : "Login"}
          </Button>
          {error && (
            <Alert severity="error" sx={{ margin: "1rem 0" }}>
              {error}
            </Alert>
          )}
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
