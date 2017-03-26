var VM = new Vue({
    el: "body",
    data: {
        user: '',
        pwd: '',
        pwdd: ''
    },
    computed: {

    },
    ready: function() {

    },
    methods: {
        check: function() {
            var user = this.user,
                pwd = this.pwd,
                msg = '';

            switch ('') {
                case user:
                    msg = '用户名不能为空';
                    break;
                case pwd:
                    msg = '密码不能为空';
                    break;
            }

            if (msg == '' && user.length < 6) {
                msg = '帐号有误';
            }

            if (msg == '' && pwd.length < 6) {
                msg = '密码有误';
            }

            if (msg) {
                layer.open({
                    content: msg,
                    skin: 'msg',
                    time: 2
                });
                return false;
            }

            return true;
        },
        submit: function() {
            if (!this.check()) {
                return; // 测试时注释了就方便了
            }

            var that = this;

            // 木有后台，做个假的注册
            layer.open({
                type: 2,
                content: '登录中',
                time: 2
            });

            setTimeout(function() {
                // tData.isLogin = true;

                layer.open({
                    content: '登录成功，为你返回首页',
                    skin: 'msg',
                    time: 1
                });

                location.href = 'home.html';
                // that.$router.push('/Home');
            }, 2000);
        }
    }
});
