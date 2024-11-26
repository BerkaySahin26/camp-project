import React from 'react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Grid, } from 'semantic-ui-react'
import {Routes,Route } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'
import ProductAdd from '../pages/ProductAdd'

export default function Dashboard() {
  return (
    <div>
    <ToastContainer position='bottom-right'/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={13}>
          <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path='/products/:productId' element={<ProductDetail/>}/>
          <Route exact path='/cart' element={<CartDetail/>}/>
          <Route exact path='/product/add' element={<ProductAdd/>}/>
          </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
