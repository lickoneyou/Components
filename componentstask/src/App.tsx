import React from 'react'
import './App.css'
import { Cart } from './components/Cart'
import { Header } from './components/header'
import { products } from './data/products'

function App() {
  let productsArr = products.map((el) => (
    <Cart products={el} key={el.id}></Cart>
  ))
  console.log(productsArr)
  return (
    <>
      <Header></Header>
      <body>{productsArr}</body>
    </>
  )
}

export default App
