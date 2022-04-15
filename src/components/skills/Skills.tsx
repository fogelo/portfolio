import style from './Skills.module.css'
import {Skill} from './skill/Skill';
import commonStyle from '../common/commonStyle.module.css';

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${commonStyle.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'HTML'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt fuga harum hic in molestias mollitia, nemo quidem velit voluptatum?'}/>
                    <Skill title={'CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asp'}/>
                    <Skill title={'JS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt fuga harum hic in'}/>
                </div>
            </div>
        </div>
    )
}