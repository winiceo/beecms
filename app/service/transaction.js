'use strict';
const _ = require('lodash');
module.exports = app => {

    class TransactionService extends app.Service {
        constructor(ctx) {
            super(ctx);


        }

        async getItem(tx) {
            let isExist = await app.redis.hget('txs', tx.hash);

            if (!isExist) {
                await app.redis.hset('txs', tx.hash, tx);
                await this.store(tx)
            }
        }

        async store(tx){

            const {model} = this.ctx;
            let data={
                hash:tx.hash,
                address:tx.outputs[0].addresses[0],
                from_address:tx.inputs[0].addresses[0],
                fees:tx.fees,
                confirmations:tx.confirmations,
                amount:tx.outputs[0].value

            }

            const post = await model.Transactions.create(data);

            console.log(post)
            return post

        }


    }

    return TransactionService;
};
