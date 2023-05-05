import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledForm = styled.form`
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
`;

const StyledLabel = styled.label`
  display: block;
  margin: 0.5rem 0;
  font-weight: bold;
  color: Black;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.8rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const StyledButton = styled.button`
  background-color: #0096ff;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  display: flex;
  justify-content: flex-end;
`;

const AddExpense = ({ expenseData }) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const changeTitleHandler = (e) => {
    setUserInput((prev) => {
      return { ...prev, title: e.target.value };
    });
  };
  const changeAmountHandler = (e) => {
    setUserInput((prev) => {
      return { ...prev, amount: e.target.value };
    });
  };
  const changeDateHandler = (e) => {
    setUserInput((prev) => {
      return { ...prev, date: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    expenseData(userInput);
    setUserInput({ ...userInput, title: '', amount: '', date: '' });
  };

  return (
    <>
      <StyledForm onSubmit={submitHandler}>
        <div>
          <StyledLabel htmlFor="">Title</StyledLabel>
          <StyledInput
            type="text"
            value={userInput.title}
            onChange={changeTitleHandler}
          />
        </div>
        <div>
          <StyledLabel htmlFor="">Date</StyledLabel>
          <StyledInput
            type="Date"
            min="01-01-2022"
            max="12-30-2023"
            value={userInput.date}
            onChange={changeDateHandler}
          />
        </div>
        <div>
          <StyledLabel htmlFor="">Amount</StyledLabel>
          <StyledInput
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={changeAmountHandler}
          />
        </div>
        <div>
          <StyledButton type="submit">Add Expenses</StyledButton>
        </div>
      </StyledForm>
    </>
  );
};

AddExpense.propTypes = {
  expenseData: PropTypes.func,
};

export default AddExpense;
