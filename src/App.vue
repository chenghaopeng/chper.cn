<template>
  <BackgroundImage></BackgroundImage>
  <router-view/>
</template>

<style lang="less">
* {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
body {
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@keyframes blurin {
  0% { filter: blur(4px); }
  100% { filter: blur(0px); }
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  filter: blur(4px);
  overflow: hidden;
  pointer-events: none;
}
.fade-enter-active {
  animation-name: blurin;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}
.fade-leave-active {
  filter: blur(4px);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.2);
  box-shadow: 0px 0px 128px 0px fade(black, 32);
  border-radius: 50%;
}
.message {
  position: fixed;
  top: 10vmin;
  left: 50%;
  padding: 8px 16px;
  max-width: 90vw;
  transform: translateX(-50%);
  background-color: fade(#eeeeee, 32);
  backdrop-filter: blur(8px) saturate(200%) brightness(120%);
  line-height: 1.5em;
  border-radius: 8px;
  box-shadow: 0px 0px 32px 0px fade(black, 16);
}
.fullscreen {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(64px);
}
</style>
