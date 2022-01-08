# Hardhat Plugins & Hacks

Hardhat provides a lot of features out of the box but with the addition of some 3rd party plugins and some additional code snippets we can add custom functionality to streamline our testing and migration processes.

## Top 3 Hardhat Plugins

### 1. Etherscan Auto-Verification

This plugin will automatically verify the contract in Etherscan so you can go in and execute contract functions using Metamask.

https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html

```console
npm install -s @nomiclabs/hardhat-etherscan
```

An Etherscan API key is required and is available from: https://etherscan.io/register

Add a require statement and the etherscan API key to hardhat.config.js

```js
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  ....
  etherscan: {
    apiKey: env.ETHERSCANAPIKEY
  }
};
```

From there we can add a custom function to the deploy script once we have the contract address. Note you'll need to pass through any constructor arguments if applicable.

```js
const myContract = await smartContract.deploy();
await myContract.deployed();

await hre.run("verify:verify", {
  address: myContract.address,
  //constructorArguments: [],
});
```
Alternatively you can run it from the command line

```console
npx hardhat verify --network mainnet contractAddressHere "Constructor Args"
```

### 2. Gas Reporter

Gas reporter provides a number of metrics including unit test costs, method calls and deployment costs in both ETH and fiat currency terms.

https://www.npmjs.com/package/hardhat-gas-reporter

```console
npm install -s hardhat-gas-reporter
```

You can optionally set a local currency and gas cost in the hardhat.config.js file

```js
require("hardhat-gas-reporter");

module.exports = {
  ....
  gasReporter: {
    currency: 'GBP',
    gasPrice: 50
  }
}
```

Then run a standard test from the command line

```console
npx hardhat test
```

### 3. Linter

There's a number of linters available for different text editors but having one at the compile stage can double check your work.

https://hardhat.org/plugins/nomiclabs-hardhat-solhint.html

```console
npm install -s @nomiclabs/hardhat-solhint
```

Then run the check command from the terminal.

```console
npx hardhat check
```

On a side note Juan Blanco's Solidity extension for VS Code is highly recommended for real-time linting using the same SolHint application:
https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity


## Hardhat Hacks

### Programmatic Compiling

Compile and deploy from a single script

```js
const contractName = 'myContract';
await hre.run("compile");
const smartContract = await hre.ethers.getContractFactory(contractName);
const myContract = await smartContract.deploy();
await myContract.deployed();
```

### Dumping Artifacts & ABI's

Adding the following code to your deploy script will create a artifiacts file which includes the contract ABI.

```js
const contractArtifacts = await artifacts.readArtifactSync(contractName);
fs.writeFileSync('./artifacts/contractArtifacts.json',  JSON.stringify(contractArtifacts, null, 2));
```

### Testing with Ethers & Web3

You can import Ethers.js or Web3.js to test scripts which can be useful when testing more complex functions and external contract compatibility.

```console
npm install -s @nomiclabs/hardhat-ethers
```
```console
npm install -s @nomiclabs/hardhat-web3
```

```js
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-ethers");

console.log(await web3.eth.getBlockNumber());
console.log(await ethers.provider.getBlockNumber());
```

### Create Your Own Plugins

You can create your own plugins for hardhat by either adding them to the hardhat.config.js or writing them up using a boilerplate.

The extendEnvironment function will extend the hre namespace.

`extendEnvironment((hre) => { hre.myPlugin = "Hello World"; });`

For more complex functionality consider using the plugin boilerplate: https://github.com/nomiclabs/hardhat-ts-plugin-boilerplate/

### Secure Hot Keys With DotEnv

The dotenv npm library can be used to store key value pairs such as private keys and api keys in a .env text file

https://www.npmjs.com/package/dotenv

```console
npm install -s dotenv
```

Then in the .env file add one key=value per line

```
ALCHEMYKEY=ABC123DEF456
PRIVATEKEY=0x000000000ABC
ETHERSCANKEY=ABC123DEF456
```

We can then import these environmental variables into our scripts.

```js
require('dotenv').config()
console.log(process.env.ALCHEMYKEY);
```

If using git or some other form of version control ensure .env isn't being commited and if it is add an exception to .gitignore

Also use separate keys for development and production!




