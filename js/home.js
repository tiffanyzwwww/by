var VM = new Vue({
    el: "body",
    data: {
        tData: window.tData
    },
    computed: {

    },
    ready: function() {

    },
    methods: {
        like: function(item) {
            let msg = '已点赞';

            if (item.isLike) {
                layer.open({
                    content: '你确定取消点赞'+ item.author +'的作品吗？',
                    btn: ['是的', '我手滑了'],
                    yes: function(index) {
                        layer.close(index);
                        item.isLike = false;
                    }
                });

                return;
            }

            item.isLike = true;

            layer.open({
                content: msg,
                skin: 'msg',
                time: 2
            });
        }
    }
});
