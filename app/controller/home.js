'use strict';

module.exports = app => {
    class HomeController extends app.Controller {
        async index() {
            const {ctx, service} = this;

            var bcypher = require('../libs/bcypher');

            var bcapi = new bcypher('btc', 'test3');
            //var bcapi = new bcypher('btc', 'test3', '71ddfdc0b1a5405c90740d5d2ba277fa');
            const options = {}

            const result = await ctx.curl('https://api.blockcypher.com/v1/btc/test3/addrs/miUv2ugPtVPCMTFmeMhhUkBB54UQPnarfr/full?token=71ddfdc0b1a5405c90740d5d2ba277fa', {
                // 自动解析 JSON response
                dataType: 'json',
                // 3 秒超时
                timeout: 6000,
            });

            const txs=result.data.txs;

           const newsList =   Promise.all(txs.map(hash => ctx.service.transaction.getItem(hash)));


            //console.log(result)
            // await  bcapi.getAddrFull('mjWp7rZJU5zGqwCDa2d3ACPhP4ReudmbgU', function (err, data) {
            //
            //     if (err !== null) {
            //
            //         options.data = err;
            //
            //     } else {
            //
            //         options.data = data;
            //
            //     }
            // })
            //
            // console.log(options)

            this.ctx.body = options;
        }

        async act() {
            const {ctx, service} = this;
            const act = ctx.params.act;

            const data={}
            data.title=act;
            data.body=act;
            await service.transaction.create(data)
            console.log(act)



            ctx.body = act;

        }
    }

    return HomeController;

}