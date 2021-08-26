# Introduction

Welcome to the Senior Engineer's Solidity book.

Ethereum development practices have rapidly shifted over the years. The published
educational content tends to lag behind the current industry best practices. Historically,
the best developers have not been able to allocate time on writing about _how_ they became
so good.

With this book, we hope to provide an up to date list of techniques that must be
part of your development toolkit.

Due to the rapid evolution of the space, we expect this to be a living document.
If you enjoy this resource and would like to contribute back to it, take a look
at the [Github Issues](https://github.com/gakonst/solidity-book/issues).

If you already think you can navigate your way around Solidity, you can jump on to
the next chapter. If not, read below.

## I do not know anything. Where do I start?

Instead of re-hashing content which has been written about before, we instead provide a curated list of topics that we'll assume familiarty
with from the reader.

1. Basic Solidity (to write smart contracts):
    1. [CryptoZombies](https://cryptozombies.io/en/course/):
    A gentle introduction to Solidity via an interactive code school.
    1. [Solidity Documentation](https://docs.soliditylang.org/en/latest): 
    The documentation is always up to date with the latest Solidty changes and syntax. It provides a great end-to-end description of the language. You MUST have read this resource in its entirety.
    1. [Solidity by Example](https://solidity-by-example.org/):
    A tour through Solidity's syntax via a set of illustrative examples.
    1. [Learn Solidity in Y minutes](https://learnxinyminutes.com/docs/solidity/)
    One-page example on Solidity's syntax.
    1. [Solidity Cheatsheet](https://github.com/manojpramesh/solidity-cheatsheet)
    A cheatsheet.

1. Hardhat & Typescript (to develop and test locally):
    1. [Hardhat Documentation](https://hardhat.org/getting-started/): Hardhat is a smart contract development framework providing utilities
    for compiling, testing and deploying smart contracts written in Solidity with Javascript (JS) and Typescript (TS).
    1. [Ethers.js Documentation](https://docs.ethers.io/v5/): Ethers.js is the most widely used and flexible development library
    for interacting with Ethereum from JS and TS
    1. [Typescript cheatsheet](https://devhints.io/typescript): We will be using TS instead 
    of JS in order to leverage types to make our code more robust.
    1. [Solidity Template](https://github.com/paulrberg/solidity-template/): An opinionated Hardhat + TS
    repository set up including boilerplate and other popular tools 

1. Smart contract patterns (to learn about the fundamental smart contract building blocks):
    1. [Solidity Patterns](https://fravoll.github.io/solidity-patterns/) ([code](https://github.com/fravoll/solidity-patterns)): 
    A curated list of patterns which you will encounter in the wild.
    1. [OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/) ([code](https://github.com/openzeppelin/openzeppelin-contracts)):
    A library of secure smart contracts ranging from access control, tokens, governance, proxies and more.

1. Smart contract security (to learn about the mistakes others before you made): We *emphasize* the need to
be familiar with the concepts in the links below. Security must be the number one priority in any smart contract developer's mindset.
    1. [Smart Contract Security Best Practices](https://consensys.github.io/smart-contract-best-practices/)
    A timeless must-read resource on "how to write secure smart contracts".
    1. Reports by security auditors:
        1. [samczsun](https://samczsun.com)
        1. [Trail of Bits](https://github.com/trailofbits/publications/tree/master/reviews)
        1. [OpenZeppelin](https://blog.openzeppelin.com/security-audits/)
        1. [Consensys Diligence](https://consensys.net/diligence/audits/)
