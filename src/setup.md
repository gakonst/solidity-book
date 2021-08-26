# Setting up your development environment

## Libraries / CLIs

Throughout the guide, we'll be using Solidity and Hardhat. Thankfully, 
we only require having NodeJS installed globally. Everything else will be happening 
within a Node package, and as a result the dependencies will be isolated there. 

We recommend using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to install and manage node versions as you may encounter tooling that requires having versions 
other than the one you have installed.

## Additional Tooling

<!-- what other tools are useful? maybe seth? -->

* [Slither](https://github.com/crytic/slither#how-to-install) ([video guide](https://youtu.be/bakRWW05Uoc)): A static analyzer which
will find low-hanging fruit issues in your code.
* [Echidna](https://github.com/crytic/echidna) ([tutorial](https://medium.com/coinmonks/smart-contract-fuzzing-d9b88e0b0a05)): An Ethereum smart contract fuzzer, used for uncovering edge
cases

## Plugins for editors

Syntax highlighting is provided in the following plugins per editor:
* [Vim](https://github.com/TovarishFin/vim-solidity)
* [VS Code](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)
* [Sublime](https://packagecontrol.io/packages/Ethereum)

In addition, there's a few useful VS Code plugins:
* [Solidity Visual Developer](https://marketplace.visualstudio.com/items?itemName=tintinweb.solidity-visual-auditor)
* [Solidity Metrics](https://marketplace.visualstudio.com/items?itemName=tintinweb.solidity-metrics)

Solidity unfortunately does not have a Language Server ([yet](https://github.com/ethereum/solidity/pull/11350)) to do automatic code completion.
