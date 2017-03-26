var VM = new Vue({
    el: "body",
    data: {
        show: {
            imgSrc: '',
            selectBody: ''
        },
        menus: [{
            text: '尺码',
            id: 'size'
        }, {
            text: '版型',
            id: 'type'
        }, {
            text: '颜色',
            id: 'color'
        }],
        types: [{
            text: '口袋短袖',
            imgSrc: './images/t-type/tshirt1.jpg'
        }, {
            text: '基本款短袖',
            imgSrc: './images/t-type/tshirt2.jpg'
        }, {
            text: '前短后长短袖',
            imgSrc: './images/t-type/tshirt3.jpg'
        }],
        colors:  [{
            text: '黑色',
            color: '#000000',
            imgSrc: './images/t-color/blackt.jpg'
        }, {
            text: '天蓝色',
            color: '#C4DDFC',
            imgSrc: './images/t-color/bluet.jpg'
        }, {
            text: '灰色',
            color: '#CBCBCB',
            imgSrc: './images/t-color/grayt.jpg'
        }, {
            text: '绿色',
            color: '#D1FDDC',
            imgSrc: './images/t-color/greent.jpg'
        }, {
            text: '骚粉色',
            color: '#FFD9C6',
            imgSrc: './images/t-color/orenget.jpg'
        }, {
            text: '粉红色',
            color: '#FDBACC',
            imgSrc: './images/t-color/pinkt.jpg'
        }, {
            text: '黄色',
            color: '#FBFEC5',
            imgSrc: './images/t-color/yellow.jpg'
        }]
    },
    computed: {

    },
    ready: function() {
        this.show.imgSrc = this.types[0].imgSrc;
        this.show.selectBody = 'color';
    },
    methods: {
        showThis: function(item) {
            this.show.imgSrc = item.imgSrc;
        },
        selectMenu: function(item) {
            this.show.selectBody = item.id;
        }
    }
});
