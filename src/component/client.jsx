import React from "react";
import { clients } from "../constant";
import styles from "../style";

const client = () => {
  return (
   <section className={`${styles.flexCenter} my-4`}>
    <div  className={`${styles.flexCenter} flex-wrap w-full`}>
    {clients.map((client)=>(
      <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
        <img src={client.logo} className="sm:w-[192.25px] w-[100px] object-contain" alt="brand-logo" />
      </div>
    ))}
    </div>
   </section>
  )
};

export default client;
