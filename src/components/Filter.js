import React from 'react';

export default function Filter({ filterData, category, setCategory }) {
  const buttonStyles = {
    backgroundColor: '#191970',
    width: '120px',
    color: '#fff',
    fontSize: '1rem',
    padding: '0.5rem',
    margin: '0.5rem',
    borderRadius: '0.25rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  };

  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'gold',
  };


  function filterHandler(title) {
    setCategory(title)
  }
  return (
    <div style={containerStyles}>
      {filterData.map((data) => {
        return (
          <button onClick={ () => filterHandler(data.title)} key={data.id} style={buttonStyles} >
            {data.title}
          </button>
        );
      })}
    </div>
  );
}
