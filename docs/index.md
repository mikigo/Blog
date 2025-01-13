---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: TDoc
  text: "专注于测试方向的技术分享交流平台"
  tagline: Tester Docs

  image:
      src: /vitepress-logo-large.webp
      alt: VitePress

features:
  - icon: 📝
    title: 记录
    details: 用热情的笔触描绘生活的点点滴滴，记录下我们共同成长的足迹。
  - icon: 💡
    title: 分享
    details: 让知识的火花在分享中绽放，点燃我们追求卓越的热情。
  - icon: 🚀
    title: 成长
    details: 拥抱成长的旅程，让热情的阳光照耀我们不断前行的道路。
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/writers/mikigo.jpg',
    name: '黄明强',
  },
  {
    avatar: '/writers/jinjiabin.png',
    name: '金佳斌',
  },
  {
    avatar: '/writers/chenyi.png',
    name: '陈依',
  },
  {
    avatar: '/writers/zhaofangfang.png',
    name: '赵方方',
  },
  {
    avatar: '/writers/huanghaizhen.png',
    name: '黄海针',
  },
  {
    avatar: '/writers/luye.png',
    name: '禄烨',
  },
  {
    avatar: '/writers/lihuan.png',
    name: '李欢',
  },
  {
    avatar: '/writers/liguangming.png',
    name: '李光明',
  },
  {
    avatar: '/writers/wangpeng.png',
    name: '王鹏',
  },
  {
    avatar: '/writers/zuohanxu.png',
    name: '左含旭',
  },
  {
    avatar: '/writers/lufei.png',
    name: '路斐',
  },
]

</script>


<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Writers
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="members"
  />
</VPTeamPage>
