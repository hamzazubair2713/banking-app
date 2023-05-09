import React from "react";
import { stats } from "../constant";
import styles from "../style"

const Stats = () => {
  return(
    <>
    <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map(({id,title,value})=>(
      <div key={id} className={`${styles.flexCenter} flex-1`}>
        <h4 className="text-white font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[53px]">{value}</h4>
        <p className="text-gradient font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px]">{title}</p>
      </div>
    ))}
    </div>
    </>
  )
   
}

export default Stats;
