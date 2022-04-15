import style from './Contacts.module.css'
import commonStyle from '../common/commonStyle.module.css';

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${commonStyle.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.form}>
                    <div className={style.formElement}><input type="text"/></div>
                    <div className={style.formElement}><input type="text"/></div>
                    <div className={style.formElement}><textarea/></div>
                    <button className={style.btn}>Send</button>
                </form>
            </div>
        </div>
    )
}