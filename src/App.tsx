
import './App.css';
import { Status } from './components/Status';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Greet } from './components/Greet';

function App() {

  return (
    <div className="App">
      {/* <Greet name='Prafull' messageCount={20} isloggedIn={false} />
      <Person name={personName} />
      <PersonList names={personList} /> */}
      <Status status = 'success' />
      <Heading>Placeholder text  222</Heading>
      <Oscar>
        <Heading>Oscar goes to deacaprio</Heading>
      </Oscar>
      <Greet name = 'Max decaprio' isloggedIn = {true} />
    </div>
  );
}

export default App;
