import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import BakingShop from './Component/BakingShop/BakingShop';
import Question from './Component/Question/Question';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <BakingShop></BakingShop>
    <Question></Question>
    </div>
  );
}


export default App;
