import React, { Component } from 'react'
import dino from '../dino.png'
import './App.css'
import detectEthereumProvider from '@metamask/detect-provider'

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    const provider = await detectEthereumProvider()
    // Preferred way to detect the Ethereum provider. See https://docs.metamask.io/guide/ethereum-provider.html.
    if (provider) {
      console.log("MetaMask Ethereum provider detected.")
      return;
    }
    window.alert("Please install MetaMas!")
  }

  async loadBlockchainData() {
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://github.com/smarshall-spitzbart"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="https://github.com/smarshall-spitzbart"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={dino} className="App-logo" alt="logo" /> 
                </a>
                <h1>Shawns first html stuff</h1>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
