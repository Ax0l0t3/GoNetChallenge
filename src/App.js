import logo from './logo.svg';
import './App.css';
import Filter from './components/filter-component';
import List from './components/list-component';

function App() {
  return (
    <div className="app-container">
      <h1>My TV Shows</h1>
      <Filter />
      <List />
    </div>
  );
}

export default App;
