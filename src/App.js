import './App.css';
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Cource from './components/Cource';
import AllCources from './components/AllCources';
import AddCourse from './components/AddCourse';


function App() {

  const notify = () => {
    toast.success("Wow so easy !",{
      position:"top-center"
    })
    
  };
  return (
    <>
      <Home />
      <AllCources/>
      <AddCourse/>
    </>
  );
}

export default App;
