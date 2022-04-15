import style from './Header.module.css'
import {Nav} from '../nav/Nav';

export const Header = () => {
  return (
      <div className={style.header}>
          <h2 className={style.logo}>Header</h2>
          <Nav/>
      </div>
  )
}