// Author: c0d3inj3cT (aka CryptoShine)

const fs = require("fs")
const Web3 = require("web3")
const readline = require("readline")
// configure the Infura API token here
var infura_api_token = ""

// set the command line arguments
const argv = require('yargs')
	.alias('n', 'network')
	.describe('n', 'ETH or BSC network to use')
	.alias('a', 'contract')
	.describe('a', 'ERC-20 or BEP-20 token contract address')
	.alias('f', 'file')
	.describe('f', 'file containing addresses')
	.usage('$0 [options]')
	.example('$0 -n ETH -a 0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa -f addresses.txt','fetch the ERC-20 token balance of all address in the file')
	.help('h')
	.alias('h', 'help')
	.argv;

var network = argv.network;
var token_contract = argv.contract;
var filename = argv.file;

// create the readInterface
const readInterface = readline.createInterface({
	input: fs.createReadStream(filename),
	output: process.stdout,
	terminal: false
});

// check the network name. Only ETH and BSC networks are supported
if(network == "ETH")
{
	var w3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/' + infura_api_token))
}
else if(network == "BSC")
{
	var w3 = new Web3('https://bsc-dataseed1.binance.org:443');
}
else
{
	console.log("network name not recognised")
	process.exit()
}

// define the custom ABI. To check the balance, we only need to call balanceOf() function of the smart contract
var custom_abi = [
	{
	"inputs":[{"name":"account","type":"address"}],
	"name":"balanceOf",
	"outputs":[{"name":"","type":"uint256"}],
	"stateMutability":"view",
	"type":"function"
	}
]

var myContract = new w3.eth.Contract(custom_abi, token_contract)

async function getBalance(account)
{
	var balance = await myContract.methods.balanceOf(account).call();
	balance = parseInt(balance, 10)/Math.pow(10, 18);
	return balance;
}

readInterface.on('line', function(line){
	getBalance(line).then(function(result){
		console.log(line);
		console.log(result);
	})});
