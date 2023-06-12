import React from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';
import styles from './Login.module.css'
import Title from 'antd/es/typography/Title';
const Login: React.FC = () => {
    return (
        <div className={styles.loginPgaeContainer}>
            <Title>Login</Title>
            <br />
            <LoginForm />
        </div>



    )
};

export default Login;
