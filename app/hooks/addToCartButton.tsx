"use client"

import Image from "next/image"
import { useState } from "react"
import styles from "../components/ProductCard/product.module.scss"
import CartIcon from "../../public/icons/cart.png"
import HoveredCartIcon from "../../public/icons/hoveredCart.png"
   
export default function AddToCartButton() {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }
    return (
        <button className={`${styles.addToCartButton} ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Image src={isHovered ? HoveredCartIcon : CartIcon} alt=";" className={styles.addToCartButton_image}></Image>
        </button>
    )
}