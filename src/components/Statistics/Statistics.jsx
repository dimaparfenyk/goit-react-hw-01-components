import PropTypes from 'prop-types';
import css from './Statics.module.css';

const Statistics = ({ stats, title}) => {
    return (<section className={css.statistics}>
        {title && <h2 className={title}>{title}</h2>}
        <ul className={css.stat_list}>
            {stats.map(({ id, label, percentage }) => {
                return <li
                    key={id}
                    className={css.item}
                    style={{backgroundColor:getRandomHexColor()}}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
                </li>
            })}
        </ul>
    </section>);
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
export default Statistics;