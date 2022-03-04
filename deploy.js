async function main () {
    const MyNFT = await hre.ethers.getContractFactory("MyNFT");

    const URI = 'https://bafybeihul6zsmbzyrgmjth3ynkmchepyvyhcwecn2yxc57ppqgpvr35zsq.ipfs.dweb.link/0.json';

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