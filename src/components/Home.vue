<template>
  <div class="home">
    <div id="back1" class="back">
      <div class="blur"></div>
    </div>
    <div id="back2" class="back">
      <div class="blur"></div>
    </div>
    <svg id="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 50 50"><defs><clipPath id="_clipPath_AsJKgimMsSXFeT2uLS5Tj3jwSrgqg3eC"><rect width="50" height="50"/></clipPath></defs><g clip-path="url(#_clipPath_AsJKgimMsSXFeT2uLS5Tj3jwSrgqg3eC)"><path d=" M 15.546 7.5 L 4.793 7.5 L 14.896 25 L 25 42.5 L 35.104 25 L 45.207 7.5 L 34.454 7.5 L 29.727 15.688 L 25 23.875 L 20.273 15.687 L 15.546 7.5 Z " fill-rule="evenodd" fill="rgb(235,235,235)"/></g></svg>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
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
      if (scrolled >= 0.7) {
        $arrow.style.opacity = '0'
      } else {
        $arrow.style.opacity = '0.5'
      }
    }, true)
  }
}
</script>

<style scoped>
.home {
  height: 300vh;
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
  animation: dropdown 5s cubic-bezier(0.34, 1.56, 0.64, 1) 2s infinite;
  transition: 3s;
}
@keyframes dropdown {
  0% { transform: translateY(0); opacity: 0.5; }
  30% { transform: translateY(20px); opacity: 0.1; }
  100% { transform: translateY(0); opacity: 0.5; }
}
</style>
