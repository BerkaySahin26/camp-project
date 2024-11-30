import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from 'semantic-ui-react';
import BrTextInput from '../utilities/customFormControls/BrTextInput';
import ProductService from '../services/productService';

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 0, unitsInStock: 0, categoryId: 0 };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
    unitsInStock: Yup.number().required("Ürün stoğu zorunlu"),
    categoryId: Yup.number().required("Kategori id zorunlu"),
  });

  const handleSubmit = (values) => {
    console.log("Form Values:", values); // Form verilerini kontrol edin
    let productService = new ProductService();
    productService.addProducts(values)
      .then((result) => {
        console.log(result.data.message); // Başarılı mesajı
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
        <Form className="ui form">
          <BrTextInput name="productName" placeholder="Ürün Adı" />
          <BrTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
          <BrTextInput name="unitsInStock" placeholder="Ürün Stok" />
          <BrTextInput name="categoryId" placeholder="Kategori" />
          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
    </div>
  );
}
