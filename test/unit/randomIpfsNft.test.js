const { assert } = require("chai")
const { network, deployments, ethers } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Random IPFS NFT Unit Tests", function () {
          let randomIpfsNft, deployer, vrfCoordinatorV2Mock

          beforeEach(async () => {
              accounts = await ethers.getSigners()
              deployer = accounts[0]
              await deployments.fixture(["mocks", "randomipfs"])
              randomIpfsNft = await ethers.getContract("RandomIpfsNft")
              vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
          })

          describe("Constructor", () => {
              it("sets starting values Correctly.", async () => {
                  const dogTokenUriZero = await randomIpfsNft.getDogTokenUris(0)
                  const isInitialized = await randomIpfsNft.getInitialized()

                  assert(dogTokenUriZero.includes("ipfs://"))
                  assert.equal(isInitialized, true)
              })
          })

          //   describe("Mint NFT", () => {
          //       it("Allows users to mint an NFT, and updates appropiately", async function () {
          //           const txResponse = await basicNFT.mintNFT()
          //           await txResponse.wait(1)
          //           const tokenURI = await basicNFT.tokenURI(0)
          //           const tokenCounter = await basicNFT.getTokenCounter()

          //           assert.equal(tokenCounter.toString(), "1")
          //           assert.equal(tokenURI, await basicNFT.tokenURI(0))
          //       })
          //   })
      })
