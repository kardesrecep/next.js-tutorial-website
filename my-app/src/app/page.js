import Image from 'next/image'
import styles from "./page.module.css"
import Hero from '/public/hero.png'

export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>
        Better design for your digital products.
      </h1>
      <p className={styles.desc}>
        Turning your Idea into Reality. We bring together the teams from the
        global tech industry.
      </p>
     <button className={styles.button}>See  Our Works</button>
    </div>
    <div className={styles.item}>
    <Image src={Hero} alt='hero' className={styles.img} />
{/*  
!haricten resim eklemek icin next.configde duzenleme yapmak gerek 
<Image src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='img' width={500} height={500} /> */}
   </div>
   </div>
  )
}
