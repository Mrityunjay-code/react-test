//import logo from './logo.svg';
import './App.css';
import Login from './compo/Login';
import ToggleText from './compo/ToggleText';
//import Count from './compo/Count';
//import Product from './compo/Product';
//import Greeting from './compo/Greeting';
import StudentList from './compo/StudentList';
import Register from './compo/Register';

function App() {
  //send the data using props
  // const name="Alice"
  const students = ['Alice', 'mk', 'sk', 'David'];
  return (
    <div className="App">
      {/* <Greeting name={name}/> */}
 <ToggleText/>
{/* <Count/> */}
      {/* <Product name="laptop" price="1000" quality="3"/> */}
      <h1>Student List</h1>
      <StudentList studentNames={students} />
      <Login/>
      <Register/>
   
    </div>
  );
}

export default App;





