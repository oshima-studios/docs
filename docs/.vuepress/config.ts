import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
    base: '/',
    title: '喔 是吗？',
    description: '喔 是吗？开发文档',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }] // 添加这一行
    ],
    theme: plumeTheme({
  	lang: 'zh-CN',
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '喔是吗',
                items: [
                    { text: 'API列表', link: '/api/' },
                ],
            },
        ],
        aside: 'left',
        docsRepo: 'oshima-studios/docs',
        docsBranch: 'master',
        docsDir: 'docs',
        externalLinkIcon: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: true,
	footer: {
        message: "<a href='https://www.gnu.org/licenses/agpl-3.0' target='_blank'>AGPL-3.0 license</a>",
		copyright: "Copyright © 2022-至今 <a href='https://milimoe.com' target='_blank'>Milimoe</a> & <a href='https://github.com/oshima-studios' target='_blank'>Oshima Studios</a>."
	}
    }),
    bundler: viteBundler(),
    plugins: []
})
