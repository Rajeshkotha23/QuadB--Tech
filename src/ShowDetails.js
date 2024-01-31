import React from 'react';

const ShowDetails = ({ show, onBack }) => {
  return (
    <div className="show-details rounded p-3 mb-2 bg-success text-white border border-0">
      <header className="App-header p-3 mb-2 bg-success text-white border border-0">
        <button className='btn btn-primary btn-sm' onClick={onBack}>Back</button>
      </header>
      <h2>{show.name}</h2>
      <img className='rounded' src={show.image ? show.image.medium : 'https://via.placeholder.com/150'} alt={show.name} />
      <p>{show.summary}</p>
      <button className='btn btn-primary btn-sm' onClick={() => alert('Book a movie ticket')}>Book a movie ticket</button>
    </div>
  );
};

export default ShowDetails;