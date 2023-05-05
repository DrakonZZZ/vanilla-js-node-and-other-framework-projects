import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dates from './Dates';

const Title = styled.h1`
  font-size: 1.3rem;
  color: black;
  color: white;
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #0096ff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: white;
  margin: 1rem 0;
`;

export const SubWrapper = styled.div`
  color: #0096ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: white;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
`;

const PriceItem = ({ title, date, amount }) => {
  return (
    <>
      <Wrapper>
        <Title>
          <Dates date={new Date(date)} />
        </Title>

        <SubWrapper>
          <h2>{title}</h2>
          <div>${amount}</div>
        </SubWrapper>
      </Wrapper>
    </>
  );
};

PriceItem.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  date: PropTypes.object || PropTypes.string,
};
export default PriceItem;
