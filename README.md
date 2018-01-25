# SYNOPSIS
[![NPM Package](https://img.shields.io/npm/v/ethashjs.svg?style=flat-square)](https://www.npmjs.org/package/ethashjs)
[![Build Status](https://travis-ci.org/ethereumjs/ethashjs.svg?branch=master&style=flat-square)](https://travis-ci.org/ethereumjs/ethashjs)
[![Coverage Status](https://img.shields.io/coveralls/ethereumjs/ethashjs.svg?style=flat-square)](https://coveralls.io/r/ethereumjs/ethashjs)
[![Gitter](https://img.shields.io/gitter/room/ethereum/ethereumjs-lib.svg?style=flat-square)](https://gitter.im/ethereum/ethereumjs-lib) or #ethereumjs on freenode

Implements [Ethash](https://github.com/ethereum/wiki/wiki/Ethash)

# CONTACT
 [Scrollback](https://scrollback.io/ethereumjs/all/all-messages) or #ethereumjs on freenode

# INSTALL
`npm install ethashjs`

# USAGE

```javascript

var dunkpay = new dunkpay()
dunkpay.cryptoType = "BTC"
dunkpay.address = "1Lc1jhXdsB7t1XpTdNbrchnxKQide9tMia"
dunkpay.amount = 0.001 
//set Default setting.

dunkpay.onSuccess(function(transactionId, successData){
alert(successData)}
dunkpay.onFailure(function(failData){
alert(failData)}
//set Callback Event.

dunkpay.shot()
//show popup.

```

# BROWSER  
Yep, You can [browserify](http://browserify.org/) it.

# API
- [`new Ethash([cacheDB])`](#newethashcachedb)
- [`ethash.verifyPOW(block, cb)`](#ethashverifypowblock-cb)
- [`ethash.mkcache(cacheSize, seed)`](#ethashmkcachecachesize-seed)
- [`ethash.run(val, nonce, fullsize)`](#ethashrunval-nonce-fullsize)

### `new Ethash([cacheDB])`
Creates a new instance of `Ethash`.

**Parameters**
- `cacheDB` - an instance of a levelup db which is used to store the cache(s)

### `ethash.verifyPOW(block, cb)`
Verifies the POW on a block and its uncles

**Parameters**  
- `block` - the [block](https://github.com/ethereum/ethereumjs-block) to verify
- `cb` - the callback which is given a `Boolean` determining the validaty of the block 

### `ethash.mkcache(cacheSize, seed)`
Creates a cache. NOTE: this is automatically done for in  - [`ethash.verifyPOW(block, cb)`](#ethashverifypowblock-cb) so you do not need to use this function if you are just validating blocks

**Parameters** 
- `cachSize` - the size of the cach
- `seed` - the seed as a `Buffer`


### `ethash.run(val, nonce, fullsize)`
Runs ethash on a give val/nonce pair. NOTE: you need to run [`ethash.mkcache(cacheSize, seed)`](#ethashverifypowcachesize-seed) first before using this function.

**Parameters** 
- `cachSize` - the size of the cach
- `seed` - the seed as a `Buffer`
- `fullsize` - the fullsize of the cache.

**Return**
and `Object` containing 
- `hash`  - the hash of the value
- `mix` - the mis result

# TESTS
`npm test`

# LICENSE
[MPL-2.0](https://www.mozilla.org/MPL/2.0/)
