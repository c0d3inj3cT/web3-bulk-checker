# web3-bulk-checker
Checks the ERC-20 or BEP-20 token balance of a list of addresses

This script is written in nodejs and it leverages web3 to invoke the balanceOf() function specified in the custom ABI as per ERC-20 / BEP-20 standard.

Given a list of valid ETH addresses, the script will iterate over the list and print the balance of every address.

