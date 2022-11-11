require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remain consider hunt hero fresh gas'; 
let testAccounts = [
"0x813734675f81369936949a45652a22378abd653a784ff31801c4104cbdaee6ae",
"0x1c5d4786a65afaea2ed530ea9792530afc1566b6f4d60a1b1d52b4ca47bef093",
"0xaf94a718e520abc535ef54a94375bc2dd6d6cc38ef43002140c1049e13aa13aa",
"0xbcc21e1cbeae2c68f1ca0513a0aff923e749f6918c83573fdcbd4d0fa3b72830",
"0x634bfb6b3cf80214e465c8d8405f6c839c2f83ddd84848ebd8104e3046443f52",
"0xa4c9970c2cd3d5ce06a1f422a323cb396b3a0be0ab8d3e461bb4c4e48f0f4897",
"0xd4bd9d3a6a8bb425eecea3ce3634cdc94b9502b05c9039577d7198ce9dff60f3",
"0x8773ebf71179a0c07110d33f15d07cb1fd5cd27c1bcc3b4aaa2177f950d57a00",
"0x1591f8313f6e7ca8f982468dc5aa6f4061fbe015f55ab33475dd5b763a282b11",
"0x674f33e117b5c558b2daaff739c016511155d9ddb2d0dc3eb5eacdedcc92044f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

