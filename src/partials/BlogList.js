import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Dynamically loading project components
const projectFiles = require.context('../projects', false, /\.js$/);
const projectComponents = projectFiles.keys().map((filename) => {
  return projectFiles(filename).default;
});

const BlogList = () => {
  const [inputValue, setInputValue] = useState('');

// Handle the input change
const handleInputChange = (e) => {
  setInputValue(e.target.value);  // Store the input value directly
};

  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // Function to send transaction
const sendTransaction = async (e) => {
  e.preventDefault();

  try {
    const amount = parseFloat(inputValue);  // Convert the input value to a float
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount greater than 0, click embed for tip');
      return;
    }

    // Since BNB also has 18 decimals, we'll convert it in the same way as Ether
    const amountInWei = (amount * 1e18).toString();  // Convert BNB to Wei

    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });  // Request account access if needed

      const transactionParameters = {
        to: 'CtRJPQJeNrb3ZRRBaASkkT8Mh2biTYnCXipC4HBUEgRe',  // Must match the intended recipient's address
        from: window.ethereum.selectedAddress,  // Use the selected address
        value: amountInWei,  // Amount in wei, as a hex string
        // Removed gasPrice and gas limit to let MetaMask handle it automatically
      };

      // Sending the transaction
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });

      alert('Transaction sent! Transaction hash: ' + txHash);
      console.log('Transaction Hash:', txHash);
    } else {
      alert('MetaMask is not installed. Please install MetaMask to use this feature.');
    }
  } catch (error) {
    console.error('Transaction Error:', error);
    alert('Failed to send transaction: ' + error.message);
  }
};


  // Function to connect wallet
  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log(accounts[0]);  // Log user's Ethereum account
    } catch (error) {
      console.error('Error connecting to Ethereum wallet:', error);
    }
  };

  const toggleEasterEgg = () => {
    setShowEasterEgg(prev => !prev);
  };

  

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
            <h1 className="h1" data-aos="fade-up">Current Project</h1>
          </div>

          <div className="pb-12 md:pb-20">
            <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
              <a href="https://chat.openai.com/share/8fcb283c-562e-4350-891a-b77b0816c8ec" target="_blank" rel="noopener noreferrer" className="relative block group" data-aos="fade-right" data-aos-delay="200">
                <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"></div>
                <figure className="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                  <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={require('../images/Screenshot 2024-04-01 202933.png').default} width="540" height="303" alt="Blog post 01" />
                </figure>
              </a>

              <div data-aos="fade-left" data-aos-delay="200">
                <header>
                  <div className="mb-3">
                    <div className="flex flex-wrap items-center -m-1">
                    <div className="flex">
                        <input
                          type="number"
                          value={inputValue}
                          onChange={handleInputChange}
                          placeholder="Amount, Embed the truth"
                          className="flex-grow text-gray-100 py-1 px-3 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-150 ease-in-out m-1"
                        />
                      </div>

                      <button onClick={sendTransaction} className="text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out m-1">
                        Fund
                      </button>

                      <button className="text-center text-gray-100 py-1 px-3 rounded-full bg-green-500 hover:bg-green-600 transition duration-150 ease-in-out m-1" onClick={toggleEasterEgg}>
                        {showEasterEgg ? "Under Construction. Fund Project Embed to Resolve. Hint 0.0001634579 = 0.1" : "Embed"}
                      </button>
                    </div>
                  </div>
                  <h3 className="h3 text-2xl lg:text-3xl mb-2">
                    <Link to="/blog-post" className="hover:text-gray-100 transition duration-150 ease-in-out">Project Embed</Link>
                  </h3>
                </header>
                <p className="text-lg text-gray-400 flex-grow">Change of plans, launching on Solana, send contributioins to The DAO's multisig wallet 'CtRJPQJeNrb3ZRRBaASkkT8Mh2biTYnCXipC4HBUEgRe'. Fuel our cutting-edge two-tier affiliate program: a catalyst for community expansion, not traditional pyramids. Forge your tribe, seamlessly integrate, and champion transparency and privacy.</p>
                <footer className="flex items-center mt-4">
                  <Link to="#">
                    <img className="rounded-full flex-shrink-0 mr-4" src={require('../images/Screenshot 2024-03-28 081454.png').default} width="40" height="40" alt="Author 04" />
                  </Link>
                  <div>
                    <Link to="#" className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">Change of plans, launching on Solana, send contributioins to The DAO's multisig wallet 'CtRJPQJeNrb3ZRRBaASkkT8Mh2biTYnCXipC4HBUEgRe' SynergiCoin #LifeLock #RIO #WhiteLable</Link>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Goal $7500</span>
                  </div>
                </footer>
              </div>
            </article>
          </div>

          <div className="max-w-sm mx-auto md:max-w-none">
            <h4 className="h4 pb-6 mb-10 border-b border-gray-700" data-aos="fade-up">Upcoming Projects - Next Up Project SynergyCoin (SGC)</h4>
            <section className="relative">
              <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {projectComponents.map((Component, index) => (
                  <Component key={index} />
                ))}
              </div>
            </section>
          </div>

          {/* Pagination */}
          <nav className="flex justify-center pt-16" role="navigation" aria-label="Pagination Navigation">
            <ul className="inline-flex flex-wrap font-medium text-sm -m-1">
              <li className="m-1">
                <span className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-500">Please</span>
              </li>
              <li className="m-1">
                <Link to="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">1</Link>
              </li>
              <li className="m-1">
                <Link to="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">2</Link>
              </li>
              <li className="m-1">
                <Link to="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">3</Link>
              </li>
              <li className="m-1">
                <span className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-500">...</span>
              </li>
              <li className="m-1">
                <Link to="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">12</Link>
              </li>
              <li className="m-1">
                <Link to="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">Fix Me</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
