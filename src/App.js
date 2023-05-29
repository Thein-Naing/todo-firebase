import Title from './components/Title';
import AddTodo from './components/AddTodo';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>

    </div>
  );
}

export default App;
