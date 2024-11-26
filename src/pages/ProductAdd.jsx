import { Form, Formik, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { FormField, Button, Label } from 'semantic-ui-react'
import BrTextInput from '../utilities/customFormControls/BrTextInput'


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
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form className='ui form'>
                <BrTextInput name='productName' placeholder='Ürün Adı'/>
                <BrTextInput name='unitPrice' placeholder='Ürün Fiyatı'/>   
                <BrTextInput name='unitsInStock' placeholder='Ürün Stok'/>
                <BrTextInput name='categoryId' placeholder='Kategori'/>
                    <Button color='green' type='submit'> Ekle</Button>
                </Form>
            </Formik>

        </div>
    )
}
