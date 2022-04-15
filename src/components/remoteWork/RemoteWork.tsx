import style from './RemoteWork.module.css'
import commonStyle from '../common/commonStyle.module.css';

export const RemoteWork = () => {
    return (
        <div className={style.RemoteWorkBlock}>
            <div className={`${commonStyle.container} ${style.RemoteWorkContainer}`}>
                <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
                <button className={style.btn}>Нанять меня</button>
            </div>
        </div>
    )
}