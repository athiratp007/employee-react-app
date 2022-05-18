import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import EmployeeReg from './Components/EmployeeReg';
import SearchEmployee from './Components/SearchEmployee';

function App() {
  return (
   <div>
     <EmployeeReg/>
     <SearchEmployee/>
   </div>
  );
}

export default App;
