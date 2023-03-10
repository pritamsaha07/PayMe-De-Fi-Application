const hre = require("hardhat");
async function main() {
   
    const pay=await hre.ethers.getContractFactory("pay");
    const contract=await pay.deploy();
  
    await contract.deployed();
  
    console.log("Address of contract:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  