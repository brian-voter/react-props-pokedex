import './App.css';
import Pokedex from './Pokedex';

/**
 * Renders a Pokedex with several pokemon in it
 * @returns single element Pokedex
 */
function App() {
  return (
    <div>
      <Pokedex />
      <Pokedex />
      <Pokedex />
    </div>
  );
}

export default App;
