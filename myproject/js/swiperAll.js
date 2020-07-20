// 轮播初始化 

        var comtainer = document.querySelector('.swiper-container');

        var mySwiper = new Swiper('.swiper-container', {
            loop: true,

            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })

        comtainer.onmouseenter = function () {
            mySwiper.autoplay.stop();
        }
        comtainer.onmouseleave = function () {
            mySwiper.autoplay.start();
        }