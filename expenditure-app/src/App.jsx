import { useState } from 'react';
import styled from 'styled-components';
import { StyledDiv } from './components/Dates';
import { StyledButton } from './components/AddExpense';
import { Devices } from './components/Devices';
import Items from './components/Items';

import AddExpense from './components/AddExpense';

const Container = styled.div`
  padding: 2rem 4rem;
  background-color: #504f54;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 10px;
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  @media ${Devices.sm} {
    max-width: 80vw;
  }
  @media ${Devices.lg} {
    max-width: 70vw;
  }
  @media ${Devices.xl} {
    max-width: 50vw;
  }
`;

const MainHeader = styled.h1`
  text-align: center;
  color: white;
  margin-bottom: 1rem;
`;

const dummyExpenses = [
  { id: 1, title: 'Rental car', amount: 40, date: new Date(2021, 0, 1) },
  { id: 2, title: 'Bidet', amount: 240, date: new Date(2021, 2, 11) },
  {
    id: 3,
    title: 'Hooks and cables',
    amount: 120,
    date: new Date(2022, 4, 17),
  },
  { id: 4, title: 'chainsaw', amount: 155, date: new Date(2022, 6, 22) },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const expenseHandler = (enterExpense) => {
    const newExpenseData = {
      ...enterExpense,
      id: Math.random().toString(),
    };

    setExpenses((expenses) => {
      return [newExpenseData, ...expenses];
    });
  };

  const [active, setActive] = useState(false);

  const activeButton = () => {
    setActive(true);
  };

  const closeWindow = () => {
    setActive(false);
  };

  return (
    <Container>
      <MainHeader>
        <StyledDiv>Expenses Tracker </StyledDiv>
      </MainHeader>

      {active && (
        <AddExpense expenseData={expenseHandler} onClose={closeWindow} />
      )}
      {!active && (
        <div>
          <StyledButton onClick={activeButton}>Add New Expenses</StyledButton>
        </div>
      )}

      <Items list={expenses} />
    </Container>
  );
}

export default App;
