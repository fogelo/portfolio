import style from './Works.module.css'
import commonStyle from '../common/commonStyle.module.css';
import {Work} from './work/Work';

export const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${commonStyle.container} ${style.worksContainer}`}>
                <h2 className={style.title}>My works</h2>
                <div className={style.works}>
                    <Work title={'Название проекта'}
                          description={'Краткое описание Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam debitis esse fugiat illo voluptatibus?'}/>
                    <Work title={'Название проекта'}
                          description={'Краткое описание Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam debitis esse fugiat illo voluptatibus?'}/>
                </div>
            </div>
        </div>
    )
}