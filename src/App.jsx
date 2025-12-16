import './App.css';
import DATA from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const toggleLike = (entry) => {
  return { ...entry, liked: !entry.liked };
};

const countTotalLikes = (entryData) => {
  return entryData.reduce((total, entry) => total + (entry.liked ? 1 : 0), 0);
};
function App() {
  const [entryData, setEntryData] = useState(DATA);

  const handleLikechat = (id) => {
    setEntryData(preventryData =>
      preventryData.map(entry =>
        entry.id === id
          ? toggleLike(entry) : entry
      )
    );
  };

  const totalLikes = countTotalLikes(entryData);

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

