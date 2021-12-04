import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

import qr from '../images/qr-code.png'

let provider = '';
    const providerOptions = {

        walletconnect: {
            display: {
                logo: 'https://pngimg.com/uploads/qr_code/qr_code_PNG6.png',
                name: "Mobile",
                description: "Scan qrcode with your mobile wallet"
            },
            package: WalletConnectProvider,
            options: {
                infuraId: "300f6c2781d54b899326b7e8b53659c5"
            },
        }

    };

    


    const web3Modal = new Web3Modal({
        network: "mainnet",
        cacheProvider: false,
        providerOptions,
        theme: 'light',
    });




    const WalletConnect = async () => {

        provider = await web3Modal.connect();
        const web3 = await new Web3(provider);
        // Subscribe to accounts change
        provider.on("accountsChanged", (accounts) => {
            console.log(accounts);
        });

        // Subscribe to chainId change
        provider.on("chainChanged", (chainId) => {
            console.log(chainId);
        });

        // Subscribe to provider connection
        provider.on("connect", (chainId) => {
            console.log(chainId);
        });

        // Subscribe to provider disconnection
        provider.on("disconnect", (error) => {
            console.log("disconned");
        });
        //return provider;

        provider.on('error', (err) => {
            console.log(err);
        })

        return web3;
    }

  const getProvider = () => {
    return provider;
  }

  // const disconnectWallet = () => {
  //   //await provider.close();
  //     const web3Modal = new Web3Modal({ cacheProvider: true });
  //     web3Modal.clearCachedProvider();
  //   }

export default WalletConnect;

export{provider};

// export {disconnectWallet};