import { Routes,Route } from 'react-router-dom';
import { Coinpage, Homepage } from './pagess';
import { Header } from './components';
import './App.css';

function App() {

  return (
      <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/coins/:id" element={<Coinpage/>}/>
      </Routes>
    </div>
  );
}

export default App;

