import style from './Header.module.css'
import {Nav} from '../nav/Nav';

export const Header = () => {
  return (
      <div className={style.header}>
          Header
          <Nav/>
      </div>
  )
}