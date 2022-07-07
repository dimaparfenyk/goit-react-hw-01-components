import PropTypes from 'prop-types';
import css from './Transaction.module.css';

const TransactionItem = ({ type, amount, currency }) => {
    return (<tr className={css.tableRow}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>);
};

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
}
export default TransactionItem;