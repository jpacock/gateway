
import './App.css'
import './styles.css';
import 'daisyui/dist/full.css';

function App() {
  return (
    <div>
      <h1 className="mb-5">Gateway</h1>
      <div className="flex flex-col space-y-5">
        <a href="https://jpacock.com/sprinkler">
          <button className="btn btn-outline btn-info">Sprinkler</button>
        </a>
        <a href="https://jpacock.com/recipes">
          <button className="btn btn-outline btn-info">Recipes</button>
        </a>
      </div>
    </div>
  );
}

export default App
