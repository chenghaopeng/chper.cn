<template>
  <div class='home'>
    <div id='back1' class='back'>
      <div class='blur'></div>
    </div>
    <div id='back2' class='back'>
      <div class='blur'></div>
    </div>
    <svg id='arrow' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='isolation:isolate' viewBox='0 0 50 50'><defs><clipPath id='_clipPath_AsJKgimMsSXFeT2uLS5Tj3jwSrgqg3eC'><rect width='50' height='50'/></clipPath></defs><g clip-path='url(#_clipPath_AsJKgimMsSXFeT2uLS5Tj3jwSrgqg3eC)'><path d=' M 15.546 7.5 L 4.793 7.5 L 14.896 25 L 25 42.5 L 35.104 25 L 45.207 7.5 L 34.454 7.5 L 29.727 15.688 L 25 23.875 L 20.273 15.687 L 15.546 7.5 Z ' fill-rule='evenodd'/></g></svg>
    <div class='scene'>
      <div class='me'></div>
    </div>
    <div class='scene'>
      <div class='logo'></div>
      <div class='name'>鹏鹏</div>
      <div class='say'>想要成为设计师的准软件工程师</div>
    </div>
    <div class='scene'>
      <div class='navigator'>
        <div class='navrow' v-for='nav in navs' v-bind:key='nav.category'>
          <div class='category'>{{ nav.category }}</div>
          <div class='links'>
            <a target='_blank' v-for='link in nav.links' v-bind:key='link.name' :href='link.href'><div class='link'>{{ link.name }}</div></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      navs: [
        {
          category: '博客们',
          links: [
            {
              name: '日常博客',
              href: 'http://blog.chper.cn/'
            },
            {
              name: 'OI 博客',
              href: 'http://oi.chper.cn/'
            },
            {
              name: '旧 OI 博客',
              href: 'http://old.chper.cn/'
            }
          ]
        },
        {
          category: '我活跃的地方',
          links: [
            {
              name: 'GitHub',
              href: 'https://github.com/chenghaopeng'
            },
            {
              name: 'deepin 社区',
              href: 'https://bbs.deepin.org/home.php?mod=space&uid=74043'
            },
            {
              name: '知乎',
              href: 'https://www.zhihu.com/people/cheng-hao-peng-70/'
            },
            {
              name: 'CodePen',
              href: 'https://codepen.io/chenghaopeng'
            }
          ]
        },
        {
          category: '自制的奇怪东西们',
          links: [
            {
              name: '盒子',
              href: 'http://box.chper.cn/'
            },
            {
              name: 'chpoj',
              href: 'http://oj.chper.cn/'
            },
            {
              name: '视频',
              href: 'http://y.chper.cn/'
            },
            {
              name: '英语单词',
              href: 'http://word.chper.cn/'
            },
            {
              name: '蹭饭',
              href: 'http://chper.cn/cengfan'
            }
          ]
        },
        {
          category: '比赛的辣鸡作品们',
          links: [
            {
              name: 'EL 比赛 1 日肝作品：BitWorld',
              href: 'http://bit.chper.cn/'
            },
            {
              name: 'MSC Hackathon：南大飞毛腿',
              href: 'http://h.chper.cn/'
            },
            {
              name: '花旗杯：FR Shield 企业相对风险识别及评分系统',
              href: 'http://hqb.chper.cn/'
            },
            {
              name: '华东八校 Hackathon：Yoqubing 有求必应',
              href: 'http://yoqubing.chper.cn/'
            }
          ]
        },
        {
          category: '据为己用的东西们',
          links: [
            {
              name: '云端',
              href: 'http://cloud.chper.cn/'
            },
            {
              name: 'WTFGame',
              href: 'http://wtf.chper.cn/'
            }
          ]
        },
        {
          category: '我',
          links: [
            {
              name: '联系',
              href: 'tencent://Message/?Uin=794780360&websiteName=q-zone.qq.com&Menu=yes'
            },
            {
              name: '是谁',
              href: 'http://blog.chper.cn/me.html'
            }
          ]
        },
        {
          category: '朋友们',
          links: [
            {
              name: '翠翠酱',
              href: 'https://idealclover.top/'
            },
            {
              name: 'MaoRX | 静水流深',
              href: 'https://www.maorx.cn/'
            },
            {
              name: 'bobo',
              href: 'http://byzeal.cn/'
            }
          ]
        }
      ]
    }
  },
  methods: {
    scroll: function () {
      let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
      let $blurs = document.querySelectorAll('.blur')
      for (let $blur of $blurs) {
        if (scrolled <= 1 / 3) {
          $blur.style.filter = 'blur(' + (30 * scrolled * scrolled * scrolled * 27) + 'px)'
        } else if (scrolled > 2 / 3) {
          $blur.style.filter = 'blur(' + (30 * (1 - scrolled) * (1 - scrolled) * (1 - scrolled) * 27) + 'px)'
        } else {
          $blur.style.filter = 'blur(30px)'
        }
      }
      let $back1 = document.querySelector('#back1')
      let $back2 = document.querySelector('#back2')
      if (scrolled > 2 / 3) {
        $back1.style.opacity = (1 - (scrolled - 2 / 3) * 3 * (scrolled - 2 / 3) * 3).toString()
        $back2.style.opacity = (1 - (1 - scrolled) * 3 * (1 - scrolled) * 3).toString()
      } else {
        $back1.style.opacity = '1'
        $back2.style.opacity = '0'
      }
      let $arrow = document.querySelector('#arrow')
      if (scrolled >= 0.8) {
        $arrow.classList.remove('animating')
        $arrow.classList.add('hiding')
      } else {
        $arrow.classList.remove('hiding')
        $arrow.classList.add('animating')
      }
      let $scenes = document.querySelectorAll('.scene')
      for (let i = 0; i < $scenes.length; ++i) {
        if (scrolled > i * 1 / 3 && scrolled <= (i + 1) * 1 / 3) {
          $scenes[i].style.opacity = '1'
          $scenes[i].style.visibility = 'visible'
        } else {
          $scenes[i].style.opacity = '0'
          $scenes[i].style.visibility = 'hidden'
        }
      }
      let $me = document.querySelector('.me')
      if (scrolled < 1 / 9) {
        $me.style.left = '150%'
      } else if (scrolled >= 2 / 9) {
        $me.style.left = '-150%'
      } else {
        $me.style.left = (150 - (scrolled - 1 / 9) * 9 * 300) + '%'
      }
      let $logo = document.querySelector('.logo')
      if (scrolled >= 1 / 3 && scrolled < 2 / 3) {
        if (scrolled < 1 / 3 + 1 / 9) {
          $logo.style.opacity = ((scrolled - 1 / 3) * 9).toString()
          $logo.style.transform = 'scale(' + (scrolled - 1 / 3) * 9 * (scrolled - 1 / 3) * 9 + ')'
          $logo.style.boxShadow = 'none'
        } else {
          $logo.style.opacity = '1'
          $logo.style.transform = 'scale(1)'
          if (scrolled < 1 / 3 + 1 / 9 * 2) {
            $logo.style.transform = 'translate(' + (-1 * (scrolled - 1 / 3 - 1 / 9) * 9) + 'vmin, ' + (-1 * (scrolled - 1 / 3 - 1 / 9) * 9) + 'vmin)'
            $logo.style.boxShadow = ((scrolled - 1 / 3 - 1 / 9) * 9) + 'vmin ' + ((scrolled - 1 / 3 - 1 / 9) * 9) + 'vmin 5vmin 1vmin rgba(0, 0, 0, ' + (2 / 3 - (scrolled - 1 / 3 - 1 / 9) * 9 / 3) + ')'
          } else {
            $logo.style.transform = 'translate(-1vmin, -1vmin)'
            $logo.style.boxShadow = '1vmin 1vmin 5vmin 1vmin rgba(0, 0, 0, ' + (1 / 3) + ')'
          }
        }
      }
      let $name = document.querySelector('.name')
      let $say = document.querySelector('.say')
      if (scrolled >= 1 / 3 + 1 / 9 && scrolled < 1 / 3 + 1 / 9 * 2) {
        let p = (scrolled - 1 / 3 - 1 / 9) * 9
        $name.style.opacity = p * p
        $say.style.opacity = p * p
        $name.style.transform = 'translateY(' + (100 * (1 - p) * (1 - p)) + '%)'
        $say.style.transform = 'translateY(' + (100 * (1 - p) * (1 - p) * (1 - p)) + '%)'
      } else if (scrolled >= 1 / 3 + 1 / 9 * 2) {
        $name.style.opacity = 1
        $say.style.opacity = 1
        $name.style.transform = 'translateY(0%)'
        $say.style.transform = 'translateY(0%)'
      } else if (scrolled < 1 / 3 + 1 / 9) {
        $name.style.opacity = 0
        $say.style.opacity = 0
        $name.style.transform = 'translateY(100%)'
        $say.style.transform = 'translateY(100%)'
      }
      if (scrolled >= 1 / 3 + 1 / 9 * 2 && scrolled < 1 / 3 + 1 / 9 * 3) {
        let p = (scrolled - 1 / 3 - 1 / 9 * 2) * 9
        $name.style.fontWeight = (100 + Math.sqrt(1 - Math.pow(p - 1, 2)) * 300).toString()
        $say.style.fontWeight = (100 + Math.sqrt(1 - Math.pow(p - 1, 2)) * 200).toString()
        $say.style.letterSpacing = (p * p / 10 * 3 + 0.2) + 'vmin'
      } else if (scrolled >= 1 / 3 + 1 / 9 * 3) {
        $name.style.fontWeight = '400'
        $say.style.fontWeight = '300'
        $say.style.letterSpacing = '0.5vmin'
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scroll, true)
    this.scroll()
  }
}
</script>

