import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from 'semantic-ui-react';
import BrTextInput from '../utilities/customFormControls/BrTextInput';
import AuthService from '../services/authService';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

export default function Login() {
    const navigate = useNavigate(); 

    const initialValues = {
        email: '',
        password: '',
    };

    const schema = Yup.object({
        email: Yup.string().email('Geçersiz email adresi').required('Email zorunludur'),
        password: Yup.string().min(6, 'Şifre en az 6 karakter olmalıdır').required('Şifre zorunludur'),
    });

    const handleSubmit = (values) => {
        let authService = new AuthService();
        authService.login(values)
            .then((result) => {
                console.log(result.data.message);
                alert("Giriş başarılı!");

                localStorage.setItem('token', result.data.token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;

        
                navigate('/dashboard'); 
            })
            .catch((error) => {
                console.error("Error:", error.response ? error.response.data : error.message);
                alert("Giriş işlemi sırasında bir hata oluştu!");
            });
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                <Form className="ui form">
                    <BrTextInput name="email" placeholder="Email" />
                    <BrTextInput name="password" type="password" placeholder="Şifre" />
                    <Button color="blue" type="submit">Giriş Yap</Button>
                </Form>
            </Formik>
        </div>
    );
}
