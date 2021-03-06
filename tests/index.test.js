"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe('testing index file', () => {
    test('empty string should result in zero', () => {
        //  expect(add('')).toBe(0);
        const satoshi = new index_1.Wallet();
        const bob = new index_1.Wallet();
        const alice = new index_1.Wallet();
        satoshi.sendMoney(50, bob.publicKey);
        bob.sendMoney(23, alice.publicKey);
        alice.sendMoney(5, bob.publicKey);
        console.log(index_1.Chain.instance);
    });
});
