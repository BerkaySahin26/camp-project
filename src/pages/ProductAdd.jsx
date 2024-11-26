import { Form, Formik, Field } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { FormField, Button } from 'semantic-ui-react'


export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 0, unitsInStock: 0 }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
        unitsInStock: Yup.number().required("Ürün stoğu zorunlu"),
        categoryId: Yup.number().required("Kategori id zorunlu")
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                <Form className='ui form'>
                    <FormField>
                        <Field name='productName' placeholder='Ürün Adı'></Field>
                    </FormField>
                    <FormField>
                        <Field name='unitPrice' placeholder='Ürün Fiyatı'></Field>
                    </FormField>
                    <FormField>
                        <Field name='unitsInStock' placeholder='Ürün Stok'></Field>
                    </FormField>
                    <FormField>
                        <Field name='categoryId' placeholder='Kategori'></Field>
                    </FormField>
                    <Button color='green' type='submit'> Ekle</Button>
                </Form>
            </Formik>

        </div>
    )
}
