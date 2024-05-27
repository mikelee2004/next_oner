import Baner from "../public/banner.png"
import Link from "next/link"
import Image from "next/image"
import styles from "./home.module.scss"
import { ProductCard } from "./components/ProductCard"

export default function Home() {
  return (
      <main className={styles.homepage}>
        <ProductCard />
      </main>
  )
}