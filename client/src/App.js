import React, { Component } from "react";
import NftMarketplaceContract from "./contracts/NftMarketplace.json";
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = { genesisTokens: [], web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = NftMarketplaceContract.networks[networkId];
      const instance = new web3.eth.Contract(
        NftMarketplaceContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  generateGenesisTokens = async () => {
    const { contract } = this.state;
  
    // Call getAddressTokens with the address of the contract
    // Get the tokens and store them in the state.genesisTokens array
  };

  buyNft = async (tokenId) => {
    const { accounts, contract } = this.state;

    // Call buyGenesisToken with the tokenId
    // and send enough ether to the contract for this transaction to succeed
    // with the first account in the accounts array
  }

  getBalance = async () => {
    const { contract } = this.state;

    // Call getBalance function on the contract
    // and console.log the result
  }

  withdrawBalance = async () => {
    const { accounts, contract } = this.state;

    // Call withdrawBalance function on the contract
    // and send the transaction with first account in the accounts array
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>NFT Marketplace</h1>
        {/* Display the contract address */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          {this.state.genesisTokens.map((tokenId, idx) => (
            <div style={{ padding: '10px' }} key={`token-${idx}`}>
              {/* Display the image of the token located at `http://localhost:3000/tokens/${tokenId}.jpeg` */}
              {/* Add a button to buy the token */}
            </div>
          ))}
        </div>
        {/* Add a button to get the smart contract balance */}
        {/* Add a button to withdraw the contract balance */}
      </div>
    );
  }
}

export default App;
