// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract DynamicSvgNft is ERC721 {
    // mint
    // store SVG information somewhere
    // Some logic to say "Show X Image" or "Show Y Image"

    uint256 private s_tokenCounter;

    constructor() ERC721("Dynamic SVG NFT", "DSN") {}

    function mintNft() public {
        _safeMint(msg.sender, s_tokenCounter);
        s_tokenCounter = s_tokenCounter + 1;
    }
}
