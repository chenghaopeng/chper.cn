<template>
  <div class='home'>
    <div id='back1' class='back'>
      <div class='blur'></div>
    </div>
    <div id='back2' class='back'>
      <div class='blur'></div>
    </div>
    <svg id='arrow' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='isolation:isolate' viewBox='0 0 50 50'><defs><clipPath id='_clipPath_AsJKgimMsSXFeT2uLS5Tj3jwSrgqg3eC'><rect width='50' height='50'/></clipPath></defs><g clip-path='url(#_clipPath_AsJKgimMsSXFeT2uLS5Tj3jwSrgqg3eC)'><path d=' M 15.546 7.5 L 4.793 7.5 L 14.896 25 L 25 42.5 L 35.104 25 L 45.207 7.5 L 34.454 7.5 L 29.727 15.688 L 25 23.875 L 20.273 15.687 L 15.546 7.5 Z ' fill-rule='evenodd'/></g></svg>
    <div class='scene'></div>
    <div class='scene'>
      <div class='logo'></div>
      <div class="name">鹏鹏</div>
      <div class="say">想要成为设计师的准软件工程师</div>
    </div>
    <div class='scene'></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
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
        if (scrolled >= i * 1 / 3 && scrolled < (i + 1) * 1 / 3) {
          $scenes[i].style.opacity = '1'
        } else {
          $scenes[i].style.opacity = '0'
        }
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
      }
      if (scrolled >= 1 / 3 + 1 / 9 * 2 && scrolled < 1 / 3 + 1 / 9 * 3) {
        let p = (scrolled - 1 / 3 - 1 / 9 * 2) * 9
        $name.style.fontWeight = (100 + Math.sqrt(1 - Math.pow(p - 1, 2)) * 300).toString()
        $say.style.fontWeight = (100 + Math.sqrt(1 - Math.pow(p - 1, 2)) * 200).toString()
      } else if (scrolled >= 1 / 3 + 1 / 9 * 3) {
        $name.style.fontWeight = '400'
        $say.style.fontWeight = '300'
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
  transition: 1s;
  height: 100vh;
  width: 100%;
  position: fixed;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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
}
.name,
.say {
  font-weight: 100;
  transform: translateY(100%);
  opacity: 0;
}
</style>
