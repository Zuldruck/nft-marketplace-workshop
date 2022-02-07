var NftMarketplace = artifacts.require("./NftMarketplace.sol");

module.exports = function(deployer) {
  deployer.deploy(NftMarketplace);
};
