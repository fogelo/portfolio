import style from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={style.nav}>

            <a href="home">home</a>
            <a href="skills">skills</a>
            <a href="work">work</a>
            <a href="contacts">contacts</a>
        </div>
    )
}