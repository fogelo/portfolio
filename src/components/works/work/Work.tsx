import style from './Work.module.css'
import commonStyle from '../common/commonStyle.module.css';

type WorkPropsType = {
    title: string
    description: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <div className={style.work}>
            <div className={style.img}>
                <button className={style.btn}>Смотреть</button>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}