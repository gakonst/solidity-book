# Introduction

Welcome to the Rust Ethereum book, where we'll go through examples of how to
interact with Ethereum using [ethers-rs](https://github.com/gakonst/ethers-rs/).

We assume familiarity with Ethereum's mechanics such as:
* Deploying a contract & interacting with it
* Sending funds across accounts
* Signing messages and recovering their sender

## Installing Ethers-rs

First create a new Rust project:

```console
$ cargo new ethers-hello-world && cd ethers-hello-world
```

Edit your `Cargo.toml` and insert the following dependency:

```toml
[dependencies]

ethers = { git = "https://github.com/gakonst/ethers-rs" }
```
