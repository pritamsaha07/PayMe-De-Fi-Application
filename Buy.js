import {ethers} from "ethers";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const Buy=({state})=>{
    const buy=async(event)=>{
        event.preventDefault()
        const {contract}=state;
        const name=document.querySelector('#name').value;
        const message=document.querySelector('#message').value;
        console.log(name,message,contract);

        const amount={value:ethers.utils.parseEther("0.001")};
        const transaction=await contract.buychain(name,message,amount);
        await transaction.wait();
        console.log("Transaction is done");
    }
    return<>
   <div>
   <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control id="name" type="name" placeholder="Enter you name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
       
        <Form.Control  id="message" type="message" placeholder="Enter your message" />
      </Form.Group>
    </Form>
   </div>
    
   <Button variant="success" type="submit" onClick={buy}>Pay</Button>{' '}
    
    </>
}
export default Buy;