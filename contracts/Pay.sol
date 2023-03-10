// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract pay{
    struct Memo{
        string name;
        string messsage;
        uint timestamp;
        address form;

    }
    Memo[] memos;
    address payable owner;

    constructor(){
        owner=payable(msg.sender);
    }
    function buychain(string memory name,string memory message) public payable{
           require(msg.value>0, "Please pay something");
           owner.transfer(msg.value);
           memos.push(Memo(name,message,block.timestamp,msg.sender));
    }

   function getmemos() public view returns(Memo[] memory){
       return memos;
   }
}