// preparing and signing a transaction to the testnet
// just change vars to your specific values

bitcore=require('bitcore-lib');

let privateKeyOfUtxo='eb4ea1e5e0ad7490398b83c77bfc188c211520f06d36699d22144edc60c7ad62';
let addressOfUtxo='n41N8woc7SQAyy64c27RB1yavUBvSzF7V2';
let destAddress='tb1qz06vrywdagx2gmxu9mwj04qpvmsrt6gzz6w38x';

utxo={
	txId: '80a927ca9b2f8bbd9cf8d50860845664aace05e0f8ca7afd5dedde31b4f4d44e',
	outputIndex: 0,
	address: addressOfUtxo,
	script: bitcore.Script.buildPublicKeyHashOut(addressOfUtxo).toString(),
	satoshis: 4664643
	}

fee=2000;

// this is a transaction spending all the input, no change is there

tx = new bitcore.Transaction()
	.from(utxo)
	.to(destAddress,4660000)
	.fee(fee)
	.enableRBF()
	.sign(privateKeyOfUtxo)

console.log(tx)
