import css from './notification.module.css'

export const Notification = ({ message }) => {
    return <p className={css.notification__message}>{message}</p>
}