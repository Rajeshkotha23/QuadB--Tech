import React from 'react';

const ShowList = ({ shows, onShowSelect }) => {
  return (
    <main>
      {shows.map(show => (
        <div key={show.show.id} onClick={() => onShowSelect(show.show)} className="show-card p-3 mb-2 bg-primary-subtle text-emphasis-primary rounded">
          <h2>{show.show.name}</h2>
          <img className='rounded' src={show.show.image ? show.show.image.medium : 'https://via.placeholder.com/150'} alt={show.show.name} />
          <p>{show.show.summary.replace(/<[^>]*>/g, '').substring(0, 100)}...</p>
        </div>
      ))}
    </main>
  );
};

export default ShowList;