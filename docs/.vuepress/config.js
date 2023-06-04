module.exports = {
    title: "Java学习笔记",
    description: "Java学习笔记总结",
    base: '/java-study/',
    theme: "reco",
    locales: {
        '/': {
            lang: 'zh-CN'
        },
    },
    themeConfig: {
        // lastUpdated: '上次更新',
        subSidebar: 'auto',
        nav: [
            {text: "首页", link: "/"},
            {
                text: 'dongpo的学习笔记',
                items: [
                    {text: 'GitHub', link: 'https://github.com/dongpo1000'},
                    {text: 'Test', link: 'https://www.baidu.com/'}
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "基础学习",
                path: '/studyBook/DataStructureAndAlgorithm',
                collapsable: false, // 不折叠
                children: [
                    { title: "数据结构和算法", path: "/studyBook/DataStructureAndAlgorithm" },
                    { title: "设计模式", path: "/studyBook/DesignPattern" }
                ],
            }
        ]
    }
}
