import Head from 'next/head'
import Footer from '../components/Footer'
import Topbar from '../components/Topbar'
import Alle from '../public/alle.jpg'
import Image from 'next/image'
import Link from 'next/link'



export default function Home() {
  return (
    <div className="">
      <Head>
        <meta name="title" content="Java Man ©"/>
        <link rel="icon" href="/" />
      </Head>
      <Topbar/>
      <main className="">
      
        
          {/* BUTTON CTA */} 
          <div className='text-left'>
            <p className='p-5 text-2xl'>Titulo, não tem titulo :)</p>
            <div className='flex justify-center pt-5 mb-5'>
             <Link href="/mask">  
                  <button className="p-2 pl-16 pr-16 bg-yellow-500 text-gray-900 font-semibold text-lg rounded-lg focus:border-4 border-gray-300">botão aleatorio fodase</button>
             </Link>
            </div> 
            <div className='flex items-center justify-center mb-5 animate-spin' >
            <Image src={Alle}/>
              <p>Gira vagabunda</p>
            </div>

          </div>  
              
      </main>
      <footer className=''>
      <Footer/>
      </footer>
    
    
    </div>
  )
}

