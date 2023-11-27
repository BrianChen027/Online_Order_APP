import Image from 'next/image'
import Link from 'next/link'
import Header from './components/layout/Header'
import Hero from './components/layout/Hero'
import HomeMenu from './components/layout/HomeMenu'
import SectionHeaders from './components/layout/SectionHeaders'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className='text-center my-16'>
        <SectionHeaders
          subHeader={'Our Story'}
          mainHeader={'About us'} />
        <div className='max-w-xl mx-auto mt-4 text-gray-500 flex flex-col gap-4'>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </p>
        </div>

      </section>

      <section className='text-center my-8'>
        <SectionHeaders 
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'} />
          <div className='mt-8'>
            <a className="text-4xl" herf="tel:+1-400-000-0000">+1-400-000-0000</a>
          </div>
        
      </section>

      <footer className='border-t p-8 text-center text-gray-500 mt-16'>
        &copy; 2023 Brian rights reserved
      </footer>
    </>
  )
}
