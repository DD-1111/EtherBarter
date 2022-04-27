import "./styles/App.css";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import CollegeNFT from "./utils/CollegeNFT.json";

// Constants
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const App = () => {

  const createNFT = async () => {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const collegeNFT = new ethers.Contract(
        CONTRACT_ADDRESS,
        CollegeNFT.abi,
        signer
      );
      const name = await collegeNFT.name();
      console.log(name);
      await collegeNFT.setNameAndSymbol("NFTCollege", "NFT");
      const newName = await collegeNFT.name();
      console.log(newName);
    }
  };


  return (
    <div>
      CollegeNFT
      <button onClick={createNFT}>button</button>
    </div>
  )
}

export default App;