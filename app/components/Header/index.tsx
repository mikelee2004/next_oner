import Link from "next/link"
import Image from "next/image"
import Logo from "../../public/logo.png"
import Category from "../../public/category.svg"
import Cart from "../../public/cart.png"
import Quantity from "../../public/5.png"
import Location from "../../public/location.png"
import Phone from "../../public/phone-number.png"
import User from "../../public/user.png"
import Search from "../../public/Search.png"

import styles from "./header.module.scss";
 
export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>

{/* ВЕРХНЯЯ ЧАСТЬ ХЭДЕРА */}

                <div className={styles.header_upper}>
                    <Link href="/home">
                        <Image src={Logo} alt="logo-oner"></Image>
                    </Link>
                    <div className={styles.header_upper_buttons}>

                        <div className={styles.search_bar}>
                            <p className={styles.search_bar_text}>Введите номер запчасти или VIN</p>
                            <Image src={Search} alt="search-icon" className={styles.search_bar_icon} />
                        </div>
                        

                        <div className={styles.location}>
                            <Image src={Location} alt="location-icon" className={styles.location_icon}/>
                            <p className={styles.city}>Санкт-Петербург</p>
                        </div>
                        

                        <div className={styles.phone_number}>
                            <Image src={Phone} alt="phone-icon" className={styles.phone_number_image} />
                            <p className={styles.phone_number_content}>+7 (347) 229-46-45</p>
                        </div>

                        <div className={styles.user}>
                            <Image src={User} alt="user-icon" className={styles.user_icon} />
                            <Link href="/profile">Вход / Регистрация</Link>
                        </div>
                        
                    </div>
                </div>

                <hr className={styles.hr} />
{/* НИЖНЯЯ ЧАСТЬ ХЭДЕРА */}
                <div className={styles.header_lower}>
                    {/* Кнопка "Все категории" */}
                    <Link className={styles.all_categories_button} href="/categories">
                            <Image src={Category} alt="all cats"></Image>Все категории
                    </Link>
                    <div className={styles.category_links}>
                        <Link className={styles.category_button} href="/tech">Запчасти для ТО</Link>
                        <Link className={styles.category_button} href="/oils">Автомасла</Link>
                        <Link className={styles.category_button} href="/car-lights">Лампочки</Link>
                        <Link className={styles.category_button} href="/car-windows">Аккумуляторы</Link>
                    </div>
                    {/* Остальные кнопки */}

                        
                        {/* --------------------------------- */}

                    {/* КНОПКА КОРЗИНЫ */}
                    <Link className={styles.cart_button} href="/cart">
                        <Image src={Cart} alt="."></Image>
                        Корзина
                        <Image className={styles.items_quantity} src={Quantity} alt="items-quantity"></Image>
                    </Link>
                </div>

            </div>  
        </header>
    )
}
    
