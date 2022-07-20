import { Routes,Route } from 'react-router-dom';
import { Coinpage, Homepage } from './pagess';
import { Alert, Header } from './components';
import './App.css';

function App() {

  return (
      <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/coins/:id" element={<Coinpage/>}/>
      </Routes>
      <Alert/>
    </div>
  );
}

export default App;

