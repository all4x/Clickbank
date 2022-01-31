import Head from 'next/head'
import Footer from '../components/Footer'
import Topbar from '../components/Topbar'
import Cafe from '../public/cafe.jpg'
import Image from 'next/image'
import Link from 'next/link'



export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Topbar/>
        <section>
          <div className='text-center  text-2xl mt-6'>
            <h1 className='font-light'>Begin to Live your life feeling healther and happier... </h1>
            <h2 className='font-extrabold mt-8'>With This Little Secret!</h2>
          </div>
          <div className='mt-[5%] xl:w-1/2 mx-auto p-2'>
            <Image src={Cafe}/>
            <p className='text-2xl font-sans text-center m-3'>Build up your metabolism with your cup of morning coffee</p>
            <hr/>
            <p className='text-center mt-8 font-bold text-xl'>Start your day off the right way</p>
          </div>
          {/* BUTTON CTA */} 
          <div className='text-left'>
            <p className='p-5 text-2xl'>Claim the limited 80% off offer now before it's too late</p>
            <div className='flex justify-center pt-5 mb-5'>
             <Link href="./mask">  
                  <button className="p-2 pl-16 pr-16 bg-yellow-500 text-gray-900 font-semibold text-lg rounded-lg focus:border-4 border-gray-300">Click Here To Get Product</button>
             </Link>
            </div> 
          </div>


        </section>


      
      </main>

      <Footer/>
    </div>
  )
}

