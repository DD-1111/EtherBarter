import * as React from 'react';
import { useState, useEffect } from "react";
import MetaMask from './assets/metamask-fox.svg';
import EthLogo from './assets/eth_logo.svg';
import './styles/Account.css';

/**
 * Slices the account
 */
const sliceAccount = (account) => {
  return `${account.slice(0, 5)}...${account.slice(-4)}`
}

export default function Account() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");

  /*
   * Connects to Metamask wallet
   */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const balance = await ethereum.request({
        method: "eth_getBalance",
        params: [
          accounts[0],
          'latest'
        ]
      });
      console.log("Accounts:", accounts);
      console.log("Connected", accounts[0]);
      console.log("Balance", balance);
      setCurrentAccount(accounts[0]);
      setCurrentBalance(parseInt(balance, 16) / 1000000000000000000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {connectWallet()});

  return (
    <React.Fragment className="center-image">
      <div className='center'>      
        <img className="photo" src={MetaMask} alt="MetaMask Logo" />
      </div>
      <p/>
      <div className='center'>
        {sliceAccount(currentAccount)}
      </div>
      <div className='center'>
        <img className='photo-small' src={EthLogo}/>
      </div>
      <div className='center'>
        {currentBalance} ETH
      </div>
    </React.Fragment>
  );
}