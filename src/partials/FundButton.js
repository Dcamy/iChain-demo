import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const getNetworkName = chainId => {
  switch(chainId) {
    case 1: return 'Ethereum Mainnet';
    case 56: return 'Binance Smart Chain';
    case 43114: return 'Avalanche Mainnet';
    case 137: return 'Polygon Mainnet';
    case 42161: return 'Arbitrum One';
    case 250: return 'Fantom Opera';
    case 1313161554: return 'Aurora';
    default: return 'an unsupported network';
  }
};

{/* const getNetworkName = chainId => {
  switch(chainId) {
    case 5: return 'Ethereum Goerli Testnet'; // Get test ETH from https://goerli-faucet.slock.it/
    case 97: return 'Binance Smart Chain Testnet'; // Get test BNB from https://testnet.binance.org/faucet-smart
    case 43113: return 'Avalanche Fuji Testnet'; // Get test AVAX from https://faucet.avax-test.network/
    case 80001: return 'Polygon Mumbai Testnet'; // Get test MATIC from https://faucet.polygon.technology/
    case 421611: return 'Arbitrum Rinkeby Testnet'; // Get test ARB from https://rinkeby.arbitrum.io/rinkeby-faucet
    case 4002: return 'Fantom Testnet'; // Get test FTM from https://faucet.fantom.network/
    case 1313161555: return 'Aurora Testnet'; // Get test AURORA from https://testnet.aurora.dev/
    default: return 'an unsupported network';
  }
};
*/}

const FundProjectComponent = ({ projectWalletAddress }) => {
  const [amount, setAmount] = useState('');
  const [coin, setCoin] = useState('');
  const [walletConnected, setWalletConnected] = useState(false);
  const [transactionMessage, setTransactionMessage] = useState('');
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    } else {
      setTransactionMessage('Please install MetaMask to use this feature.');
    }
  }, []);

  const handleConnectWallet = async () => {
    try {
      if (web3) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletConnected(true);
        setTransactionMessage('Wallet connected successfully.');
      }
    } catch (error) {
      console.error('Connection error:', error);
      setTransactionMessage('Failed to connect the wallet.');
    }
  };

  const handleSendFunds = async () => {
    if (!web3) {
      setTransactionMessage('Web3 is not initialized. Install MetaMask.');
      return;
    }
    if (!walletConnected) {
      setTransactionMessage('Please connect your wallet first.');
      return;
    }

    const chainId = await web3.eth.getChainId();
    if (coin && chainId !== Web3.utils.toBN(coinToChainId[coin]).toNumber()) {
      setTransactionMessage(`Please switch to the ${getNetworkName(coinToChainId[coin])}.`);
      return;
    }

    try {
      const accounts = await web3.eth.getAccounts();
      await web3.eth.sendTransaction({
        from: accounts[0],
        to: projectWalletAddress,
        value: web3.utils.toWei(amount, 'ether') // Assuming the user has entered the amount for the native coin
      });
      setTransactionMessage(`Successfully sent ${amount} ${coin} to the project.`);
    } catch (error) {
      console.error('Funding error:', error);
      setTransactionMessage('Transaction failed.');
    }
  };

  // Replace with your actual CSS classes and structure
  return (
    <div className="fund-project-component">
      <input
        type="number"
        placeholder="0.00"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        value={coin}
        onChange={(e) => setCoin(e.target.value)}
      >
        <option value="">Select Coin</option>
        <option value="ETH">Ethereum</option>
        <option value="BNB">BNB</option>
        <option value="AVAX">Avalanche</option>
        <option value="MATIC">Polygon</option>
        <option value="ARB">Arbitrum</option>
        <option value="FTM">Fantom</option>
        <option value="AURORA">Aurora</option>
      </select>

      {/* <select
  value={coin}
  onChange={(e) => setCoin(e.target.value)}
>
  <option value="">Select Coin</option>
  <option value="ETH">Goerli ETH</option>  // Ethereum Goerli Testnet
  <option value="BNB">BSC Testnet BNB</option>  // Binance Smart Chain Testnet
  <option value="AVAX">Fuji AVAX</option>  // Avalanche Fuji Testnet
  <option value="MATIC">Mumbai MATIC</option>  // Polygon Mumbai Testnet
  <option value="ARB">Rinkeby ARB</option>  // Arbitrum Rinkeby Testnet
  <option value="FTM">Fantom Testnet FTM</option>  // Fantom Testnet
  <option value="AURORA">Aurora Testnet</option>  // Aurora Testnet
</select>
*/}
      <button onClick={handleConnectWallet}>
        {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
      </button>
      <button onClick={handleSendFunds}>
        Fund
      </button>
      <p>{transactionMessage}</p>
    </div>
  );
};

export default FundProjectComponent;
