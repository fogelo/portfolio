import style from './Main.module.css'
import container from '../common/Container.module.css'

export const Main = () => {
    return (
        <div className={style.main}>
            <div className={container.container}>
                <h1>
                    Привет, меня зовут Антон! <br/>
                    Я front-end разработчик!
                </h1>
                <div className={style.photo}/>
            </div>
        </div>
    )
}