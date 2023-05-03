import PriceItem from './PriceItem';
import PropTypes from 'prop-types';

const Items = ({ title, amount, date }) => {
  return (
    <>
      <PriceItem title={title} amount={amount} date={date} />
    </>
  );
};

Items.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  date: PropTypes.object,
};

export default Items;
