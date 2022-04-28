import { Route, Routes } from 'react-router-dom';
import './App.css';
import Volunteer from './Pages/Volunteer/Volunteer';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/volunteer' element={<Volunteer></Volunteer>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
