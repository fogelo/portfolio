import style from './Skill.module.css'
import container from '../../common/Container.module.css'

type SkillPropsType = {
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}/>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    )
}