<style scoped>
.home {
  height: 600vh;
  width: 100%;
}
.home,
.back,
.blur {
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
.back {
  height: 100vh;
  width: 100%;
  position: fixed;
}
.blur {
  --offset: -5%;
  top: var(--offset);
  right: var(--offset);
  bottom: var(--offset);
  left: var(--offset);
  position: absolute;
}
#back1,
#back1 .blur {
  background-image: url(../assets/backgroundimage.jpg);
}
#back2,
#back2 .blur {
  background-image: url(../assets/backgroundimage2.jpg);
}
#back2 {
  opacity: 0;
}
#arrow {
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 20px;
  height: 20px;
  transition: 1s;
  fill: white;
}
#arrow.animating {
  animation: dropdown 5s cubic-bezier(0.34, 1.56, 0.64, 1) 2s infinite;
  opacity: 0.5;
}
#arrow.hiding {
  animation: none;
  opacity: 0;
}
@keyframes dropdown {
  0% { transform: translateY(0); opacity: 0.5; }
  30% { transform: translateY(20px); opacity: 0.1; }
  100% { transform: translateY(0); opacity: 0.5; }
}
.scene {
  opacity: 0;
  visibility: hidden;
  transition: 1s;
  height: 100vh;
  width: 100%;
  position: fixed;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.me {
  background-image: url(../assets/me.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 60vmin;
  height: 45vmin;
  border-radius: 5vmin;
  box-shadow: 0px 0px 10vmin 1vmin #000000bb;
  position: absolute;
  left: 150%;
}
.logo {
  background-image: url(../assets/logo.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 20vmin;
  height: 20vmin;
  border-radius: 2vmin;
  opacity: 0;
  transition: box-shadow 0.5s;
}
.name {
  margin-top: 2.5vmin;
  font-size: 6vmin;
}
.say {
  margin-top: 1vmin;
  font-size: 3vmin;
  letter-spacing: .1vmin;
}
.name,
.say {
  font-weight: 100;
  transform: translateY(100%);
  opacity: 0;
}
.navigator {
  width: 80%;
  max-width: 1200px;
  height: 90vh;
  display: flex;
  flex-flow: column nowrap;
  overflow-y: scroll;
}
.navigator::-webkit-scrollbar {
  display: none;
}
.navrow {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  transition: 0.3s ease-in-out;
}
.category {
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.links {
  width: 60%;
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
}
.category,
.link {
  margin: 0.5em;
  padding: 0.5em 1.5em;
  position: relative;
  line-height: 1.5em;
  overflow: hidden;
  font-size: 1.2em;
  border-radius: 0.5em;
  box-shadow: 0.1em 0.1em 0.5em 0.1em #00000033;
}
.link {
  cursor: pointer;
}
.links a,
.links a:hover,
.links a:active,
.links a:visited {
  text-decoration: none;
  color: black;
}
.category::before,
.link::before {
  content: '';
  position: absolute;
  --offset: -5%;
  top: var(--offset);
  right: var(--offset);
  bottom: var(--offset);
  left: var(--offset);
  backdrop-filter: blur(2em) brightness(120%);
  z-index: -1;
}
.navrow:hover .category::before,
.link:hover::before {
  backdrop-filter: blur(1em) brightness(150%);
}
</style>
