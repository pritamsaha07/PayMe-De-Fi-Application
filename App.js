import {useState, useEffect} from 'react';
import {ethers} from "ethers";
import './App.css';
import abi from "./contract/pay.json";
import Buy from './components/Buy';
import Memos from './components/Memos';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function App() {

  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })

  useEffect(()=>{
    const connectWallet=async()=>{
      const contractAddress="0x9D7f74d0C41E726EC95884E0e97Fa6129e3b5E99";
      const contractAbi=abi.abi;
      try{
        const{ethereum}=window;
        if(ethereum){
          const accounts=await ethereum.request({method:"eth_requestAccounts",})

        }
        const provider=new ethers.providers.Web3Provider(ethereum);
        const signer =provider.getSigner();
        const contract= new ethers.Contract(contractAddress,contractAbi,signer);
        setState({provider,signer,contract});
      }
      catch(error){
        console.log(error);
      }
    };
    connectWallet();

  },[]); 
  console.log(state);
  return (
    <div className="App">
      <Card>
        <Card.Img variant="top" src="https://gamerules.com/wp-content/uploads/PAY-ME.png" />
      </Card>
       <Buy state={state}></Buy>
       <Memos state={state}></Memos>
    </div>
  );
}

export default App;
