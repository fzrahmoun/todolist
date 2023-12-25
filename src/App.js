import AddTask from './Components/Addtask';
import ListTask from './Components/ListTask';
import './App.css'
function App() {
  return (
    <div className='container'>
      <h1>To do list </h1>
      <AddTask/>
      <ListTask/>
    </div>
  );
}

export default App;
