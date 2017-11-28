'use strict';
const _ = require('lodash');
module.exports = app => {

    class BalanceService extends app.Service {
        constructor(ctx) {
            super(ctx);


        }

        async checkAddress(){
            const {ctx,service}=this;
            const result = await ctx.curl('https://api.blockcypher.com/v1/btc/test3/addrs/miUv2ugPtVPCMTFmeMhhUkBB54UQPnarfr/full?token=71ddfdc0b1a5405c90740d5d2ba277fa', {
                // 自动解析 JSON response
                dataType: 'json',
                // 3 秒超时
                timeout: 6000,
            });

            const txs=result.data.txs;

             Promise.all(txs.map(hash => ctx.service.transaction.getItem(hash)));


        }


        async checkAddress1() {
            'use strict';
//             var bcypher = require('../libs/bcypher');
// //
//             var bcapi = new bcypher('btc','test3','71ddfdc0b1a5405c90740d5d2ba277fa');


            // bcapi.getAddrFull('miUv2ugPtVPCMTFmeMhhUkBB54UQPnarfr',  function(err,data){
            //     if (err !== null) {
            //
            //     } else {
            //
            //         const newsList =   Promise.all(idList.map(id => ctx.service.hackerNews.getItem(id)));
            //
            //         data.txs.forEach(function(index,tx){
            //             let isExist = await app.redis.hget('txs', tx.hash);
            //             if(!isExist){
            //                 //yield app.redis.hset('txs', tx.hash, tx);
            //             }
            //             console.log(index)
            //             console.log(tx)
            //         })
            //
            //     }
            // })

           // yield app.redis.hset('activitys', pageid, page);


            // const result = await app.curl('https://api.blockcypher.com/v1/btc/test3/addrs/moCnyf7cdpbTd8k8w7EMaKbbQnKwsmCkKG/full?token=71ddfdc0b1a5405c90740d5d2ba277fa', {
          //     dataType: 'json',
          // });
          //
          // console.log(result.data)
          // app.logger.info('Egg latest version: %s', JSON.stringify(result.data));








        }


    }

    return BalanceService;
};
