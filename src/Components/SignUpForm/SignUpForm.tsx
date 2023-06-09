import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const { Title } = Typography;

interface SignupValues {
  name: string;
  email: string;
  phoneNo: string;
  password: string;
  confirmPassword: string;
}

const initialValues: SignupValues = {
  name: '',
  email: '',
  phoneNo: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(15, 'Name must be at least 15 characters'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNo: Yup.string()
    .matches(/^[0-9]{10}$/, 'Invalid phone number')
    .required('Phone number is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});

const SignupForm: React.FC = () => {
  const handleSubmit = (values: SignupValues) => {
    console.log(values);
    // You can perform further actions here, such as API calls or dispatching actions
  };

  return (
    <>
     
      <Title> SignUp </Title>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {() => (
          <FormikForm>
            <Form.Item label="Name" name="name" labelCol={{ span: 24 }}>
              <Field as={Input} name="name" />
              <ErrorMessage name="name" component="div" />
            </Form.Item>
            <Form.Item label="Email" name="email" labelCol={{ span: 24 }}>
              <Field as={Input} name="email" />
              <ErrorMessage name="email" component="div" />
            </Form.Item>
            <Form.Item label="Phone Number" name="phoneNo" labelCol={{ span: 24 }}>
              <Field as={Input} name="phoneNo" />
              <ErrorMessage name="phoneNo" component="div" />
            </Form.Item>
            <Form.Item label="Password" name="password" labelCol={{ span: 24 }}>
              <Field as={Input.Password} name="password" />
              <ErrorMessage name="password" component="div" />
            </Form.Item>
            <Form.Item label="Confirm Password" name="confirmPassword" labelCol={{ span: 24 }}>
              <Field as={Input.Password} name="confirmPassword" />
              <ErrorMessage name="confirmPassword" component="div" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
              <Button type="default" htmlType="reset" style={{backgroundColor:"red"}}>
                Reset
              </Button>
            </Form.Item>
          </FormikForm>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;
