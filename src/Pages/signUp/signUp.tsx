import React from 'react';
import SignupForm from '../../Components/SignUpForm/SignUpForm';
import signUpImage from '../../assets/SignUp_Image.png';
import { Col, Image, Row } from 'antd';
import styles from './signUp.module.css'

const SignupPage: React.FC = () => {
    return (
        <Row className={styles.container} >
            <Col span={12} xs={24} lg={12}>
                <SignupForm />
            </Col>
            <Col span={12} xs={24} lg={12} className={styles.imageCol}>
                <Image src={signUpImage} preview={false}/>
            </Col>
        </Row>
    )
};

export default SignupPage;
