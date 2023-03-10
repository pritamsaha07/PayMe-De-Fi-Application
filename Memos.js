import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
const Memos=({state}) => {
  const [memos, setMemos] = useState([]);
  const {contract} = state;

  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getmemos();
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);

return(
<>

{memos.map((memo)=>{
    return(
      <Table striped bordered hover variant="dark" key={memo.timestamp} >
      <thead>
        <tr>
          <th>Name</th>
          <th>Message</th>
          <th>Time Stamp</th>
          <th>From</th>
        </tr>
      </thead>
      <tbody>
        <tr>
                <td>{memo.name}</td>
                <td>{memo.message}</td>
                <td>{String(memo.timestamp)}</td>
                <td>{memo.form}</td>
        </tr>
        </tbody>
    </Table>
);

})}
 
</>
);
};

export default Memos;