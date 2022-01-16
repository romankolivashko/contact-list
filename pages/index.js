import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <div>
     <h1 className={styles.title}>Homepage</h1>
     <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae tempore quos nam officiis sequi porro minus nisi, enim eius culpa autem ut impedit aliquam nemo, quis magnam reprehenderit ipsa placeat!</p>
     <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae tempore quos nam officiis sequi porro minus nisi, enim eius culpa autem ut impedit aliquam nemo, quis magnam reprehenderit ipsa placeat!</p>
     <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae tempore quos nam officiis sequi porro minus nisi, enim eius culpa autem ut impedit aliquam nemo, quis magnam reprehenderit ipsa placeat!</p>
     <Link href="/users">
      <a className={styles.btn}>See User Listing</a>
     </Link>
   </div>
  )
}
