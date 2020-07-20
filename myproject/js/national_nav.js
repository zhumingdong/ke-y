// var bigBox = document.querySelector('.national_box');
// var navBtn = bigBox.querySelector('.national_box_nat');
// var showBox = bigBox.querySelector('.national_box_goods');
// var navLi = navBtn.querySelectorAll('li');

// var riBen = [
//     {url:'./images/goods1_1.jpg',title:'资生堂 洗颜专科浓密泡沫洁面乳洗面奶 120g',price1:29.00,price2:100.00},
//     {url:'./images/goods1_2.jpg',title:'曼丹Mandom Barrier Repair婴儿肌面膜 5枚入 橙色胶原蛋白配合修复型(无香味_橙色)',price1:49.00,price2:65.00},
//     {url:'./images/goods1_3.jpg',title:'日本沛丽康 Pelican 美背香皂 135g',price1:35.00,price2:55.00},
//     {url:'./images/goods1_4.jpg',title:'花王 Merit弱酸性植物精华无硅油洗发水 柑橘配合清新棉花香 425ml',price1:68.00,price2:98.00},
//     {url:'./images/goods1_5.jpg',title:'日本花王乐而雅Ag银离子消臭护垫62片 无荧光剂 清新香草香型',price1:25.00,price2:48.00}
// ];

// var hanGuo = [
//     {url:'./images/goods2_1.jpg',title:'Deep-formula Restructuring深层滋润亮肤霜 130ml/瓶',price1:250.00,price2:350.00},
//     {url:'./images/goods2_2.jpg',title:'AHC深层补水金箔面膜 25g*5片/盒',price1:135.00,price2:199.00},
//     {url:'./images/goods2_3.jpg',title:'【优庭乐】韩国 Nature Republic自然乐园 红参 蜂王浆 黄金 丝柔 面霜 60g',price1:158.00,price2:488.00},
//     {url:'./images/goods2_4.jpg',title:'Innisfree悦诗风吟 绿茶籽精萃水分菁露特别件套装',price1:119.00,price2:230.00},
//     {url:'./images/goods2_5.jpg',title:'Sulwhasoo/雪花秀 滋盈肌本平衡水乳套装滋盈精选礼盒装',price1:635.00,price2:1080.00}
// ];

// var beiMei = [
//     
// ];

// var ouZhou = [
//     
// ];

// var aoZhou = [
//     
// ];



const app = new Vue({
    el: '.national',
    data: {
        uldata1: [
            {
                url: './images/goods1_1.jpg',
                title: '资生堂 洗颜专科浓密泡沫洁面乳洗面奶 120g',
                price1: 29.00,
                price2: 100.00
            },
            {
                url: './images/goods1_2.jpg',
                title: '曼丹Mandom Barrier Repair婴儿肌面膜 5枚入 橙色胶原蛋白配合修复型(无香味_橙色)',
                price1: 49.00,
                price2: 65.00
            },
            {
                url: './images/goods1_3.jpg',
                title: '日本沛丽康 Pelican 美背香皂 135g',
                price1: 35.00,
                price2: 55.00
            },
            {
                url: './images/goods1_4.jpg',
                title: '花王 Merit弱酸性植物精华无硅油洗发水 柑橘配合清新棉花香 425ml',
                price1: 68.00,
                price2: 98.00
            },
            {
                url: './images/goods1_5.jpg',
                title: '日本花王乐而雅Ag银离子消臭护垫62片 无荧光剂 清新香草香型',
                price1: 25.00,
                price2: 48.00
            }
        ],
        uldata2: [
            { url: './images/goods2_1.jpg', title: 'Deep-formula Restructuring深层滋润亮肤霜 130ml/瓶', price1: 250.00, price2: 350.00 },
            { url: './images/goods2_2.jpg', title: 'AHC深层补水金箔面膜 25g*5片/盒', price1: 135.00, price2: 199.00 },
            { url: './images/goods2_3.jpg', title: '【优庭乐】韩国 Nature Republic自然乐园 红参 蜂王浆 黄金 丝柔 面霜 60g', price1: 158.00, price2: 488.00 },
            { url: './images/goods2_4.jpg', title: 'Innisfree悦诗风吟 绿茶籽精萃水分菁露特别件套装', price1: 119.00, price2: 230.00 },
            { url: './images/goods2_5.jpg', title: 'Sulwhasoo/雪花秀 滋盈肌本平衡水乳套装滋盈精选礼盒装', price1: 635.00, price2: 1080.00 }
        ],
        uldata3: [
            { url: './images/goods3_1.jpg', title: 'BiGH OPC配方植物胶囊', price1: 478.00, price2: 478.00 },
            { url: './images/goods3_2.jpg', title: 'Green Bee Propolis 绿蜂胶胶囊', price1: 262.00, price2: 262.00 },
            { url: './images/goods3_3.jpg', title: '美国 ChildLife 童年时光 婴幼儿紫锥菊滴剂 29.6ml', price1: 67.00, price2: 89.00 },
            { url: './images/goods3_4.jpg', title: 'meheco 嘉荷 钙镁D软胶囊', price1: 89.00, price2: 200.00 },
            { url: './images/goods3_5.jpg', title: 'meheco 嘉荷 多种维生素片', price1: 30.00, price2: 100.00 }
        ],
        uldata4: [
            { url: './images/goods4_1.png', title: '姬松茸提取物胶囊(胶囊28克)', price1: 380.00, price2: 460.00 },
            { url: './images/goods4_2.jpg', title: '希腊 Kereso 清新薄荷橄榄皂 100克', price1: 16.50, price2: 19.00 },
            { url: './images/goods4_3.jpg', title: '法国 Gravier 玫瑰花水 200ml', price1: 109.00, price2: 130.00 },
            { url: './images/goods4_4.jpg', title: 'PLACENTOR VEGETAL 佩芙兰 洋甘菊温和柔肤水', price1: 218.00, price2: 218.00 },
            { url: './images/goods4_5.jpg', title: 'Edenens 伊甸园 平衡油脂调理霜', price1: 298.00, price2: 298.00 }
        ],
        uldata5: [
            { url: './images/goods5_1.jpg', title: '男爵羊毛被200cm*230cm', price1: 1280.00, price2: 1880.00 },
            { url: './images/goods5_2.jpg', title: '林德曼卡瓦拉霞多丽白葡萄酒', price1: 36.00, price2: 160.00 },
            { url: './images/goods5_3.jpg', title: '安伯利亲吻 秘密莫斯卡托甜桃红酒', price1: 60.00, price2: 176.00 },
            { url: './images/goods5_4.jpg', title: '艾维雅西拉赤霞珠干红葡萄酒', price1: 49.00, price2: 245.00 },
            { url: './images/goods5_5.jpg', title: '奔富Bin2西拉子玛塔罗红葡萄酒', price1: 233.00, price2: 233.00 }
        ]
    },
});

var nav_li = document.querySelectorAll(".national_box_nat li");
var showBox = document.getElementsByClassName("goods_item_box");

for(var i=0;i<nav_li.length;i++){
    nav_li[i].index = i;
    nav_li[i].onclick = function () {
        for(var i=0;i<showBox.length;i++){
            nav_li[i].classList.remove("active");
            nav_li[this.index].classList.add("active");
            showBox[i].style.display = "none";
            showBox[this.index].style.display = "block";
        }
    }
}