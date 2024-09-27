require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("solidity-coverage")
require("hardhat-deploy")

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "https://eth-sepolia"
const SONIC_RPC_URL = process.env.SONIC_RPC_URL || "https://sonic.testnet"
const FANTOM_TESTNET_RPC_URL =
    process.env.FANTOM_TESTNET_RPC_URL || "https://fantom.testnet"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key"
const FANTOMSCAN_API_KEY = process.env.FANTOMSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
            blockConfirmations: 6,
        },
        fantom_testnet: {
            url: FANTOM_TESTNET_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 4002,
            blockConfirmations: 6,
        },
        sonic: {
            url: SONIC_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 64165,
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.8",
            },
            {
                version: "0.6.6",
            },
        ],
    },
    etherscan: {
        apiKey: {
            mainnet: ETHERSCAN_API_KEY,
            fantom_testnet: FANTOMSCAN_API_KEY,
        },
        customChains: [
            {
                network: "fantom_testnet",
                chainId: 4002,
                urls: {
                    apiURL: "https://api-testnet.ftmscan.com/api",
                    browserURL: "https://testnet.ftmscan.com",
                },
            },
        ],
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        //currency: "USD",
        //coinmarketcap: COINMARKETCAP_API_KEY,
        //token: "FTM",
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
}
