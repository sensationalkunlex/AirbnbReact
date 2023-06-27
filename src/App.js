import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './pages/home/TopNav/TopNav';
import icon from './assets/icons/profile.png'
import MiddleNav from  './pages/home/MiddleNav/MiddleNav';
 
function App() {
  return (
    <div className="App">
     <Nav icon={icon}/>
     <MiddleNav/>
    </div>
  );
}

export default App;
