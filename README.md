# 🚀 Monad Auto Contract Interaction Bot

This is a beginner-friendly guide and working example of how to automatically interact with a smart contract on the [Monad](https://monad.xyz) blockchain using JavaScript, `ethers.js`, and Node.js.

You can use this setup to automate function calls like `openBox()` at a fixed interval — useful for games, raffles, or claim-based smart contracts.

## 📦 Project Structure

```
monad-auto-interact/
├── .env                # Store sensitive keys here (never share!)
├── .gitignore
├── openBox.js          # The main script to run
├── package.json
└── README.md           # You're reading this!
```

## 🛠 Prerequisites

- [Node.js](https://nodejs.org/) installed
- Access to a Monad RPC endpoint
- A wallet private key (preferably a **burner wallet**)
- The deployed **smart contract address**
- The **ABI** or method signature for the contract function (e.g., `function openBox()`)

## 📥 Installation

Clone this repo or create the folder manually, then:

```bash
npm install
```

Install dependencies:

```bash
npm install ethers dotenv
```

## ⚙️ Environment Setup

Create a `.env` file in the root directory:

```
PRIVATE_KEY=your_private_key_here
RPC_URL=https://your-monad-rpc-url
CONTRACT_ADDRESS=0xYourSmartContractAddress
```

> ⚠️ **Never share your `.env` file. Add it to `.gitignore`**.

## 🧠 How It Works

The script calls the `openBox()` method every 10 seconds using a signed transaction. You can change the function name or ABI to match your contract.

## 📜 Example Script: `openBox.js`

```js
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
```

## ▶️ Running the Script

To start interacting with the contract:

```bash
node openBox.js
```

## 🔐 Security Tips

- Use `.gitignore` to protect sensitive files:

```bash
echo ".env" >> .gitignore
```

- Do NOT use your main wallet. Use a test wallet or burner address.
- Monitor gas usage if running this on mainnet or public chains.

## 📌 Notes

- Replace the ABI with your contract's actual interface if needed.
- You can adjust the time interval in `setInterval()` (milliseconds).
- Want to call a function with arguments? Just modify the `contract.functionName(arg1, arg2)` line.

## ✅ License

MIT — feel free to fork and improve.

## 🙋‍♂️ Need Help?

Feel free to open an issue or contact me for help getting started on Monad!
