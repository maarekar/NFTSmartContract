const { expect } = require('chai');

describe("My first Contract", function () {

    it("should return correct name and symbol", async function () {
        const MyNFT = await hre.ethers.getContractFactory("MyNFT");

        const URI = 'https://bafybeihul6zsmbzyrgmjth3ynkmchepyvyhcwecn2yxc57ppqgpvr35zsq.ipfs.dweb.link/0.json';

        const myContractDeployed = await MyNFT.deploy(URI);
        await myContractDeployed.deployed();

        expect(await myContractDeployed.tokenURI()).to.equal(URI);
    });


});