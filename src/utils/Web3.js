import React, { useState } from 'react';
import Web3 from 'web3';

const WalletComponent = () => {
    const [account, setAccount] = useState(null);
    const [amount, setAmount] = useState('');
    const [token, setToken] = useState('');
    const [web3, setWeb3] = useState(null);

    // This function will handle wallet connection and setting up Web3
    const connectWallet = async () => {
        try {
            if (!window.ethereum) throw new Error("No crypto wallet found. Please install it.");

            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(window.ethereum);
            setWeb3(web3);
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
        } catch (err) {
            console.error(err.message);
            alert(err.message);
        }
    };

    // This function will handle sending the funds
    const sendFunds = async () => {
        if (!web3 || !account) {
            return alert("Please connect your wallet first.");
        }

        try {
            const transactionParameters = {
                to: 'YOUR_WALLET_ADDRESS', // Replace with your wallet address
                from: account,
                value: web3.utils.toWei(amount, 'ether')
            };

            // Send the transaction
            const txHash = await web3.eth.sendTransaction(transactionParameters);
            console.log('Transaction Hash:', txHash);
            alert('Funds sent successfully!');
        } catch (err) {
            console.error('Send error:', err);
            alert('Failed to send funds: ' + err.message);
        }
    };

    return (
        <div className="mb-3">
            <div className="flex flex-wrap items-center -m-1">
                <input
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    className="text-gray-100 py-1 px-3 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-150 ease-in-out m-1"
                />
                <select
                    value={token}
                    onChange={e => setToken(e.target.value)}
                    className="text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out m-1"
                >
                    <option value="">Coin</option>
                    <option value="ETH">Ethereum</option>
                    <option value="BNB">BNB</option>
                    <option value="AVAX">Avalanche</option>
                    <option value="MATIC">Polygon</option>
                    <option value="ARB">Arbitrum</option>
                    <option value="FTM">Fantom</option>
                    <option value="AURORA">Aurora</option>
                </select>

                {!account ? (
                    <button
                        onClick={connectWallet}
                        className="text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out m-1"
                    >
                        Connect Wallet
                    </button>
                ) : (
                    <button
                        onClick={sendFunds}
                        className="text-center text-gray-100 py-1 px-3 rounded-full bg-green-500 hover:bg-green-600 transition duration-150 ease-in-out m-1"
                    >
                        Fund
                    </button>
                )}

            </div>
        </div>
    );
}

export default WalletComponent;
