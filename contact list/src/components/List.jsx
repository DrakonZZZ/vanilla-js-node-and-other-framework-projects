import React from 'react';

const List = ({ people }) => {
  return (
    <div>
      <h3>You have {people.length} people in your contact list</h3>
      <ul>
        {people.map((list) => {
          console.log(list);
          return (
            <li key={list.login.uuid} className="person">
              <div>
                <img
                  src={list.picture.thumbnail}
                  alt={list.name}
                  className="img"
                />
                <h6>
                  {list.name.first} {list.name.last}
                </h6>
              </div>

              <div>
                <h5>{list.cell}</h5>
                <p>
                  <strong>City:</strong> <small>{list.location.city}</small>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
