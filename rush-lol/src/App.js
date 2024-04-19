import React, { useState, useEffect } from 'react';
import './App.css';




// let source = {Image} + Champion.Image.full;
// let Image = images(`./${someVariable}.png`);
// let source = (Image = Champion.Image.full)


function App() {
  const [Champions, setChampions] = useState();


  useEffect(() => {
    fetch('https://ddragon.leagueoflegends.com/cdn/14.7.1/data/fr_FR/champion.json')
      .then(response => response.json())
      .then(response => setChampions(response.data))
      .catch(error => console.error('Error fetching Champions:', error));
  }, []);

  if (Champions) {
    Object.values(Champions).map((champion) => {
      console.log(champion)

      return
    })

    return (
      <div className="champion-list">
        {Object.values(Champions).map((Champion) => {

          return (
            <div className="champion-info" key={Champion.id}>
              <h7>{Champion.title}</h7>
              <h3 className="champion-title">{Champion.name}</h3>
              <img src={'../champion/' + Champion.image.full}></img>
              <h8 className="champion-title">{Champion.tags[0]}</h8>

            </div>
          )
        })}
      </div>
    );
  }

  return <div>Loading...</div>;
}

export default App;
