import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }
  const personList = [
    {
      first: 'Bruce',
      last: 'wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]
  return (
    <div className="App">
      <Greet name="MAx" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={personList} />
    </div>
  )
}

export default App;
