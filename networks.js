var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('eeaeeacc'),
  addressVersion: 100,
  privKeyVersion: 228,
  P2SHVersion: 40,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('d3a88f5bb224f954e60a83b82d72cae37cea492a0352327f73c099013d3e756b'),
    merkle_root: hex('bf452b7929b945b2524e2e729a949c4abc831cbbd95037e54d6ddd6853d6c804'),
    height: 791648,
    nonce: 1460627716,
    version: 2,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1646805992,
    bits: 0x1d033acd,
  },
  dnsSeeds: [
     '73.150.182.108',
    '155.138.198.71',
    '67.166.253.246',
    '82.27.145.78',
    '80.211.84.246',
    '62.171.128.133'
  ],
  defaultClientPort: 65000
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('82547825'),
  addressVersion: 111,
  privKeyVersion: '239',
  P2SHVersion: 196,
  hkeyPublicVersion: 0x0,
  hkeyPrivateVersion: 0x0,
  genesisBlock: {
    hash: hex('0000299b82787bca0132dbe67f8360d335ca114991993f67f48bdb462512e452'),
    merkle_root: hex('0a8875e41a01a01dd0f1c759d5da353ee92561c089d19ef939510d6eda44c096'),
    height: 0,
    nonce: 0,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1511862256,
    bits: 0x1f00ffff,
  },
  dnsSeeds: [],
  defaultClientPort: 21873
};
