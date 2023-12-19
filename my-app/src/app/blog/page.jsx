import React from 'react'
import styles from './page.module.css'
import Link from "next/link"
import Image from "next/image"

const Blog = () => {
  return (
    <div className={styles.container} >
<Link href="/testId">
  <div className={styles.imageContainer}>
    <Image
      className={styles.image}
      src=""
      alt=""
      width={400}
      height={250}
    
    />
  </div>
  <div className={styles.content}>
<h1 className={styles.title}>Test</h1>
<p className={styles.desc}>Description</p>

  </div>
</Link>

    </div>
  )
}

export default Blog