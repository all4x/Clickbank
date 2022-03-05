import Head from 'next/head'
import Footer from '../components/Footer'
import Introducing from '../public/introducing.png'
import Image from 'next/image'
import Link from 'next/link'
import Check from '../public/moneyback.png'
import Topbar from '../components/Topbar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <meta name="title" content=" ©"/>
        <link rel="icon" href="/" />
        <meta name="facebook-domain-verification" content="pa2u9zqqcxpfxo4t0p1k070h3k8r8d" />
      </Head>
      <main className="">
      
        
          {/* BUTTON CTA */} 
          <div className=''>
            <Topbar/>
           
            <p className=' bg-yellow-400 p-2 text-2xl text-center  font-extrabold'>For Over 80% OFF Today!</p>

           
            
            <div className='flex items-center justify-center mb-2 p-5 ' >
            <Image src={Introducing}/>
            
            </div>
            <div className='flex justify-center pt-3 mb-3 animate-pulse'>
             <Link href="https://bit.ly/3twIfMp">  
              <button className=" p-2 pl-14 pr-14 brightness-110 bg-blue-500 text-gray-50 font-semibold text-lg rounded-lg focus:border-4 border-gray-300">Take Me To The Discount Page</button>
             </Link>
            </div> 
            <div className='bg-black'>
            <div className='flex justify-center p-4'>
            <Image src={Check}/>
            </div>
            <p className='p-5 font-sans text-gray-100 text-xl'>This product is backed by a 100% money back guarantee for 60 full days from your original purchase. If you’re not totally and completely satisfied with this product, your results or your experience in the first 60 days from your purchase simply let us know by calling our toll free number or dropping us an email and we’ll give you a full refund within 48 hours of the product being returned. That’s right, simply return the product, even empty pouches, anytime within 60 days of your purchase and you’ll receive a full, no questions asked refund (less shipping and handling).</p>
            </div>
            <div className='m-6'>
              <h1 className='mb-8 text-center text-lg font-extrabold '> Tea Burn Is</h1>
              <div className='font-serif text-lg'>
              <li>100% All Natural</li>
              <li>Vegetarian, Non-GMO and Gluten Free</li>
              <li>No Added Fillers or Preservatives</li>
              <li>No Artificial Colors or Stimulants</li>
              <li>100% Completely Safe</li>   
              <li>Zero Side Effects</li>
              <li>Manufactured in the USA</li>
              <li>FDA Approved and GMP Certified Facility</li>
              <li>Tested In 3rd Party Labs</li>
              <li>Highest Quality, Purity and Potency Available</li> 
              </div>
               
            </div>
            <div className='flex justify-center p-2 m-3'>
            <Link href="https://bit.ly/3twIfMp">  
              <button className="p-2 pl-16 pr-16 brightness-110 bg-blue-500 text-gray-50 font-semibold text-lg rounded-lg focus:border-4 border-gray-300">Take Me To The Discount Page</button>
             </Link>

            </div>
           
          </div>  
              
      </main>
      <footer className=''>
      <Footer/>
      </footer>
    
    
    </div>
  )
}

