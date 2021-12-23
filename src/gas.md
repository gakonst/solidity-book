# Gas Optimization

* Why is this important
* Intuition around what assembly is generated in store/load ops
* Learning to optimize for low hanging fruit first
* Tradeoff readability for performance (assembly/inline code instead of function calls)
    * Don't do useless gas optimizations
    * Auditability is crucial for security
* Tradeoff UX for performance (e.g. off-chain indexers for on-chain minimalism)
* Immutables and constants
* Uniswap snapshot testing pattern / hardhat gas table
* Outlining opcodes https://www.evm.codes/, 
    * Explaining MLOAD/MSTORE/SLOAD/SSTORE, 
    * Caching variables to memory
* Common patterns to save gas 
    * (https://github.com/Rari-Capital/golf-course/tree/some-tips-to-start) plus more
* Deployment costs
* When to use proxy patterns (user deployments)
