window.tData = {
    isRegistr: false,
    isLogin: false,
    imageList: [{
        imgId: '0',
        title: '别浪猥琐发育',
        src: './images/show1.jpg'
    }, {
        imgId: '1',
        title: '稳住我们能赢',
        src: './images/show2.jpg'
    }, {
        imgId: '2',
        title: '好好补兵',
        src: './images/show1.jpg'
    }, {
        imgId: '3',
        title: '不要想着单杀',
        src: './images/show2.jpg'
    }, {
        imgId: '4',
        title: '上单不给就送',
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
