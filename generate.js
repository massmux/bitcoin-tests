// we generate an address+private key on the testnet
// for further testing

bitcore=require('bitcore-lib');
privateKey=new bitcore.PrivateKey('testnet');
address=privateKey.toAddress().toString();

console.log(privateKey,address);
