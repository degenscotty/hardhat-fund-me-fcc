const { ethers } = require("hardhat")
const { getNamedAccounts } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log("Withdrawing funds...")
    const txResponse = await fundMe.withdraw()
    await txResponse.wait(1)
    console.log("Withdrew all the funds!")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
