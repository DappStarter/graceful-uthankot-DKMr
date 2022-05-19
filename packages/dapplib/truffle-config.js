require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remind purse half arena onion task'; 
let testAccounts = [
"0x9cbc8ca61a9d014200e76727321c109487d963ddf7aa7546a0e7880aa4285f99",
"0xbc2d6c75c2c7fd837c103e24ebd494578f3b3cf25c4f7222e2e152f58bc1c672",
"0xb930c2a1d6b212cf60d0ef2a3c78f81eaa49d7a4e914bfa549d0bb26b2d50103",
"0x0b33594b6f8e7529bd6011389c8bdae07bbbc275f0d78a85fbebaee0831c0c68",
"0x8736cd1ac0f0e164d4c19147d604d684747839647564bfd3def6da45e9a00699",
"0x603c9628c0668980299d8cb906800f91b04677498dc795165e0efa1e9e9b77d0",
"0xb90d144e5ce0e52f7cada16316a4d5685082af840461a3e3e8eac8ad24671819",
"0x3e4e644b654bdbc427337168d4ffb76905178cfd133408f8bd698b93298dbd22",
"0xfc48627da948ca80eb096886314ed999c5b16938fa217aafab681ea76727e139",
"0x4e34a91df48e1f4c2a685c84f11afe30d2c634552e956bb1f461c4e6057a816c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


