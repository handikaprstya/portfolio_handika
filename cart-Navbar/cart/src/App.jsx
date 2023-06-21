import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData } from "./redux/dataSlice";
import { Heading } from "@chakra-ui/react";
import { Cart } from "./pages/cart";
import Nav from "./components/navbar";


function App() {
  const dispatch = useDispatch()
  const getData = async() => {
    try {
      const data = await fetch("http://localhost:2000/carts") // fetch untuk memasukan url atau link
      const jsonData = await data.json()
      dispatch(addData(jsonData));
    } 
    catch (err){
      console.log("error");
    }
  }

  useEffect(() => {
    getData();
  }, [])
  return (
  <>
    <Nav/>
    <Cart/>
  </>
  );
}

export default App;
