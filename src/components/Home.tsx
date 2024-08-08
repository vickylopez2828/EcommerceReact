import CardsList from './CardsList'
import Carrousel from './Carrousel'

const Home = () => {

  return (
    <>
      <div className='home-body'>
        <Carrousel></Carrousel>
        <div className='container-category-ages df'>
          <button>0 a 12 MESES</button>
          <button>1 A 3 AÑOS</button>
          <button>4 A 6 AÑOS</button>
          <button>7 A 9 AÑOS</button>
          <button>10 A 12 AÑOS</button>
          <button>ADOLESCENTES</button>
        </div>
        <CardsList/>
      </div>
    </>
  )
}

export default Home
