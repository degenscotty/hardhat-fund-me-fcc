const networkConfig = {
    11155111: {
        name: "sepolia",
        ethUsdPriceFeed: "0x694aa1769357215de4fac081bf1f309adc325306",
    },
    4002: {
        name: "fantom_testnet",
        ethUsdPriceFeed: "0xB8C458C957a6e6ca7Cc53eD95bEA548c52AFaA24",
    },
}

const developmentChains = ["hardhat", "localhost"]
const DECIMALS = 8
const INITIAL_ANSWER = 200000000000

module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
}
