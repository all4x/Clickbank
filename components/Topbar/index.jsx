
import Image from 'next/image'
import Java from '../../public/javaburn-products.png'


const index = () => {
    return (
        <div>
        <nav class=" bg-gray-100">
        <div class="flex justify-center items-center bg-red-500 py-6 lg:px-40 md:px-20 px-10">
            <div class="">
            <a href="#"><Image class="h-10 cursor-pointer" src={Java} alt="" /></a>
            </div>
        </div>
        </nav>
        </div>
    );
}

export default index;