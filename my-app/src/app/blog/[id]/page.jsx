import React from 'react'
import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image"

const getData = async () => { 
const res=await fetch("https://jsonplaceholder.typicode.com/posts",{
  cache:"no-store"
})

if(!res.ok){
  throw new Error("Failed  to fetch data")

}
return res.json()


 }

const BlogPost = async ({ params }) => {
 const data=await getData()
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/5467937/pexels-photo-5467937.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/18114403/pexels-photo-18114403/free-photo-of-white-egret-standing-in-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="leylek"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         {data.content}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;