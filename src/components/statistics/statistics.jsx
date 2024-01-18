import css from './statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    return <ul className={css.statistics__list}>
            <li><span className={css.statistics__name}>Good:</span> {good}</li>
            <li><span className={css.statistics__name}>Neutral:</span> {neutral}</li>
            <li><span className={css.statistics__name}>Bad:</span> {bad}</li>
            <li><span className={css.statistics__name}>Total:</span> {total}</li>
            <li><span className={css.statistics__name}>Positive feedback:</span> {positivePercentage}%</li>
        </ul>
}