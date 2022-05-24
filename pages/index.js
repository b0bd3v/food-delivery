import { useState, useEffect } from 'react'

import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import FoodList from '../src/components/FoodList'
import FoodDetails from '../src/components/FoodDetails'
import Checkout from '../src/components/Checkout'
import Success from '../src/components/Success'

import 'semantic-ui-css/semantic.min.css'

import foods from "../mock/foods.json"

export default function Home() {
  const [current, setCurrent] = useState(null)
  const [list, setList] = useState([])
  const [navigation, setNavigation] = useState('list')

  const addInList = (item) => {
    setList([item, ...list])
    setNavigation('checkout')
  }

  useEffect(() => {
    
  }, [current])

  useEffect(() => {
    setCurrent(null)
  }, [list])

  return (
    <div>
      <Head>
        <title>Food Delivery</title>
        <meta name="description" content="FAQI - Projeto Conclusão - Food Delivery" />
      </Head>

      <Header title={'Menu'} />
      <main>
        {navigation == 'list' && <FoodList foods={foods} selectFood={setCurrent} setNavigation={setNavigation} />}
        {navigation == 'item' && <FoodDetails food={current} setNavigation={setNavigation} />}
        {navigation == 'checkout' && <Checkout setNavigation={setNavigation} /> }
        {navigation == 'payment' && <Success setNavigation={setNavigation} /> }
      </main> 

      <footer>
          <Footer food={current} list={list} addInList={addInList} setNavigation={setNavigation}/>
      </footer>
    </div>
  )
}
