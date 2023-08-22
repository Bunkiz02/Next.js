import styles from "@/styles/Home.module.css"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
export default function Home() {
  return (
    <>
      <Head>
        <title>หน้าเเรก | BANK YES CASE</title>
        <meta name="keyword" content="Natdanai,ร้านค้า,เสื้อผ้า"/>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>หน้าเเรกของเว็บไซต์</h1>
        <Image src="/image.png" width={500} height={500} alt="logo" />
        <p>ยินต้อนรับเข้าสู่เว็บไซต์</p>
        <Link href="/products" className={styles.btn}>ดูสินค้าทั้งหมด</Link>
      </div>


    </>
  )
}
