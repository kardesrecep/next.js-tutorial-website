import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2024 ReCoCo. All Right Reserved</div>
      <div className={styles.social}>
        <Image src="/1.png" className={styles.icon}  width={20} height={20} alt="ReCoCo Facebook Account" />
        <Image src="/2.png" className={styles.icon}  width={20} height={20} alt="ReCoCo" />
        <Image src="/3.png" className={styles.icon}   width={20} height={20}alt="ReCoCo" />
        <Image src="/4.png" className={styles.icon}   width={20} height={20} alt="ReCoCo" />
      </div>
    </div>
  );
};

export default Footer;
