import './App.css';
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';


function App() {

  const notify = () => {
    toast.success("Wow so easy !")
 
  };
  return (
    <>
      <h1>FirstReact Button</h1>
      <div>
        <Button onClick={notify}>Notify !</Button>
        <ToastContainer position="top-center" />
      </div>
    </>
  );
}

export default App;
