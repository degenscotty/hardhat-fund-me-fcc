const { getNamedAccounts, ethers, network } = require("hardhat")
const { developmentChains } = require("../../../helper-hardhat-config.js")
const { assert } = require("chai")

developmentChains.includes(network.name)
    ? describe.skip
    : describe("FundMe", async function () {
          let fundMe
          let deployer
          const sendValue = ethers.parseEther("1")
          beforeEach(async function () {
              deployer = (await getNamedAccounts()).deployer
              fundMe = await ethers.getContract("FundMe", deployer)
              console.log(await fundMe.getAddress())
          })

          it("allows people to fund and withdraw", async function () {
              const fundTxResponse = await fundMe.fund({
                  value: sendValue,
              })
              await fundTxResponse.wait(1)
              const withdrawTxResponse = await fundMe.withdraw()
              await withdrawTxResponse.wait(1)

              const endingBalance = await ethers.provider.getBalance(fundMe)
              assert.equal(endingBalance.toString(), "0")
          })
      })
