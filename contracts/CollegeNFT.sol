// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CollegeNFT is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    event TokenMinted(address indexed nftHolder);

    string private _name;
    string private _symbol;

    constructor() ERC721("CollegeNFT", "CNFT") {
        _name = "CollegeNFT";
        _symbol = "CNFT";
    }

    /**
     * Sets the _name and _symbol with given parameters
     */
    function setNameAndSymbol(string memory name, string memory symbol) public {
        _name = name;
        _symbol = symbol;
    }

    function name() public view virtual override returns (string memory) {
        return _name;
    }

    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }
}