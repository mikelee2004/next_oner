"use client"
import Link from "next/link"
import styles from "./product.module.scss"
import Image from "next/image"
import { useState } from "react"
import CartIcon from "../../../public/icons/cart.png"
import HoveredCartIcon from "../../../public/icons/hoveredCart.png"

export function ProductCard() {
    
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <div className={styles.product}>
            <Link href='product1'>
                <div className={styles.product_clickable_image}>
                    <Image 
                        src="/assets/product1.png"
                        alt="product"
                        height={222}
                        width={220}
                        className={styles.product_image} 
                        />
                </div>
            </Link>
            <Link href="/" className={styles.product_title}>
                <div className={styles.product_information}>
                    <p>Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.</p>
                </div>
            </Link>
            <div  className={`${styles.priceAndCart} ${isHovered ? styles.expanded : ''}`}>
                <p className={styles.price}>
                    2 334 ₽
                </p>
                <button className={`${styles.addToCartButton} ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Image src={isHovered ? HoveredCartIcon : CartIcon} alt=";" className={styles.addToCartButton_image}></Image>
                </button>
            </div>
        </div>
    )
}