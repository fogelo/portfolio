import style from './Main.module.css'
import commonStyle from '../common/commonStyle.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${commonStyle.container} ${style.mainContainer}`}>
                    <h1 className={style.title}>
                        Привет, меня зовут Антон! <br/>
                        Я front-end разработчик!
                    </h1>
                    <div className={style.photo}>
                        photo
                    </div>
            </div>
        </div>
    )
}