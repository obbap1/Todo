/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import './manage.css';

const Item = ({ name, status = false, deleteItem }) => (
  <div className="todo-list">
    {
      status ? <input type="checkbox" value={name} checked /> : <input type="checkbox" value={name} />
    }

    <span>{name}</span>
    <button type="button">Details</button>
    <button onClick={deleteItem} id="cancel" type="button">X</button>
  </div>
);

function useSpecific(item) {
  const [single, setSIngle] = useState(null);
}

function Manage() {
  const [list, setList] = useState([]);
  const [header, setHeader] = useState('');

  const handleChange = (event) => {
    setHeader(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setList([...list, { name: header, status: false }]);
    setHeader('');
  };

  const remove = (item) => {
    const newList = list.filter((x) => x.name !== item);
    setList(newList);
  };

  return (
    <div className="container">
      <div className="box" id="todos">
        <div className="todos-div">
          <h4 className="todo-header">Todos</h4>
          <form onSubmit={handleSubmit}>
            <input type="text" id="text" value={header} onChange={handleChange} />
            <input id="plus" type="submit" value="+" />
          </form>
          {
            list.length > 0 ? (
              <div className="results">
                {
                list.map((x) => <Item name={x.name} deleteItem={() => remove(x.name)} />)
              }
              </div>
            ) : (
              null
            )
          }

        </div>
      </div>
      <div className="box" id="specific">gkgkfgkfkg</div>
    </div>
  );
}

export default Manage;
