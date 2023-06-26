import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './pages/home/TopNav/TopNav';
import icon from './assets/icons/profile.png'
 
function App() {
  return (
    <div className="App">
     <Nav icon={icon}/>
    </div>
  );
}

export default App;
