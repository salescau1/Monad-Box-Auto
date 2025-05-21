# 🚀 Monad Auto Contract Interaction Bot (DO WITH YOUR OWN RISK!!!

This is a beginner-friendly guide and working example of how to automatically interact with a smart contract on the [Monad](https://monad.xyz) blockchain using JavaScript, `ethers.js`, and Node.js.

You can use this setup to automate function calls like `openBox()` at a fixed interval — useful for games, raffles, or claim-based smart contracts.

## 📦 Project Structure

```
Monad-Box-Auto/
├── .env                # Store sensitive keys here (never share!)
├── .gitignore
├── openBox.js          # The main script to run
├── package.json
```

## 🛠 Prerequisites

- [Node.js](https://nodejs.org/) installed
- A wallet private key (you can get it from Warpcast Settings -> Advanced -> Show Wallet Recovery Phrase -> Copy Key.

## 📥 Installation

Clone this repo 
```bash
https://github.com/salescau1/Monad-Box-Auto.git
```
```bash
cd Monad-Box-Auto
```

```bash
npm install
```

Install dependencies:

```bash
npm install ethers dotenv
```

## ⚙️ Environment Setup

Edit `.env` file in the root directory:

```
PRIVATE_KEY=your_private_key_here
```

> ⚠️ **Never share your `.env` file. Add it to `.gitignore`**.

## 🧠 How It Works

The script calls the `openBox()` method every 10 seconds using a signed transaction.


## ▶️ Running the Script

To start interacting with the contract:

```bash
node openBox.js
```

## 🔐 Security Tips

- Monitor gas usage if running this on mainnet or public chains.

## 📌 Notes

- You can adjust the time interval in `setInterval()` (milliseconds).
