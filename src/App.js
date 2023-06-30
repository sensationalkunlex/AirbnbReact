import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './pages/home/TopNav/TopNav';
import icon from './assets/icons/profile.png'
import MiddleNav from  './pages/home/MiddleNav/MiddleNav';
import Sidebar from './pages/home/Sidebar/Sidebar';
import MainSection from './pages/home/MainSection/MainSection';
 
function App() {
  return (
    <div className="App">
     <Nav icon={icon}/>
     <MiddleNav/>
   <div className="d-flex">
<div className="side-page">
<Sidebar/>
</div>
<div className="main-body">
<MainSection/>
</div>
<div className="mb-5 pb-5 bot">
</div>
   </div>


    </div>
  );
}

export default App;
