import style from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.link} href="home">home</a>
            <a className={style.link} href="skills">skills</a>
            <a className={style.link} href="work">work</a>
            <a className={style.link} href="contacts">contacts</a>
        </div>
    )
}