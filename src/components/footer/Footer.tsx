import style from './Footer.module.css'
import commonStyle from '../common/commonStyle.module.css';
import {Network} from './network/Network';

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${commonStyle.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Орлов Антон</h2>
                <div className={style.networks}>
                    <Network/>
                    <Network/>
                    <Network/>
                    <Network/>
                </div>
                <h2 className={style.copyright}>© 2022 все права защищены</h2>
            </div>
        </div>
    )
}