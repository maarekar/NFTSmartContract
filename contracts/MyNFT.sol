// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "hardhat/console.sol";

contract MyNFT is ERC1155 {
    constructor(string memory tokenURI) public ERC1155(tokenURI) {
        console.log("create NFT");
    }
}