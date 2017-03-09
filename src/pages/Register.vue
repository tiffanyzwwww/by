<style>
	.login-box {
		margin: 0 auto;
		width: 12rem;
		margin-top: 3rem;
		margin-bottom: 1.5rem;
		font-size: .75rem;
		/*border: 1px solid red;*/
	}

	.login-box input {
		width: 9rem;
		height: 1.5rem;
		margin-top: 1rem;
		margin-left: .3rem;
	}

	.login-box-btn button {
		width: 100%;
		height: 1.8rem;
		margin-top: 1.5rem;
		background-color: #00aced;
		color: #fff;
	}
</style>

<template>
	<div>
		<indexHeader></indexHeader>
		<div class="login-box">
			<div>
				帐号:<input type="text" v-model="user">
			</div>
			<div>
				密码:<input type="password" v-model="pwd">
			</div>
			<div>
				重复:<input type="password" v-model="pwdd">
			</div>
			<div class="login-box-btn">
				<button @click="submit">确认注册</button>
			</div>
		</div>
		<footer-back-Btn></footer-back-Btn>
	</div>
</template>

<script>
	import indexHeader from '../components/indexHeader.vue';
	import footerBackBtn from '../components/footerBackBtn.vue';

	export default {
		name: 'Register',
		components: {
	        indexHeader,
	        footerBackBtn
	    },
	    data () {
			return {
				user: '',
				pwd: '',
				pwdd: ''
			}
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
					// return; // 测试时注释了就方便了
				}

				// 木有后台，做个假的注册
				layer.open({
					type: 2,
					content: '注册中',
					time: 3
				});

				setTimeout(function() {

				}, 3000);
			}
		}
	}
</script>