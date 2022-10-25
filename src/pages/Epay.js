import { Link } from 'react-router-dom'
import image1 from '../assets/epayPage/image1.png'
import image2 from '../assets/epayPage/image2.png'
import image3 from '../assets/epayPage/image3.png'
import image4 from '../assets/epayPage/image4.png' 




const Epay = () => {
  return (
    <>
    <div className='dark:bg-[#0D0D0D] dark:text-white'>
    <section className='bg-Gray dark:bg-[#0D0D0D] text-white text-center pt-32'>
      <h2 className='font-bold text-2xl mb-2 lg:text-5xl'>EPAY</h2>
      <p className='font-light mb-20 w-[60%] m-auto text-lg lg:text-2xl'>A fintech solution using eNaira to improve and drive financial inclusion  by understanding the needs of the target audience </p>
      <img className='w-[60%] lg:w-[40%] m-auto' src={image1} alt="" />
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

    <section className='px-10 pb-32 md:mt-44 text-center'>
      <h2 className='font-bold text-2xl mb-9  md:text-5xl'>Project Brief</h2>
      <p className='leading-7 md:w-[70%] md:leading-loose md:text-xl tracking-wide m-auto'>A large percentage of  Nigerians remain completely financially excluded. Financial products and services seem out of reach to this large percentage of the population of Nigerians. A few pain points are: The long onboarding process, Lack of formal means of identification by Nigerians, Difficulty of access to financial products and services. Epay seeks to solve these problems.</p>
    </section>

    {/* user research  */}

  <section className='bg-lightGray dark:bg-[#0D0D0D] px-10 py-16 text-center'>
      <h2 className='font-semibold text-2xl mb-10 md:text-5xl'>User Research</h2>
      <h3 className='text-xl my-4 font-medium md:text-3xl'>THE OBJECTIVE</h3>
      <p className='font-light  md:tracking-wider md:text-xl md:w-3/5 md:m-auto md:leading-10'>This user research was conducted to unravell the reason behind the very low penetration and usage of financial products and services in the Nigerian population</p>

    <section className='bg-[#fff] dark:bg-[#2C2C2E] my-8 pt-8 pb-28 px-3'>
      <h3 className='mb-4 font-medium text-xl md:text-3xl md:tracking-wide'>THE ASKS & RESPONSE</h3>
      <h3 className='text-xl mb-7 md:tracking-wide md:text-3xl'>What are the painpoints for the unbanked?</h3>
      <div className='lg:pl-10'>

      <p className='text-left font-light leading-8 md:text-2xl md:mb-4 md:px-14'>There are several painpoints that kill the excitement of wanting to be unboarded on the current system. A few are: </p>
      <ul className='text-left font-light list-disc pl-6 leading-10 md:pr-14 md:pl-20 md:text-2xl md:space-y-5'>
        <li>No access to financial products and services as they seem out of reach to the unbanked </li>
        <li>Very long registration processes</li>
        <li>Very low trust in the existing system</li>
        <li>Lack of Formal Identification Documents</li>
        <li>Cash deposit is not possible after 4pm and on weekends in the banks, and this time is when many businesses are at their peak.</li>
        <li>The current system was designed for bank users as there’s no way an the unbanked can be unboarded.</li>
        <li>The current system was designed with a “Bank-Wallet”, “Wallet-Bank” user flow. </li>
      </ul>
      </div>
    </section>
  </section>

  {/* the oppourtunity  */}

  <section className='text-center bg-Gray dark:bg-[#2C2C2E] text-white px-6 py-10 md:py-20'>
    <h4 className='font-bold text-2xl mb-6 md:uppercase md:text-4xl '>The Opportunity</h4>
    <p className=' font-light md:text-2xl md:w-3/5 m-auto md:leading-10'>Nigeria is one of the countries in the world with over 40 percent of it’s population without access to financial products and servicesOur market is the over 73.2 million Nigerians who still save cash at home due to limited access to financial products and services.  With this solution, we know we can convert at least  25% of the unbanked population</p>
  </section>

  {/* the solution  */}

  <section className='text-center py-10'>
    <h3 className='mb-6 font-bold text-2xl md:text-4xl'>THE SOLUTION</h3>
    <p className=' px-8 mx-auto mb-14 leading-7 md:w-4/5 md:text-2xl md:leading-10'>As the sole product designer working on this project, I thought around redesigning the existing eNaira Merchant wallet as a stand alone app (epay). 
epay wil serve as  non bank led model acting as principal in forming agent banking relationships. 
The features captured in this redesign are:</p>
    <h4 className='mb-3 font-medium text-xl md:text-3xl'>Creation of an Agent Wallet</h4>
    <p className='font-light px-8 mx-auto leading-7 md:w-4/5 md:text-2xl md:leading-10'>This wallet allows merchants store eNaira and transact with it. Agents can now collect cash from customers and either topup the customer wallet or transcat a service for them</p>
    <div className='bg-lightGray dark:bg-[#2C2C2E] mx-3 mt-8 mb-14 px-3 pt-7 rounded-lg md:mx-24'>
      <img className='w-[80%] md:w-[60%] mx-auto' src={image2} alt="" />
    </div>
    <h4 className='mb-3 font-medium text-xl md:text-3xl'>Agent Wallet Withdrawal/Topup</h4>
    <p className='font-light px-8 mx-auto md:w-4/5 md:text-2xl'>Agents can now withdraw from their wallet into their bank accounts and also topup their wallets from their bank account. This wasn’t available in the previous design</p>
    <div className='bg-lightGray dark:bg-[#2C2C2E] mx-4 mt-8 mb-14 px-3 pt-12 rounded-lg md:mx-24'>
      <img className='w-[80%] md:w-[50%] mx-auto' src={image3} alt="" />
    </div>
    <h4 className='mb-3 font-medium text-xl md:text-3xl'>Customer account creation/management</h4>
    <p className='font-light px-8 mx-auto md:w-4/5 md:text-2xl'>Agents can now create tier one account for customers. The only prerequisite for the account creation is a phone number linked to NIN. This will help users get onboarded to the system and enjoy it while getting their formal means of identidication ready. Agents also can helpupgrade or manage user accounts</p>
    <div className='bg-lightGray dark:bg-[#2C2C2E] mx-4 mt-8 mb-14 px-3 pt-12 rounded-lg md:mx-24'>
      <img className='w-[80%] md:w-[50%] mx-auto' src={image4} alt="" />
    </div>
  </section>

  <section className='bg-[#FBFBFB] dark:bg-[#2C2C2E] mb-28 p-8 flex justify-between md:p-16'>
    <Link to='/wephco'>
    <div>
        <p className='text-black opacity-[50%] md:text-2xl dark:text-white dark:opacity-[50%]'>Previous</p>
        <h2 className='font-semibold text-xl md:text-5xl dark:text-white'>Wephco</h2>
    </div>
    </Link>
    <Link to='/wella-agent'>
    <div>
      <p className='text-black opacity-[50%] md:text-2xl dark:text-white dark:opacity-[50%]'>Next</p>
      <h2 className='font-semibold text-xl md:text-5xl dark:text-white'>Wella Agent</h2>
    </div>
    </Link>
  </section>
  <div className='pt-2'></div>
    </div>
    </>
  )
}

export default Epay