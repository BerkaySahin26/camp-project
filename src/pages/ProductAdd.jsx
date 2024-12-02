import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from 'semantic-ui-react';
import BrTextInput from '../utilities/customFormControls/BrTextInput';
import ProductService from '../services/productService';
import AuthService from '../services/authService';

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 0, unitsInStock: 0, categoryId: 0 };

    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
        unitsInStock: Yup.number().required("Ürün stoğu zorunlu"),
        categoryId: Yup.number().required("Kategori id zorunlu"),
    });

    const handleSubmit = (values) => {
        const authService = new AuthService();
        const token = authService.getToken(); 

        if (!token) {
            alert("Lütfen giriş yapın.");
            return;
        }

        let productService = new ProductService();
        productService.addProducts(values, token)
            .then((result) => {
                console.log(result.data.message);
                alert("Ürün başarıyla eklendi!");
            })
            .catch((error) => {
                console.error("Error:", error.response ? error.response.data : error.message);
                alert("Ürün eklenirken bir hata oluştu!");
            });
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form className="ui form">
                        <BrTextInput name="productName" placeholder="Ürün Adı" />
                        {errors.productName && touched.productName && <div>{errors.productName}</div>}
                        
                        <BrTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
                        {errors.unitPrice && touched.unitPrice && <div>{errors.unitPrice}</div>}
                        
                        <BrTextInput name="unitsInStock" placeholder="Ürün Stok" />
                        {errors.unitsInStock && touched.unitsInStock && <div>{errors.unitsInStock}</div>}
                        
                        <BrTextInput name="categoryId" placeholder="Kategori" />
                        {errors.categoryId && touched.categoryId && <div>{errors.categoryId}</div>}
                        
                        <Button color="green" type="submit">Ekle</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
