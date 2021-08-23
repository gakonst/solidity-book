# Installing the Toolchain

The toolchain we'll be using throughout this guide is going to be:
1. Solidity
1. Node.js
1. Typescript & Hardhat

## Install Solidity

The official [documentation](https://docs.soliditylang.org/en/v0.8.7/installing-solidity.html) has
plenty of ways to install `solc`, the Solidity compiler, depending on your platform

## Install NodeJS

We recommend installing the [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating) and
installing Node via it. That way, you will not have issues over time as node versions change.

## Install Yarn

Yarn is faster than npm in just about everything: `npm i -g yarn`

## Typescript & Hardhat for Testing

You do not need any global installation of Typescript or Hardhat. These will be installed
in each repository via `yarn add --dev hardhat typescript ts-node @types/node`.

We'll test using the following: `yarn add --dev chai ethers ethereum-waffle @types/chai @types/mocha`

We'll also be using [`hardhat-ethers`](https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html) and [`hardhat-waffle`](https://hardhat.org/plugins/nomiclabs-hardhat-waffle.html)
for our unit tests and deployment scripts: `yarn add --dev @nomiclabs/hardhat-ethers @nomiclabs/hardhat-waffle`
