# Gas Optimization

## What is gas?

As you may already know, gas is the computational unit of cost in Ethereum. Every
operation costs gas, for if it didn't, anyone would be able to DoS any node in the
system by making it run an infinite loop. With gas, you pay for what you execute.

## Why does this matter to you as a developer?

But it's not you that pays for what you execute, it's your users! Anytime a user
makes a transaction, they'll bear the costs of your code. So it is an important
task for you to make sure your code is well optimized, so that it runs faster
and cheaper.

In this chapter, we'll go through common and uncommon ways of optimizing gas
consumption in your contracts.
