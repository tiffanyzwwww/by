window.tData = {
    isRegistr: false,
    isLogin: false,
    imageList: [{
        imgId: '0',
        author: 'Leo',
        isLike: false,
        authorAvatar: './images/user/userimg1.jpg',
        title: '别浪猥琐发育',
        src: './images/show1.jpg'
    }, {
        imgId: '1',
        author: 'Tiffany',
        isLike: false,
        authorAvatar: './images/user/userimg.jpg',
        title: '稳住我们能赢',
        src: './images/show2.jpg'
    }, {
        imgId: '2',
        author: '陈老师',
        isLike: false,
        authorAvatar: './images/user/edc.jpg',
        title: '上单不给就送',
        src: './images/show1.jpg'
    }, {
        imgId: '3',
        author: '马云',
        isLike: false,
        authorAvatar: './images/user/mayun.jpg',
        title: '不要想着单杀',
        src: './images/show2.jpg'
    }, {
        imgId: '4',
        author: 'Pony',
        isLike: false,
        authorAvatar: './images/user/mahuateng.jpg',
        title: '好好补兵',
        src: './images/show1.jpg'
    }]
}

Vue.component('by-header', {
    data: function() {
        return {

        }
    },
    ready: function() {

    },
    template: ('<div class="header"><img src="./images/menus.png" alt=""> BY !</div>')
});
