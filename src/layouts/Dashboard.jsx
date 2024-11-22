import React from 'react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Grid, } from 'semantic-ui-react'
import {Routes,Route } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={13}>
          <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path='/products/1' element={<ProductDetail/>}/>
          </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
