async function main () {
    const MyNFT = await hre.ethers.getContractFactory("MyNFT");

    const URI = 'ipfs://QmVRrWSGUbFV1uFsDQxg6swZfzw9s728J8c9hUZw4FTTvY';

    const myContractDeployed = await MyNFT.deploy(URI);

    await myContractDeployed.deployed();

    console.log("deployed MyContract to: ", myContractDeployed.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });