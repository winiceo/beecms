var wallet={
    "private": "095f76719046bc950344d993da3a63410aaa9bd844c7beba252a2378f67d8a7f",
    "public": "042d098859294a9418932ba280d26053c2dd688f592ee09d0ccb91d2c38bcea8bc7e5458d425eda9755627cfaa401624fd5f338c719070d31e5feb6aecff8a9407",
    "address": "ea2673cf1a771d3d97291c7424478101d99fbc86"
};


//送币 curl -sd '{"address": "ea2673cf1a771d3d97291c7424478101d99fbc86", "amount": 200000000000000000}' 'https://api.blockcypher.com/v1/beth/test/faucet?token=71ddfdc0b1a5405c90740d5d2ba277fa'

//curl -sd '{"address": "ea2673cf1a771d3d97291c7424478101d99fbc86", "amount": 1000000000000000000}' 'https://api.blockcypher.com/v1/beth/test/faucet?token=71ddfdc0b1a5405c90740d5d2ba277fa'

//const URL_ROOT = 'https://api.blockcypher.com/v1/';

//https://api.blockcypher.com/v1/eth/test/addrs/ea2673cf1a771d3d97291c7424478101d99fbc86

 //https://api.blockcypher.com/v1/eth/main/addrs/738d145faabb1e00cf5a017588a9c0f998318012

//https://api.blockcypher.com/v1/eth/main/addrs?token=YOURTOKEN

    var bcypher = require('./bcypher');

var bcapi = new bcypher('beth','test','71ddfdc0b1a5405c90740d5d2ba277fa');

function printResponse(err, data) {
    if (err !== null) {
        console.log(err);
    } else {
        console.log(data);
    }
}

//get chain info
// bcapi.getChain(printResponse);
// //get block height without any optional URL params
// bcapi.getBlock(300000, printResponse);
// //get block height with an optional "txstart" param, as outlined in docs here: http://dev.blockcypher.com/
// bcapi.getBlock(300000, {txstart:2}, printResponse);

// bcapi.getAddrBal('mjWp7rZJU5zGqwCDa2d3ACPhP4ReudmbgU',printResponse)
//
//
//
  bcapi.getAddr(wallet.address,printResponse)
//
//
// bcapi.getAddrFull('mjWp7rZJU5zGqwCDa2d3ACPhP4ReudmbgU',printResponse)


//bcapi.genAddr({},printResponse)