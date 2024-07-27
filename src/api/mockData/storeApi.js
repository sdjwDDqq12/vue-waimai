export default {
    getStoreData: () => {
        return {
            code: 200,
            storeData: [
                {
                    name: "点菜",
                    data: {
                    content: "点菜",
                    items: [
                        {
                        text: "热销套餐",
                        children: [
                            {
                            pic: "https://img2.baidu.com/it/u=122893126,3278493644&fm=253&fmt=auto&app=138&f=JPEG?w=469&h=293",
                            title: "隆江猪脚饭",
                            num: 0,
                            price: 25.0,
                            id: 0,
                            add: true,
                            },
                            {
                            pic: "https://img0.baidu.com/it/u=4173658199,594998204&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=800",
                            title: "隆江猪脚饭",
                            num: 0,
                            price: 25.0,
                            id: 1,
                            add: true,
                            },
                        ],
                        },
                        {
                        text: "超级折扣",
                        children: [
                            {
                            pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                            title: "无骨酸菜鱼+肥牛双拼",
                            num: 0,
                            price: 25.0,
                            id: 5,
                            add: true,
                            },
                            {
                            pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                            title: "香辣水煮鱼+肥牛双拼",
                            num: 0,
                            price: 25.0,
                            id: 6,
                            add: true,
                            },
                        ],
                        },
                    ],
                    },
                },
                {
                    name: "评价",
                    data: {
                    content: "评价",
                    },
                },
                {
                    name: "商家",
                    data: {
                    content: "商家",
                    },
                },
            ]
        }
    }
}