"use client"
import Image from "next/image"
import styles from "./category.module.scss"
import { Category } from "@/app/types/category"
import Link from "next/link"

export function CategoryCard(props: Category) {
    return (
        <div className={styles.category_module}>
            <div className={styles.container}>
                <div className={styles.categories_block}>
                    <Link href="" className={styles.categories_block_content}>
                        <Image 
                            src={props.image}
                            alt="category"
                            height={48}
                            width={48}
                            className={styles.category_icon} 
                        />
                        <p className={styles.category_name}><span>{props.name}</span></p>
                    </Link>    
                </div>
            </div>
        </div>
    )
}