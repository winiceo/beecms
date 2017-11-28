 var bcypher = require('./bcypher');
//
var bcapi = new bcypher('btc','test3','71ddfdc0b1a5405c90740d5d2ba277fa');

function printResponse(err, data) {
    if (err !== null) {
        console.log(err);
    } else {
        console.log(data);



    }
}
//
// //get chain info
// // bcapi.getChain(printResponse);
// // //get block height without any optional URL params
// // bcapi.getBlock(300000, printResponse);
// // //get block height with an optional "txstart" param, as outlined in docs here: http://dev.blockcypher.com/
// // bcapi.getBlock(300000, {txstart:2}, printResponse);
//
// // bcapi.getAddrBal('mjWp7rZJU5zGqwCDa2d3ACPhP4ReudmbgU',printResponse)
// //
// //
// //
//bcapi.getAddr('mjWp7rZJU5zGqwCDa2d3ACPhP4ReudmbgU',printResponse)
// //
// //
 bcapi.getAddrFull('miUv2ugPtVPCMTFmeMhhUkBB54UQPnarfr',printResponse)
//
//
// var webhook = {
//     event: "double-spend-tx",
//     address: "miUv2ugPtVPCMTFmeMhhUkBB54UQPnarfr",
//     url: "http://cms.71an.com/callback/double_spend_tx"
// };
// bcapi.createHook(webhook, printResponse);
//
// //Now let's list all of our webhooks
// bcapi.listHooks(printResponse);
//
//
// var ws = new WebSocket("wss://socket.blockcypher.com/v1/btc/test3");
// var count = 0;
// ws.onmessage = function (event) {
//     var tx = JSON.parse(event.data);
//     var shortHash = tx.hash.substring(0, 6) + "...";
//     var total = tx.total / 100000000;
//     var addrs = tx.addresses.join(", ");
//     $('#browser-websocket').before("<div>Unconfirmed transaction " + shortHash + " totalling " + total + "BTC involving addresses " + addrs + "</div>");
//     count++;
//     if (count > 10) ws.close();
// }
// ws.onopen = function(event) {
//     ws.send(JSON.stringify({event: "unconfirmed-tx"}));
// }