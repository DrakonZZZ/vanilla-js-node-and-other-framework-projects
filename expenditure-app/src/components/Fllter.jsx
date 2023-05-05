import styled from 'styled-components';
import PropTypes from 'prop-types';

const Sort = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  color: white;
`;

const Filter = ({ onSort, selected }) => {
  const sortYearHandler = (e) => {
    onSort(e.target.value);
  };
  return (
    <Sort>
      <label htmlFor="">Sort By Year</label>
      <select value={selected} onChange={sortYearHandler}>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </Sort>
  );
};

Filter.propTypes = {
  onSort: PropTypes.func,
  selected: PropTypes.string,
};

export default Filter;
