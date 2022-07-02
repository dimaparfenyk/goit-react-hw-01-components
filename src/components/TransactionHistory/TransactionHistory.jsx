import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import css from './Transaction.module.css';

const TransactionHistory = ({ items}) => {
    return (<table className={css.transaction_history}>
         <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
    <tbody>
        {items.map(({id,type,amount,currency})=> {
            return (<TransactionItem
                key={id}
                type={type}
                amount={amount}
                currency={currency}
            />
            );
    })}
        </tbody> 
    </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }).isRequired,
    ),
};

export default TransactionHistory

