import './App.css';
import MainLayout from './components/layout/MainLayout/MainLayout';
import LeftNavBar from './components/layout/LeftNavBar/LeftNavBar';
import TopNavBar from './components/layout/TopNavBar/TopNavBar';
import EventsBar from './components/layout/EventsBar/EventsBar';


function App() {
  return (
    <div className="App">
        <LeftNavBar/>
 < TopNavBar/>
 <MainLayout/>
 <EventsBar/>
    </div>
  );
}

export default App;
