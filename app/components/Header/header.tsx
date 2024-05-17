import Link from "next/link"
import Image from "next/image"
import Logo from "../../../public/logo.png"
import Category from "../../../public/category.svg"
import Cart from "../../../public/cart.png"
import Quantity from "../../../public/5.png"

 
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-content">
                    <Link href="/">
                        <Image src={Logo} alt="logo-oner"></Image>
                    </Link>
                    <nav>
                        <Link href="/search">Search</Link>
                        <Link href="/location">Location</Link>
                        <Link href="/call">Support</Link>
                        <Link href="/profile">Profile</Link>
                    </nav>
                </div>

                <div className="header-categories">
                    {/* Кнопка "Все категории" */}
                    <Link className="all-categories-button" href="/categories">
                            <Image src={Category} alt="all cats"></Image>Все категории
                    </Link>

                    {/* Остальные кнопки */}
                    <nav> 
                        <Link className="category-button" href="/location">Запчасти для ТО</Link>
                        <Link className="category-button" href="/call">Автомасла</Link>
                        <Link className="category-button" href="/profile">Оригинальные запчасти</Link>
                        <Link className="category-button" href="/car-windows">Неоригинальные запчасти</Link>
                        <Link className="category-button" href="/car-windows">Лампочки</Link>
                        <Link className="category-button" href="/car-windows">Аккумуляторы</Link>
                        
                        {/* --------------------------------- */}
                    </nav>
                    {/* КНОПКА КОРЗИНЫ */}
                    <Link className="cart-button" href="/cart">
                        <Image src={Cart} alt="."></Image>
                        Корзина
                        <Image className="items-quantity" src={Quantity} alt="rioghjr"></Image>
                    </Link>
                </div>

            </div>  
        </header>
    )
}

export default Header