
import Image from 'next/image'
import Java from '../../public/specialpromo.png'
import Tea from '../../public/teaburn.png'

const index = () => {
    return (
        <div>
        <nav class=" bg-gray-100">
        <div class="flex justify-center items-center bg-red-500 py-6 lg:px-40 md:px-20 px-10">
            <div class="">
            <a href="#"> <h1 className='text-3xl'></h1></a>
            <Image src={Java}/>
            <div className='flex justify-center'>
            <Image src={Tea}/>
            </div>
            </div>
        </div>
        </nav>
        </div>
    );
}

export default index;