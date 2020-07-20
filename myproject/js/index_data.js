var nav_bar = new Vue({
    el: ".nav_bar",
    data: {
        pro: [
            {
                name: "母婴用品",
                content: [
                    {
                        dt: "奶粉",
                        dd: [
                            {
                                class: "1段"
                            },
                            {
                                class: "2段"
                            },
                            {
                                class: "3段"
                            },
                            {
                                class: "4段以上"
                            },
                            {
                                class: "其他"
                            }
                        ]
                    },
                    {
                        dt: "尿裤湿巾",
                        dd: [
                            {
                                class: "尿裤"
                            },
                            {
                                class: "婴儿湿巾"
                            },
                            {
                                class: "成人尿裤"
                            }

                        ]
                    },
                    {
                        dt: "营养辅食",
                        dd: [
                            {
                                class: "米粉/米糊"
                            },
                            {
                                class: "果蔬营养泥"
                            },
                            {
                                class: "婴幼儿营养补充"
                            },
                            {
                                class: "面条"
                            },
                            {
                                class: "其他辅食"
                            },
                            {
                                class: "宝宝零食"
                            }
                        ]
                    },
                    {
                        dt: "宝宝喂养",
                        dd: [
                            {
                                class: "奶瓶"
                            },
                            {
                                class: "奶嘴"
                            },
                            {
                                class: "吸奶器"
                            },
                            {
                                class: "哺喂餐具"
                            },
                            {
                                class: "哺喂收纳"
                            },
                            {
                                class: "宝宝零食"
                            },
                            {
                                class: "水壶/水杯"
                            }
                        ]
                    },
                    {
                        dt: "寝居服饰",
                        dd: [
                            {
                                class: "女童服饰"
                            },
                            {
                                class: "童鞋"
                            },
                            {
                                class: "围巾围嘴"
                            },
                            {
                                class: "儿童箱包"
                            },
                            {
                                class: "婴幼儿家纺"
                            },
                            {
                                class: "宝宝浴巾/毛巾"
                            },
                            {
                                class: "婴幼儿内衣/内裤"
                            }
                        ]
                    },
                    {
                        dt: "洗护清洁",
                        dd: [
                            {
                                class: "牙胶"
                            },
                            {
                                class: "洗发沐浴"
                            },
                            {
                                class: "婴儿护肤"
                            },
                            {
                                class: "口腔护理"
                            },
                            {
                                class: "奶瓶/果蔬清洗"
                            },
                            {
                                class: "驱蚊防蚊"
                            },
                            {
                                class: "衣物洗护"
                            },
                            {
                                class: "座便器"
                            },
                            {
                                class: "卫生护理"
                            },
                            {
                                class: "宝宝洗护套装"
                            }
                        ]
                    },
                    {
                        dt: "童车座椅",
                        dd: [
                            {
                                class: "推车"
                            },
                            {
                                class: "安全座椅"
                            },
                            {
                                class: "餐椅/靠椅"
                            },
                            {
                                class: "辅助用品"
                            },
                            {
                                class: "睡篮"
                            }
                        ]
                    },
                    {
                        dt: "儿童玩具",
                        dd: [
                            {
                                class: "益智玩具"
                            },
                            {
                                class: "其他玩具"
                            },
                            {
                                class: "玩偶/靠椅"
                            },
                            {
                                class: "玩具收纳"
                            }
                        ]
                    },
                    {
                        dt: "妈妈专区",
                        dd: [
                            {
                                class: "防溢乳垫"
                            },
                            {
                                class: "母乳保存袋"
                            },
                            {
                                class: "束腹/骨盆带"
                            },
                            {
                                class: "产后修复"
                            },
                            {
                                class: "孕妇护肤"
                            },
                            {
                                class: "孕/产营养品"
                            }
                        ]
                    },
                    {
                        dt: "其他",
                        dd: [
                            {
                                class: "宝宝梳子"
                            },
                            {
                                class: "宝宝耳温计"
                            },
                            {
                                class: "束腹/剪刀/指甲剪"
                            },
                            {
                                class: "防撞安全夹/套"
                            },
                            {
                                class: "充气坐垫"
                            }
                        ]
                    },
                ]
            },
            {
                name: "个护彩妆",
                content: [
                    {
                        dt: "奶粉",
                        dd: [
                            {
                                class: "1段"
                            },
                            {
                                class: "2段"
                            },
                            {
                                class: "3段"
                            },
                            {
                                class: "4段以上"
                            },
                            {
                                class: "其他"
                            }
                        ]
                    },
                    {
                        dt: "尿裤湿巾",
                        dd: [
                            {
                                class: "尿裤"
                            },
                            {
                                class: "婴儿湿巾"
                            },
                            {
                                class: "成人尿裤"
                            }

                        ]
                    },
                    {
                        dt: "营养辅食",
                        dd: [
                            {
                                class: "米粉/米糊"
                            },
                            {
                                class: "果蔬营养泥"
                            },
                            {
                                class: "婴幼儿营养补充"
                            },
                            {
                                class: "面条"
                            },
                            {
                                class: "其他辅食"
                            },
                            {
                                class: "宝宝零食"
                            }
                        ]
                    },
                    {
                        dt: "宝宝喂养",
                        dd: [
                            {
                                class: "奶瓶"
                            },
                            {
                                class: "奶嘴"
                            },
                            {
                                class: "吸奶器"
                            },
                            {
                                class: "哺喂餐具"
                            },
                            {
                                class: "哺喂收纳"
                            },
                            {
                                class: "宝宝零食"
                            },
                            {
                                class: "水壶/水杯"
                            }
                        ]
                    },
                    {
                        dt: "寝居服饰",
                        dd: [
                            {
                                class: "女童服饰"
                            },
                            {
                                class: "童鞋"
                            },
                            {
                                class: "围巾围嘴"
                            },
                            {
                                class: "儿童箱包"
                            },
                            {
                                class: "婴幼儿家纺"
                            },
                            {
                                class: "宝宝浴巾/毛巾"
                            },
                            {
                                class: "婴幼儿内衣/内裤"
                            }
                        ]
                    },
                    {
                        dt: "洗护清洁",
                        dd: [
                            {
                                class: "牙胶"
                            },
                            {
                                class: "洗发沐浴"
                            },
                            {
                                class: "婴儿护肤"
                            },
                            {
                                class: "口腔护理"
                            },
                            {
                                class: "奶瓶/果蔬清洗"
                            },
                            {
                                class: "驱蚊防蚊"
                            },
                            {
                                class: "衣物洗护"
                            },
                            {
                                class: "座便器"
                            },
                            {
                                class: "卫生护理"
                            },
                            {
                                class: "宝宝洗护套装"
                            }
                        ]
                    },
                    {
                        dt: "童车座椅",
                        dd: [
                            {
                                class: "推车"
                            },
                            {
                                class: "安全座椅"
                            },
                            {
                                class: "餐椅/靠椅"
                            },
                            {
                                class: "辅助用品"
                            },
                            {
                                class: "睡篮"
                            }
                        ]
                    },
                    {
                        dt: "儿童玩具",
                        dd: [
                            {
                                class: "益智玩具"
                            },
                            {
                                class: "其他玩具"
                            },
                            {
                                class: "玩偶/靠椅"
                            },
                            {
                                class: "玩具收纳"
                            }
                        ]
                    },
                    {
                        dt: "妈妈专区",
                        dd: [
                            {
                                class: "防溢乳垫"
                            },
                            {
                                class: "母乳保存袋"
                            },
                            {
                                class: "束腹/骨盆带"
                            },
                            {
                                class: "产后修复"
                            },
                            {
                                class: "孕妇护肤"
                            },
                            {
                                class: "孕/产营养品"
                            }
                        ]
                    },
                    {
                        dt: "其他",
                        dd: [
                            {
                                class: "宝宝梳子"
                            },
                            {
                                class: "宝宝耳温计"
                            },
                            {
                                class: "束腹/剪刀/指甲剪"
                            },
                            {
                                class: "防撞安全夹/套"
                            },
                            {
                                class: "充气坐垫"
                            }
                        ]
                    },
                ]
            },
            {
                name: "营养保健",
                content: [
                    {
                        dt: "奶粉",
                        dd: [
                            {
                                class: "1段"
                            },
                            {
                                class: "2段"
                            },
                            {
                                class: "3段"
                            },
                            {
                                class: "4段以上"
                            },
                            {
                                class: "其他"
                            }
                        ]
                    },
                    {
                        dt: "尿裤湿巾",
                        dd: [
                            {
                                class: "尿裤"
                            },
                            {
                                class: "婴儿湿巾"
                            },
                            {
                                class: "成人尿裤"
                            }

                        ]
                    },
                    {
                        dt: "营养辅食",
                        dd: [
                            {
                                class: "米粉/米糊"
                            },
                            {
                                class: "果蔬营养泥"
                            },
                            {
                                class: "婴幼儿营养补充"
                            },
                            {
                                class: "面条"
                            },
                            {
                                class: "其他辅食"
                            },
                            {
                                class: "宝宝零食"
                            }
                        ]
                    },
                    {
                        dt: "宝宝喂养",
                        dd: [
                            {
                                class: "奶瓶"
                            },
                            {
                                class: "奶嘴"
                            },
                            {
                                class: "吸奶器"
                            },
                            {
                                class: "哺喂餐具"
                            },
                            {
                                class: "哺喂收纳"
                            },
                            {
                                class: "宝宝零食"
                            },
                            {
                                class: "水壶/水杯"
                            }
                        ]
                    },
                    {
                        dt: "寝居服饰",
                        dd: [
                            {
                                class: "女童服饰"
                            },
                            {
                                class: "童鞋"
                            },
                            {
                                class: "围巾围嘴"
                            },
                            {
                                class: "儿童箱包"
                            },
                            {
                                class: "婴幼儿家纺"
                            },
                            {
                                class: "宝宝浴巾/毛巾"
                            },
                            {
                                class: "婴幼儿内衣/内裤"
                            }
                        ]
                    },
                    {
                        dt: "洗护清洁",
                        dd: [
                            {
                                class: "牙胶"
                            },
                            {
                                class: "洗发沐浴"
                            },
                            {
                                class: "婴儿护肤"
                            },
                            {
                                class: "口腔护理"
                            },
                            {
                                class: "奶瓶/果蔬清洗"
                            },
                            {
                                class: "驱蚊防蚊"
                            },
                            {
                                class: "衣物洗护"
                            },
                            {
                                class: "座便器"
                            },
                            {
                                class: "卫生护理"
                            },
                            {
                                class: "宝宝洗护套装"
                            }
                        ]
                    },
                    {
                        dt: "童车座椅",
                        dd: [
                            {
                                class: "推车"
                            },
                            {
                                class: "安全座椅"
                            },
                            {
                                class: "餐椅/靠椅"
                            },
                            {
                                class: "辅助用品"
                            },
                            {
                                class: "睡篮"
                            }
                        ]
                    },
                    {
                        dt: "儿童玩具",
                        dd: [
                            {
                                class: "益智玩具"
                            },
                            {
                                class: "其他玩具"
                            },
                            {
                                class: "玩偶/靠椅"
                            },
                            {
                                class: "玩具收纳"
                            }
                        ]
                    },
                    {
                        dt: "妈妈专区",
                        dd: [
                            {
                                class: "防溢乳垫"
                            },
                            {
                                class: "母乳保存袋"
                            },
                            {
                                class: "束腹/骨盆带"
                            },
                            {
                                class: "产后修复"
                            },
                            {
                                class: "孕妇护肤"
                            },
                            {
                                class: "孕/产营养品"
                            }
                        ]
                    },
                    {
                        dt: "其他",
                        dd: [
                            {
                                class: "宝宝梳子"
                            },
                            {
                                class: "宝宝耳温计"
                            },
                            {
                                class: "束腹/剪刀/指甲剪"
                            },
                            {
                                class: "防撞安全夹/套"
                            },
                            {
                                class: "充气坐垫"
                            }
                        ]
                    },
                ]
            },
            {
                name: "进口食品",
                content: [
                    {
                        dt: "奶粉",
                        dd: [
                            {
                                class: "1段"
                            },
                            {
                                class: "2段"
                            },
                            {
                                class: "3段"
                            },
                            {
                                class: "4段以上"
                            },
                            {
                                class: "其他"
                            }
                        ]
                    },
                    {
                        dt: "尿裤湿巾",
                        dd: [
                            {
                                class: "尿裤"
                            },
                            {
                                class: "婴儿湿巾"
                            },
                            {
                                class: "成人尿裤"
                            }

                        ]
                    },
                    {
                        dt: "营养辅食",
                        dd: [
                            {
                                class: "米粉/米糊"
                            },
                            {
                                class: "果蔬营养泥"
                            },
                            {
                                class: "婴幼儿营养补充"
                            },
                            {
                                class: "面条"
                            },
                            {
                                class: "其他辅食"
                            },
                            {
                                class: "宝宝零食"
                            }
                        ]
                    },
                    {
                        dt: "宝宝喂养",
                        dd: [
                            {
                                class: "奶瓶"
                            },
                            {
                                class: "奶嘴"
                            },
                            {
                                class: "吸奶器"
                            },
                            {
                                class: "哺喂餐具"
                            },
                            {
                                class: "哺喂收纳"
                            },
                            {
                                class: "宝宝零食"
                            },
                            {
                                class: "水壶/水杯"
                            }
                        ]
                    },
                    {
                        dt: "寝居服饰",
                        dd: [
                            {
                                class: "女童服饰"
                            },
                            {
                                class: "童鞋"
                            },
                            {
                                class: "围巾围嘴"
                            },
                            {
                                class: "儿童箱包"
                            },
                            {
                                class: "婴幼儿家纺"
                            },
                            {
                                class: "宝宝浴巾/毛巾"
                            },
                            {
                                class: "婴幼儿内衣/内裤"
                            }
                        ]
                    },
                    {
                        dt: "洗护清洁",
                        dd: [
                            {
                                class: "牙胶"
                            },
                            {
                                class: "洗发沐浴"
                            },
                            {
                                class: "婴儿护肤"
                            },
                            {
                                class: "口腔护理"
                            },
                            {
                                class: "奶瓶/果蔬清洗"
                            },
                            {
                                class: "驱蚊防蚊"
                            },
                            {
                                class: "衣物洗护"
                            },
                            {
                                class: "座便器"
                            },
                            {
                                class: "卫生护理"
                            },
                            {
                                class: "宝宝洗护套装"
                            }
                        ]
                    },
                    {
                        dt: "童车座椅",
                        dd: [
                            {
                                class: "推车"
                            },
                            {
                                class: "安全座椅"
                            },
                            {
                                class: "餐椅/靠椅"
                            },
                            {
                                class: "辅助用品"
                            },
                            {
                                class: "睡篮"
                            }
                        ]
                    },
                    {
                        dt: "儿童玩具",
                        dd: [
                            {
                                class: "益智玩具"
                            },
                            {
                                class: "其他玩具"
                            },
                            {
                                class: "玩偶/靠椅"
                            },
                            {
                                class: "玩具收纳"
                            }
                        ]
                    },
                    {
                        dt: "妈妈专区",
                        dd: [
                            {
                                class: "防溢乳垫"
                            },
                            {
                                class: "母乳保存袋"
                            },
                            {
                                class: "束腹/骨盆带"
                            },
                            {
                                class: "产后修复"
                            },
                            {
                                class: "孕妇护肤"
                            },
                            {
                                class: "孕/产营养品"
                            }
                        ]
                    },
                    {
                        dt: "其他",
                        dd: [
                            {
                                class: "宝宝梳子"
                            },
                            {
                                class: "宝宝耳温计"
                            },
                            {
                                class: "束腹/剪刀/指甲剪"
                            },
                            {
                                class: "防撞安全夹/套"
                            },
                            {
                                class: "充气坐垫"
                            }
                        ]
                    },
                ]
            },
            {
                name: "生活家居",
                content: [
                    {
                        dt: "奶粉",
                        dd: [
                            {
                                class: "1段"
                            },
                            {
                                class: "2段"
                            },
                            {
                                class: "3段"
                            },
                            {
                                class: "4段以上"
                            },
                            {
                                class: "其他"
                            }
                        ]
                    },
                    {
                        dt: "尿裤湿巾",
                        dd: [
                            {
                                class: "尿裤"
                            },
                            {
                                class: "婴儿湿巾"
                            },
                            {
                                class: "成人尿裤"
                            }

                        ]
                    },
                    {
                        dt: "营养辅食",
                        dd: [
                            {
                                class: "米粉/米糊"
                            },
                            {
                                class: "果蔬营养泥"
                            },
                            {
                                class: "婴幼儿营养补充"
                            },
                            {
                                class: "面条"
                            },
                            {
                                class: "其他辅食"
                            },
                            {
                                class: "宝宝零食"
                            }
                        ]
                    },
                    {
                        dt: "宝宝喂养",
                        dd: [
                            {
                                class: "奶瓶"
                            },
                            {
                                class: "奶嘴"
                            },
                            {
                                class: "吸奶器"
                            },
                            {
                                class: "哺喂餐具"
                            },
                            {
                                class: "哺喂收纳"
                            },
                            {
                                class: "宝宝零食"
                            },
                            {
                                class: "水壶/水杯"
                            }
                        ]
                    },
                    {
                        dt: "寝居服饰",
                        dd: [
                            {
                                class: "女童服饰"
                            },
                            {
                                class: "童鞋"
                            },
                            {
                                class: "围巾围嘴"
                            },
                            {
                                class: "儿童箱包"
                            },
                            {
                                class: "婴幼儿家纺"
                            },
                            {
                                class: "宝宝浴巾/毛巾"
                            },
                            {
                                class: "婴幼儿内衣/内裤"
                            }
                        ]
                    },
                    {
                        dt: "洗护清洁",
                        dd: [
                            {
                                class: "牙胶"
                            },
                            {
                                class: "洗发沐浴"
                            },
                            {
                                class: "婴儿护肤"
                            },
                            {
                                class: "口腔护理"
                            },
                            {
                                class: "奶瓶/果蔬清洗"
                            },
                            {
                                class: "驱蚊防蚊"
                            },
                            {
                                class: "衣物洗护"
                            },
                            {
                                class: "座便器"
                            },
                            {
                                class: "卫生护理"
                            },
                            {
                                class: "宝宝洗护套装"
                            }
                        ]
                    },
                    {
                        dt: "童车座椅",
                        dd: [
                            {
                                class: "推车"
                            },
                            {
                                class: "安全座椅"
                            },
                            {
                                class: "餐椅/靠椅"
                            },
                            {
                                class: "辅助用品"
                            },
                            {
                                class: "睡篮"
                            }
                        ]
                    },
                    {
                        dt: "儿童玩具",
                        dd: [
                            {
                                class: "益智玩具"
                            },
                            {
                                class: "其他玩具"
                            },
                            {
                                class: "玩偶/靠椅"
                            },
                            {
                                class: "玩具收纳"
                            }
                        ]
                    },
                    {
                        dt: "妈妈专区",
                        dd: [
                            {
                                class: "防溢乳垫"
                            },
                            {
                                class: "母乳保存袋"
                            },
                            {
                                class: "束腹/骨盆带"
                            },
                            {
                                class: "产后修复"
                            },
                            {
                                class: "孕妇护肤"
                            },
                            {
                                class: "孕/产营养品"
                            }
                        ]
                    },
                    {
                        dt: "其他",
                        dd: [
                            {
                                class: "宝宝梳子"
                            },
                            {
                                class: "宝宝耳温计"
                            },
                            {
                                class: "束腹/剪刀/指甲剪"
                            },
                            {
                                class: "防撞安全夹/套"
                            },
                            {
                                class: "充气坐垫"
                            }
                        ]
                    },
                ]
            },
            {
                name: "宠物用品",
                content: [
                    {
                        dt: "宠物保健",
                        dd: [
                            {
                                class: "发育补钙"
                            },
                            {
                                class: "护肤美毛"
                            },
                            {
                                class: "肠胃调理"
                            },
                            {
                                class: "宠物驱虫"
                            },
                            {
                                class: "皮肤病防治"
                            },
                            {
                                class: "其他保健"
                            },
                            {
                                class: "幼猫营养膏"
                            },
                            {
                                class: "幼犬营养膏"
                            },
                            {
                                class: "成犬营养膏"
                            },
                            {
                                class: "猫咪化毛膏"
                            }
                        ]
                    },
                    {
                        dt: "美容洗护",
                        dd: [
                            {
                                class: "浴液"
                            },
                            {
                                class: "护毛素"
                            },
                            {
                                class: "美容用具"
                            },
                            {
                                class: "口/耳/眼清洁"
                            }
                        ]
                    },
                    {
                        dt: "宠物日用",
                        dd: [
                            {
                                class: "猫狗窝"
                            },
                            {
                                class: "食用餐具"
                            },
                            {
                                class: "狗厕所/尿垫"
                            },
                            {
                                class: "猫砂/猫砂盆"
                            },
                            {
                                class: "清洁除味"
                            },
                            {
                                class: "笼子/围栏"
                            }
                        ]
                    },
                    {
                        dt: "其他用品",
                        dd: [
                            {
                                class: "玩具"
                            },
                            {
                                class: "服饰"
                            },
                            {
                                class: "出行装备"
                            }
                        ]
                    }
                ]
            },
            {
                name: "鞋靴箱包",
                content: [
                    {
                        dt: "男鞋",
                        dd: [
                            {
                                class: "男士休闲鞋"
                            },
                            {
                                class: "男款休闲鞋"
                            }
                        ]
                    },
                    {
                        dt: "女鞋",
                        dd: [
                            {
                                class: "休闲鞋"
                            }
                        ]
                    },
                    {
                        dt: "精品男包",
                        dd: [
                            {
                                class: "公文包/电脑包"
                            },
                            {
                                class: "钱包"
                            }
                        ]
                    }
                ]
            },
            {
                name: "服装配饰",
                content: [
                    {
                        dt: "潮流饰品",
                        dd: [
                            {
                                class: "耳环/耳钉"
                            },
                            {
                                class: "项链"
                            },
                            {
                                class: "手链"
                            },
                            {
                                class: "天然木饰"
                            }
                        ]
                    },
                    {
                        dt: "男装",
                        dd: [
                            {
                                class: "男士裤装"
                            },
                            {
                                class: "男士内衣/裤"
                            }
                        ]
                    },
                    {
                        dt: "腰带",
                        dd: [
                            {
                                class: "腰带"
                            }
                        ]
                    },
                    {
                        dt: "配饰",
                        dd: [
                            {
                                class: "手套"
                            },
                            {
                                class: "领带"
                            },
                            {
                                class: "耳罩"
                            }
                        ]
                    }
                ]
            },
        ]
    },
});