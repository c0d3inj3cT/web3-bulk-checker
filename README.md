# web3-bulk-checker
Checks the ERC-20 or BEP-20 token balance of a list of addresses

Command line usage example:

checkbalances.js [options]

Options:
  --version       Show version number                                  [boolean]
  -n, --network   ETH or BSC network to use
  -a, --contract  ERC-20 or BEP-20 token contract address
  -f, --file      file containing addresses
  -h, --help      Show help                                            [boolean]

Examples:
  checkbalances.js -n ETH -a                fetch the ERC-20 token balance of
  0x83e6f1e41cdd28eaceb20cb649155049fac3d5  all address in the file
  aa -f addresses.txt

