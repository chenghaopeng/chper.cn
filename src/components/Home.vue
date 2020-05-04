<template>
  <div class="home">
    <div id="back1" class="back">
      <div class="blur"></div>
    </div>
    <div id="back2" class="back">
      <div class="blur"></div>
    </div>
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
</style>
