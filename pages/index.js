import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import FoodList from '../src/components/FoodList'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Food Delivery</title>
        <meta name="description" content="FAQI - Projeto Conclusão - Food Delivery" />
      </Head>

      <Header title={'Menu'} />
      <main>
        <FoodList />
      </main> 

      <footer>
          <Footer />
      </footer>
    </div>
  )
}
