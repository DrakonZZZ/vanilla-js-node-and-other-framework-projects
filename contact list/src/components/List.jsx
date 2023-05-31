import React from 'react';

const List = ({ people }) => {
  return (
    <div>
      <h3>You have {people.length} people in your contact list</h3>
      <ul>
        {people.map((list) => {
          return (
            <li key={list.id} className="person">
              <img src={list.image} alt={list.name} className="img" />
              <div>
                <h4>{list.name}</h4>
                <p>{list.calls} Calls</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
