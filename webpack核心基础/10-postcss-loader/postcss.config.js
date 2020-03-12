module.exports = {
    plugins: {
        "autoprefixer": {
            "overrideBrowserslist": [ // 配置要兼容哪些浏览器
                "ie >= 8", // 兼容ie7以上浏览器版本, -ms
                "Firefox >= 3.5", // 火狐, -moz
                "chrome >= 35", // 谷歌， -webkit https://www.caniuse.com/#search=transform 这个网址可查看兼容哪些版本，需要添加私有前缀
                "opera >= 11.5" // 欧朋, -o
                // "chrome >= 36" // 兼容36以上版本不需要添加前缀
            ]
        },
        "postcss-pxtorem": {
            rootValue: 100, // 根元素字体大小
            propList: ["*"], // 会将所有的px都转换为rem属性
            // propList: ['height'] // 只转换height的px
        }
    }
}