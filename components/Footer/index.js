
import Link from 'next/link'

function Redes() {
  return (
    <div>
    {/*<!-- component --*/}
<div class=" bg-gray-900">
  <div class="max-w-2xl mx-auto text-white py-10">
      <div class="text-center">
          <h3 class="text-3xl mb-3"> Java Burn  </h3>
          <p> EUA </p>
          </div>
      </div>

      <div class="mt-11 pb-10 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <a href="https://www.instagram.com/sr_all3x/"><p class="order-2 md:order-1 ml-4 mt-8 md:mt-0"> &copy; Feito por @sr_all3x, 2021. </p></a>
          <div class="order-1 md:order-2">
              <span class="px-2">About</span>
              <a href="#"><span class="px-2 border-l">Contact</span></a>
              
              <Link href="#">
              <span class="px-2 border-l">Policies and Terms of Use</span>

              </Link>
          </div>
      </div>
  </div>
</div>


  )
}
export default Redes;