import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowList from './ShowList';
import ShowDetails from './ShowDetails';

function App() {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.log('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className="App p-3 mb-2 bg-info text-dark">
      <header className="App-header rounded p-3 mb-2 bg-warning text-dark">
        <h1>TV Shows</h1>
      </header>
      {selectedShow ? (
        <ShowDetails show={selectedShow} onBack={() => setSelectedShow(null)} />
      ) : (
        <ShowList shows={shows} onShowSelect={(show) => setSelectedShow(show)} />
      )}
    </div>
  );
}

export default App;