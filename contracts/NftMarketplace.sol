// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NftMarketplace is ERC721 {
  uint _totalSupply;

  constructor () ERC721("NFT Marketplace", "NFTM") {
    // Initialize the marketplace with the firsts NFT
    _totalSupply = 5;
  }

  // function buyGenesisToken(/* tokenId */) public payable {
  //   // Check if the owner has enough ether to buy the NFT
  //   // Check if the ownerOf the token is the contract address
  //   // Transfer the ownership of the NFT to the message sender
  // }

  // function getAddressTokens(/* owner */) public view returns (uint[] memory) {
  //   uint[] memory tokenIds = new uint[](/* ownerTokenNb */);
  //   uint tokenIdx = 0;

  //   // Loop through all the tokens
  //   // Check if the ownerOf each token is owner
  //   // If it is, add the tokenId to the array
    
  //   return tokenIds;
  // }

  fallback () external payable {}
  receive () external payable {}

  // function getBalance() public view returns (/* ?? */) {
  //   // Return the balance of the contract
  // }


  // function withdrawBalance() public {
  //   // Transfer the balance of the contract to the message sender only if he is the owner
  // }
}
