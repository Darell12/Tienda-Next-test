import Link from "next/link"
import style from "../styles/Menu.module.css"

const Menu = () => {
  return (
    <nav className={style.menu}>
        <div>
            <Link href='/' className={style.link}>
                Home
            </Link>
            <Link href='/store' className={style.link}>
                Store
            </Link>
            <Link href='/faq' className={style.link}>
                FAQ
            </Link>
        </div>

        <div>
             <a href="#"> Cart (0)</a>
        </div>
    </nav>
  )
}

export default Menu