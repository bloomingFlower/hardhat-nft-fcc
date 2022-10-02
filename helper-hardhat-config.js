const networkConfig = {
    31337: {
        name: "hardhat",
        gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
        callbackGasLimit: "500000",
        interval: "10",
        mintFee: "1000000000000000000", //0.01
    },
    // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
    5: {
        name: "goerli",
        vrfCoordinatorV2: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
        gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
        subscriptionId: "762",
        callbackGasLimit: "500000",
        interval: "30",
        mintFee: "1000000000000000000", //0.01
    },
}
const INITIAL_SUPPLY = "0" //"1000000000000000000000000"

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
    INITIAL_SUPPLY,
}
