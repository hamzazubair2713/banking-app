import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks,socialMedia } from '../constant'


const Footer = () => {
  
  return (
    <section className={`${styles.flexCenter} ${styles.
      paddingY} flex-col`}>
      <div className= {`${styles.flexStart} md:flex-row
      flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain' />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink)=>(
          <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className='font-poppins font-medium text-[18px] text-white'>{footerLink.title}</h4>
            <ul className='mt-4 list-none'>
{footerLink.links.map((link, index) => (
<li key={link.name}
className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length-1? "mb-4" : 'mb-0'}`}>
  {link.name}
</li>
))}
</ul>
          </div>
        ))}
        </div>
       
      </div>
     <div className='flex w-full justify-between items-center md:flex-row flex-col'>
     <p className='font-poppins font-normal text-[18px] text-center text-white'> &copy; 2021 HooBank. All Rights Reserved.</p>
     <div className='flex flex-row md:mt-0 mt-6'>
      {socialMedia.map((logo ,index,id)=>(
        <img key={index.id} className={`w-[21px] h-[21px] mb-2 object-contain cursor-pointer ${index !== logo.length-1 ?"mr-6" :"mr-0"}`} src={logo.icon} alt={logo.id}   />
      ))}
     </div>
     </div>
      </section>
  )
}

export default Footer