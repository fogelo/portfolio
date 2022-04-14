import style from './Skills.module.css'
import container from '../common/Container.module.css'
import {Skill} from './skill/Skill';

export const Skills = () => {
    return (
        <div className={style.skills}>
            <h2>Skills</h2>
            <Skill title={'HTML'}
                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt fuga harum hic in molestias mollitia, nemo quidem velit voluptatum?'}/>
            <Skill title={'CSS'}
                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asp'}/>
            <Skill title={'JS'}
                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt fuga harum hic in'}/>
        </div>
    )
}