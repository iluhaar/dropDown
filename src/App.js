// import './App.css';
import './App.scss'
import DropDown from './DropDown';

const items = [
  {
    id: 1,
    value: "first value",
  },
  {
    id: 2,
    value: "second value",
  },
  {
    id: 3,
    value: "third value",
  },
  {
    id: 4,
    value: "fourth value",
  },
]


function App() {
  return (
    <div className="App">
      <DropDown title="Sample title" items={items} multiselect/>
    </div>
  );
}

export default App;
