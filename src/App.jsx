import './App.css';
import DATA from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

function App() {
  const [entryData, setEntryData] = useState(DATA);

  const handleLikechat = (id) => {
    setEntryData(preventryData =>
      preventryData.map(entry =>
        entry.id === id
          ? { ...entry, liked: !entry.liked }
          : entry
      )
    );
  };

  const totalLikes = entryData.filter(entry => entry.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>

      <main>
        <ChatLog entries={entryData} onLike={handleLikechat} />
      </main>
    </div>
  );
}

export default App;

