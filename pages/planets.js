import Link from 'next/link'
import {getPlanetName} from '../api/api'
import {MainLayout} from '../components/MainLayout'

export default function Planets({planets}) {
  return (
    <MainLayout>
      <h3>Planet List</h3>
      <nav className='nav flex-column'>
        {planets.map((planet, index) => {
          return (
            <Link key={index + 1} href={`/planet/${index + 1}`}>
              <a className='nav-link'>{planet}</a>
            </Link>
          )
        })}
      </nav>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const planets = await getPlanetName(`https://swapi.dev/api/planets`)
  return {props: {planets}}
}
