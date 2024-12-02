import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from 'semantic-ui-react';
import BrTextInput from '../utilities/customFormControls/BrTextInput';
import AuthService from '../services/authService'; // AuthService import edildi
import axios from 'axios'; // Axios importu 

export default function Register() {
  const initialValues = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  const schema = Yup.object({
    email: Yup.string()
      .email('Geçersiz email adresi')
      .required('Email zorunludur'),
    password: Yup.string()
      .min(6, 'Şifre en az 6 karakter olmalıdır')
      .required('Şifre zorunludur'),
    firstName: Yup.string().required('İsim zorunludur'),
    lastName: Yup.string().required('Soyisim zorunludur'),
  });

  const handleSubmit = (values) => {
    let authService = new AuthService();
    authService.register(values)
      .then((result) => {
        console.log(result.data.message); 
        alert("Kayıt başarılı!");
      })
      .catch((error) => {
        console.error("Error:", error.response ? error.response.data : error.message);
        alert("Kayıt işlemi sırasında bir hata oluştu!");
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
          <BrTextInput name="firstName" placeholder="İsim" />
          <BrTextInput name="lastName" placeholder="Soyisim" />
          <Button color="blue" type="submit">Kayıt Ol</Button>
        </Form>
      </Formik>
    </div>
  );
}
