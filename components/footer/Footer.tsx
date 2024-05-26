import Link from "next/link"
import styles from "./footer.module.scss"
import { stringifyCookie } from "next/dist/compiled/@edge-runtime/cookies"
import Image from "next/image"
import AskQuestion from "./../../public/Shape.png"
import Status from "./../../public/status.png"


export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_information}>
                <div className={styles.footer_text_block}>
                    <Link href='/menu' className={styles.footer_text_title}>Меню компании</Link>
                    <Link href='/about' className={styles.footer_text_link}>Что такое Oner</Link>
                    <Link href='/payment' className={styles.footer_text_link}>Реквизиты и информация</Link>
                    <Link href='/news' className={styles.footer_text_link}>Новости</Link>
                    <Link href='/employment' className={styles.footer_text_link}>Вакансии</Link>
                    <Link href='/importers' className={styles.footer_text_link}>Поставщикам</Link>
                    <Link href='/contacts' className={styles.footer_text_link}>Контакты</Link>
                </div>

                <div className={styles.footer_text_block}>
                    <Link href='/menu' className={styles.footer_text_title}>Каталоги</Link>
                    <Link href='/about' className={styles.footer_text_link}>Оригинальные запчасти</Link>
                    <Link href='/payment' className={styles.footer_text_link}>Неоригинальные запчасти</Link>
                    <Link href='/news' className={styles.footer_text_link}>Запчасти для ТО</Link>
                    <Link href='/employment' className={styles.footer_text_link}>Автомасла</Link>
                    <Link href='/importers' className={styles.footer_text_link}>Аккумуляторы</Link>
                    <Link href='/contacts' className={styles.footer_text_link}>Распродажа</Link>
                </div>

                <div className={styles.footer_text_block}>
                    <Link href='/menu' className={styles.footer_text_title}>Помощь</Link>
                    <Link href='/about' className={styles.footer_text_link}>Часто задаваемые вопросы</Link>
                    <Link href='/payment' className={styles.footer_text_link}>Консультация Online</Link>
                    <Link href='/news' className={styles.footer_text_link}>Оплата</Link>
                    <Link href='/employment' className={styles.footer_text_link}>Доставка заказа</Link>
                    <Link href='/importers' className={styles.footer_text_link}>Возврат товара</Link>
                    <Link href='/contacts' className={styles.footer_text_link}>Забыл пароль</Link>
                </div>

                <div className={styles.footer_text_block}>
                    <Link href='/menu' className={styles.footer_text_title}>Каталоги</Link>
                    <Link href='/about' className={styles.footer_text_link}>Список брендов</Link>
                    <Link href='/payment' className={styles.footer_text_link}>Популярные товары</Link>
                    <Link href='/news' className={styles.footer_text_link}>Наличие на складах</Link>
                </div>

                <div className={styles.footer_support_service}>
                    <Link href="/" className={styles.support_button}>
                        <Image src={AskQuestion} alt="iuhirh" className={styles.support_icon}/>
                        <div className={styles.support_button_text}>
                            <p className={styles.support_button_title}>Консультация Онлайн</p>
                            <p className={styles.support_button_description}>Задавайте вопросы онлайн</p>
                        </div>
                    </Link>
                    <div className={styles.status}>
                        <Image src={Status} alt="status" className={styles.status_icon}/>
                        <p className={styles.status_text}>Сервис работает в обычном режиме</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}