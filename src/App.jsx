import { useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

function App() {
  const {openModal} = useSelector((store)=>store.modal)
  return (
    <main>
     <Navbar/>
     {openModal?<Modal/>:<CartContainer/>} 
    </main>
  )
}
export default App;
