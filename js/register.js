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
                pwdd = this.pwdd,
                msg = '';

            switch ('') {
                case user:
                    msg = '用户名不能为空';
                    break;
                case pwd:
                    msg = '密码不能为空';
                    break;
                case pwdd:
                    msg = '重复密码不能为空';
                    break;
            }

            if (msg == '' && user.length < 6) {
                msg = '帐号长度也太短了吧';
            }

            if (msg == '' && pwd.length < 6) {
                msg = '密码长度也太短了吧';
            }

            if (msg == '' && pwd != pwdd) {
                msg = '两次输入密码不一致';
            }

            // if (msg == '' && tData.isRegister) {
            //     msg = '请勿在短时间内重复注册';
            // }

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
                content: '注册中',
                time: 2
            });

            setTimeout(function() {
                // tData.isRegister = true;

                layer.open({
                    content: '注册成功, 为你跳转到登录页',
                    skin: 'msg',
                    time: 1
                });

                location.href = './Login.html';

                // that.$router.push('/Login');
            }, 2000);
        }
    }
});
