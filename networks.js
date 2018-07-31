var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('e5777746'),
  addressVersion: 63,
  privKeyVersion: 191,
  P2SHVersion: 85,
  hkeyPublicVersion: 0x0,
  hkeyPrivateVersion: 0x0,
  genesisBlock: {
    hash: hex('00000e8764361b521a70a2d3626821eb0880fa34f7f06a7d0f5e813245e7b686'),
    merkle_root: hex('314633ec233def31d92a686b3529a740f6a140703ee2390eafba27347d869640'),
    height: 0,
    nonce: 6798524,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1524023167,
    bits: 0x1e0fffff,
  },
  dnsSeeds: [
    'dnsseed.sandego.net'
  ],
  defaultClientPort: 21011
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
