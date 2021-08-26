# Principles

From a high level, you should be thinking of smart contract programming as programming
critical infrastructure software. What makes them very powerful is that even less than
a hundred lines of Solidity can contain code which secures millions of dollars. If
your contracts are not upgradeable, 


There's a few high-level rules one should follow when developing smart contracts:
* Avoid inheritance
* Straight forward control flow
* Ideally each file <300 LOC
* [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)
* Keep only whats necessary, convenience funcs can live elsewhere
* Fuzz, invariant test, symbolically execute and audit the shit out of everything

<!-- how do we describe this properly, without limiting the developer's imagination? ->
