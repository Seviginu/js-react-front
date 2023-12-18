import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import { jwtDecode, jwtDocode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";

import { confirmDialog } from 'primereact/confirmdialog';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
        


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    

    const login = () => {
        AuthService.login(username, password).then((data) => {
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("user", jwtDecode(data.data.token).sub)

            navigate("/main");
        }).catch((data) => {
          confirmDialog({
            message: data?.response?.data?.message,
            header: 'Auth error',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
        });
        });
        
    };

    const register = () => {
      
        AuthService.register(username, password).then((data) => {
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("user", jwtDecode(data.data.token).sub)
            navigate("/main");
        }).catch((data) => {
          confirmDialog({
            message: data?.response?.data,
            header: 'Auth error',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
        });
        });
        
    };

    return (
      <div className='login-form'>
        <ConfirmDialog />
          <h1>Login</h1>

          <div className='form-element'>
            <label htmlFor="username">Username</label> <br />
            <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

          </div>
          <br />
          <div className='form-element'>
            <label htmlFor='password'>Password</label> <br />
              <Password inputId='password' feedback={false} value={password}  onChange={(e) => setPassword(e.target.value)} />
          </div>
          <br />
          <div className='form-element'>
            <Button className='auth-button' label='Login' onClick={login} rounded/>

            <Button className='auth-button' label='Register' onClick={register} rounded/>
          </div>

    </div>
  );
}

export default LoginForm;