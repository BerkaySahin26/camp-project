import React from 'react'
import { useParams } from 'react-router-dom'
import {
    Button,
    Card,
    Image,
} from 'semantic-ui-react';
import ProductService from '../services/productService'
import { useState, useEffect } from 'react'

export default function ProductDetail() {
    let { productId } = useParams() //parametreleri obje olarak verme 

    const [product, setProduct] = useState({});

    useEffect(() => {
        let productService = new ProductService();
        productService.getById(productId).then(result => {
            console.log(result); // Gelen veriyi kontrol etmek için
            setProduct(result.data.data);
        });
    }, []); // Bu sadece bileşen ilk render edildiğinde çalışır // değişken değiştiğinde sayfayı yenile..

    return (
        <div>

            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>{product.productId}</Card.Header>
                        <Card.Meta>{product.productName}</Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>

            </Card.Group>
        </div>
    )
}
