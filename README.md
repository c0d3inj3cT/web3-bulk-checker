# web3-bulk-checker
Checks the ERC-20 or BEP-20 token balance of a list of addresses

Usage:

$ nodejs checkbalances.js --help
checkbalances.js [options]

Options:
  --version       Show version number                                  [boolean]
  -n, --network   ETH or BSC network to use
  -a, --contract  ERC-20 or BEP-20 token contract address
  -f, --file      file containing addresses
  -h, --help      Show help                                            [boolean]

Examples:
#fetch the Polkastarter token balance of all addresses in the file addresses.txt
checkbalances.js -n ETH -a 0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa -f addresses.txt
