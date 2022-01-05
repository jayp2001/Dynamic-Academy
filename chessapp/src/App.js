import logo from './logo.svg';
import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom"
import mainPage from './Pages/Mainpage/mainPage';
import unknownpage from './Pages/unknownpage';
function App() {
  return (
    <div>
        <Routes>
          <Route path="/home" component={mainPage} />
          <Route path="/" component={unknownpage} />
        </Routes>
      </div>
  );
}

export default App;
