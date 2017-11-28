module.exports = {
    schedule: {
        interval: '6s', // 1 分钟间隔
        type: 'all', // 指定所有的 worker 都需要执行
        disabled:true,
    },
    async task(ctx) {


        console.log(new Date());

       await ctx.service.balance.checkAddress();



        // ctx.app.cache = res.data;
    },
};