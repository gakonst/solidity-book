pragma solidity ^0.8.0;

contract Foo {
    uint256 x;

    function bar() external {
        x += 1;
        x += 1;
        x += 1;
    }
}
