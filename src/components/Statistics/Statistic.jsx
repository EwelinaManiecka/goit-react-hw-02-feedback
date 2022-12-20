import css from './Statistic.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <div className={css.statistics}>
      <h2 className={css.statistics__title}>Statistics</h2>
      <ul className={css.statistics__list}>
        {Object.entries(options).map(option => (
          <li className={css.statistics__item} name={option[0]} key={option[0]}>
            <span className={css.statistics__name}>
              {option[0][0]} : {option[1]}
            </span>
          </li>
        ))}

        <li className={css.statistics__item}>
          <span>Total: {total}</span>
        </li>
        <li className={css.statistics__item}>
          <span>Positive feedback: {positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
