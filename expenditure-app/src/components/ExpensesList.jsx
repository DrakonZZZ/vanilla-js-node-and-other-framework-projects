import PriceItem from './PriceItem';
import { StyledDiv } from './Dates';
import PropTypes from 'prop-types';

const ExpensesList = ({ list }) => {
  const noData = (
    <StyledDiv color="White" background="#0096ff">
      No content for this year found
    </StyledDiv>
  );

  if (list.length === 0) {
    return noData;
  }

  return (
    <>
      {list.map((item) => (
        <PriceItem
          key={item.id}
          title={item.title}
          amount={+item.amount}
          date={item.date}
        />
      ))}
    </>
  );
};

ExpensesList.propTypes = {
  list: PropTypes.array,
};

export default ExpensesList;
