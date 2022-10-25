import { Link } from 'react-router-dom'
import image1 from '../assets/chronicarePage/image1.png'

const Chronicare = () => {
  return (
    <>
    <div className='dark:bg-[#0D0D0D] dark:text-white'>
    <section className='bg-blue dark:bg-[#0D0D0D] text-white text-center pt-32'>
      <h2 className='font-bold text-2xl mb-2 lg:text-5xl'>Chronicare</h2>
      <p className='font-light mb-20 w-[60%] m-auto text-lg lg:text-2xl '>Work in Progress🚀</p>
      <img className='lg:w-[80%] m-auto' src={image1} alt="" />
    </section>

    <section className='p-24 space-y-16 md:grid md:grid-cols-3 md:space-y-0 md:pl-0'>
      <div className='col-span-2'>
      <div className='flex flex-row-reverse justify-between md:justify-evenly md:flex-row'>
      <div>
      <h5 className='mb-4 font-semibold text-2xl md:text-3xl'>Year</h5>
      <p className='font-light md:text-2xl'>2022</p>
      </div>
      <div>
      <h5 className='mb-4 font-semibold text-2xl md:text-3xl'>Role</h5>
        <ul className='font-light space-y-4 md:text-2xl'> 
        <li>Service Design</li>
        <li>User Research</li>
        <li>Product strategy</li>
        </ul>
      </div>
      </div>
      </div>

      <div className='col-span-1'>
      <h5 className='mb-4 font-semibold text-2xl md:text-3xl'>Outcome</h5>
        <ul className='font-light space-y-4 md:text-2xl'> 
        <li>Service flows</li>
        <li>Standard Operations Practices</li>
        <li>Prototypes</li>
        </ul>
      </div>
    </section>

 

  <section className='bg-[#FBFBFB] dark:bg-[#2C2C2E] mt-14 mb-28 p-8 flex justify-between md:p-16'>
    <Link to='/wella-agent'>
    <div>
        <p className='text-black opacity-[50%] md:text-2xl dark:text-white dark:opacity-[50%]'>Previous</p>
        <h2 className='font-semibold text-xl md:text-5xl dark:text-white'>Wella Agent</h2>
    </div>
    </Link>
    <Link to='/portfolio'>
    <div>
      <p className='text-black opacity-[50%] md:text-2xl dark:text-white dark:opacity-[50%]'>Next</p>
      <h2 className='font-semibold text-xl md:text-5xl dark:text-white'>My Portfolio</h2>
    </div>
    </Link>
  </section>
  <div className="pt-2"></div>
    </div>
    </>
  )
}

export default Chronicare