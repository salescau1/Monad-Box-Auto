require("dotenv").config();
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const contractAddress = process.env.CONTRACT_ADDRESS;

// Example ABI with the openBox method
const ABI = [
  "function openBox() public"
];

const contract = new ethers.Contract(contractAddress, ABI, wallet);

async function openBox() {
  try {
    const tx = await contract.openBox();
    console.log("Tx sent:", tx.hash);
    const receipt = await tx.wait();
    console.log("Confirmed:", receipt.transactionHash);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

setInterval(openBox, 10000); // Run every 10 seconds
