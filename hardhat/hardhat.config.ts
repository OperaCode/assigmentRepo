import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config({ path: "../.env" });


const { SEPOLIA_URL, PRIVATE_KEY, ETHERSCAN_API_KEY, ARC_RPC_URL, LISK_SEPOLIA_URL} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.28",


  networks: {
    liskSepolia: {
      url: LISK_SEPOLIA_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      // chainId: <LISK_SEPOLIA_CHAIN_ID>,
    },
    // sepolia: {
    //   url: SEPOLIA_URL,
    //   accounts: [`0x${PRIVATE_KEY}`],
    //   // chainId: 11155111,
    // },
    arcTestnet: {
      url: ARC_RPC_URL,          // https://rpc.testnet.arc.network
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      // chainId: 5042002,
    },
  },
  etherscan: {
    apiKey: `${ETHERSCAN_API_KEY}`,
  },

  
};

export default config;
