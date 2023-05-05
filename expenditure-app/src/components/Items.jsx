import { useState } from 'react';
import ExpensesList from './ExpensesList';
import PropTypes from 'prop-types';
import Filter from './fllter';

const Items = ({ list }) => {
  const [filterData, setFilterData] = useState('2021');

  const sortHandler = (sortData) => {
    setFilterData(sortData);
  };

  const filterContent = list.filter((item) => {
    return item.date.getFullYear().toString() === filterData;
  });

  return (
    <>
      <Filter selected={filterData} onSort={sortHandler} />
      <ExpensesList list={filterContent} />
    </>
  );
};

Items.propTypes = {
  list: PropTypes.array,
};

export default Items;
