const { Contract } = require("web3-eth-contract");

solc = require("solc");

fs = require("fs");

Web3 = require("web3");

let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

let fileContent = fs.readFileSync("demo.sol").toString();

ABI = output.contracts["demo.sol"]["demo"].abi;

console.log(fileContent);

contract = new web3.eth.Contract(ABI);

web3.eth.getAccounts().then(accoounts) => {
    console.log("getAccounts:", accoounts);
}
