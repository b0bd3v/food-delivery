import { useState, useEffect } from 'react'

import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import FoodList from '../src/components/FoodList'
import FoodDetails from '../src/components/FoodDetails'
import 'semantic-ui-css/semantic.min.css'

import foods from "../mock/foods.json"

export default function Home() {
  const [current, setCurrent] = useState(null)
  const [list, setList] = useState(null)

  useEffect(() => {
    
  }, [current])


  return (
    <div>
      <Head>
        <title>Food Delivery</title>
        <meta name="description" content="FAQI - Projeto Conclusão - Food Delivery" />
      </Head>

      <Header title={'Menu'} />
      <main>
        {current ? <FoodDetails /> : <FoodList foods={foods} selectFood={setCurrent} />}
      </main> 

      <footer>
          <Footer food={current} />
      </footer>
    </div>
  )
}
