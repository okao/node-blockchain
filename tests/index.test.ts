import { exit } from 'process';
import {Wallet, Chain} from '../index';

describe('testing index file', () => {
  test('successful print of the chain', () => {
     //  expect(add('')).toBe(0);
      const satoshi = new Wallet();
      const bob = new Wallet();
      const alice = new Wallet();

      satoshi.sendMoney(50, bob.publicKey);
      bob.sendMoney(23, alice.publicKey);
      alice.sendMoney(5, bob.publicKe);

     console.log(Chain.instance)
     exit
  });
});
