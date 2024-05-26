import Baner from "../public/banner.png"
import Link from "next/link"
import Image from "next/image"
import styles from "./home.module.scss"

export default function Home() {
  return (
      <main className={styles.homepage}>
          <div className={styles.homepage_container}>
              <Link href="/product" className={styles.homepage_baner}>
                  <Image src={Baner} alt="big baner"/>
              </Link> 
          </div>  

      </main>
  )
}