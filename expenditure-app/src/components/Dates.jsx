import PropTypes from 'prop-types';
import styled from 'styled-components';

const DateFormat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #504f54;
  padding: 0.2em 1rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border: 2px solid white;
`;

const Date = styled.div`
  font-size: ${(props) => props.size};
`;

const Dates = ({ date }) => {
  let month = date.toLocaleString('en-US', { month: 'short' });
  let year = date.getFullYear();
  let day = date.toLocaleString('en-US', { day: '2-digit' });
  return (
    <>
      <DateFormat>
        <Date size="0.8rem">{year}</Date>
        <Date size="0.8rem">{month}</Date>
        <Date size="2rem">{day}</Date>
      </DateFormat>
    </>
  );
};

Dates.propTypes = {
  date: PropTypes.object,
};

export default Dates;
