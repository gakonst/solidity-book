# Optimizing Gas Usage

By - ControlCplusControlV

Optimizing Gas Usage in Solidity is a deep rabbit hole, from using msg.value as a cheaper zero to actually abi packing with structs, it can be exhaustive. So it's important to save your time optimizing, and optimizing the architecture of your dapp before you spend time on micro-optimizations.

Also, optimizations often require a near exhaustive knowledge of the EVM and Solidity Compiler, so learning how the compiler works so you can help it is important. I recommend listening to this talk for an in-depth look at the solc compiler which can be found [here](https://www.youtube.com/watch?v=RxL_1AfV7N4).

Also, before we dive into optimizations, keep in mind that lower-level code doesn't always mean faster code, as the compiler is smart and sometimes will pick up on things you may not initially think to do.

## Solidity

### Optimizing Your Function Declaration

The first place to look when optimizing is your parameters. If you don't directly modify the value of a parameter make you specify to keep it in calldata with the `calldata` keyword. Calldata is a part of the transaction, so the storage is already paid for in the function call, so if you don't need to change it there is no reason to copy that value to memory.

The next important part to look at with parameters is using structs. If you are using lots of non 32 byte values as parameters consider moving your parameters into a single input struct, which contains all your needed parameters. This improves gas thanks to a technique called "Struct Packing."

The EVM holds data in 32 byte "slots", and it is exponentially more expensive to use slots, so use them sparingly. This is where struct packing comes in, if you have 3 values you need to store, two uint112 and one uint256 these can fit into 2 slots if put in the correct order, but 3 if you are careless. 

```javascript=
struct myData {
    data1 uint112
    data2 uint256
    data3 uint112
}
```
The above configuration uses 3 slots because data in structs is stored sequentially, the uint256 won't fit in the same slot as as the uint112, so it makes a new slot and moves on. However, if you organize the data like the following

```javascript=
struct myData {
    data1 uint112
    data3 uint112
    data2 uint256
}
```

both uint112's will be put in the same storage slot. So when making a struct organize your data, organize the parameters in 32 byte sequential chunks.

This is also where it saves gas on parameters, if you have 2 uint112 values as parameters, they will each occupy a 32 byte chunk in calldata, but if you have 1 struct containing both as a parameter, it will only take up 1 32 byte chunk.

To also save gas on function declarations, declare a function as `payable` (provided this doesn't open any glaring security issues) as the Solidity compiler will remove its checks to ensure msg.value is equal to 0.

So a simple function like `function borrow(uint256 amount) public {}` becomes `function borrow(uint256 amount) payable public {}`


To also save gas in your function declarations make use of the fallback function where possible, this is thanks to how Solidity executes functions. Each function has a 4 byte signature which is then loaded from calldata and matched the correct code block on runtime. However, the fallback function doesn't have a 4 byte signature (hence it's a "fallback" if no sig is provided) so if it makes sense to use it, it can be a good micro-optimization (especially for something like an Ether Yield Vault, where the fallback could be used as a deposit function).

Another example of this is if you have a function like

```javascript=
function updateLendingRates() {
    // code ...
}
```

to

```javascript=
fallback() {
    // code ...
}
```


To also save gas on any function declarations you have, using modifiers can sometimes be wasteful. Modifiers are injected into the beginning of each function they are specified for. This increases the codesize of your contract, which costs gas to deploy, so to cut down on costs if a modifier is used a lot. So instead sometimes a modifier should just be a function call that performs the check, so only the function call is inserted at the beginning, saving gas.

This means changing 

```javascript=
modifier reallyLongModifier() {
    // code ..
}

function foo() public reallyLongModifier {
    
}
```

to

```javascript=
function reallyLongModifierFunc() {
    // code ..
}

modifier reallyLongModifier() {
    reallyLongModifierFunc()
}

function foo() public reallyLongModifier {
    
}
```

All of these gas optimizations are made within the function declaration, not even the actual body of your code! This is why gas optimizations are often considered a rabbit hole. 

### Optimizing the Function Body

Another place to save gas is to make sure to utilize the `immutable` keyword in Solidity, since immutable values remain constant, the Solidity compiler can insert them in place of the variable reference at compile time. Saving a memory or storage load in the process. Just prefix it to your variables like `address UNIROUTER immutable = 0x0`

To save gas within your actual function execution, you will often have to inline Yul yourself, which conversely is done via the use of the `assembly{}` block, but if you call it assembly Transmissions11 will be very disappointed in you.

Some other optimizations when working with math in no particular order

- Avoid dividing and multiplying by multiples of 2, instead use bitshifting as `5 * 2` is the same as `5 << 1`, but uses less gas
- Avoid using >= and <=, instead use !< and !> as it is algebraiclly equivalent when working with uints but uses less gas. So `x >= y` becomes `x !< y`
- Where possible use != instead of checking if a value is greater than or less than. So in a scenario where x is either 10, or some large number, make sure to use `x != 10` rather than `x > 10`
- In counter functions or other scenarios where your numbers aren't prone to overflowing (ie counting NFT number out of a collection of 10,000), wrap your math in an `unsafe {}` block
- Integers are significantly more expensive than their unsigned counterparts because instead of leading 0s in their byte representation, the leading byte they hold is f, and in the EVM non zero bytes end up being more expensive. 

