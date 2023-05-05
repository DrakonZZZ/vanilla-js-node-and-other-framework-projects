import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.background};
  padding: 0.2em 1rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border: 2px solid white;
  color: ${(props) => props.color};
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
      <StyledDiv background="#333333">
        <Date size="0.8rem">{year}</Date>
        <Date size="0.8rem">{month}</Date>
        <Date size="2rem">{day}</Date>
      </StyledDiv>
    </>
  );
};

Dates.propTypes = {
  date: PropTypes.object || PropTypes.string,
};

export default Dates;
