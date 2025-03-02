import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import BookingForm from './Components/BookingForm';
import { BrowserRouter, Routes , Route ,Link } from 'react-router-dom';
import DataInTable from './Components/DataInTable';
import Login from './Components/Login';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
     <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/Register' element={<BookingForm />}/>
      <Route path='/Data' element={<DataInTable />}/>

     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
