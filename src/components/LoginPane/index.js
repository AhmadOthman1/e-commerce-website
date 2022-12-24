import React, { useState } from "react";
import style from "./style.module.css";
import TextField from "@mui/material/TextField";
import Title from "../Title"
import Button from "@mui/material/Button";

function LoginPane() {
    const [formData, setFormData] = useState({});
    const handleUserNameChange = (e) => {
      setFormData({ ...formData, username: e.target.value });
    };
    const handlePasswordChange = (e) => {
        setFormData({ ...formData, password: e.target.value });
      };
  return (
    
    <div className={style.mainPane}>
        <div className={style.loginPane}>
            <Title Text="Login"/>
            <TextField
                className={style.TextField}
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={handleUserNameChange}
                autoFocus
              />
               <TextField
               className={style.TextField}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handlePasswordChange}
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
        </div>

    </div>
  )
}

export default LoginPane