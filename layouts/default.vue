<style lang="postcss" module="css">
.container {
  background-color: var(--color-bg);
  min-height: 100vh;
  & .body {
    min-height: calc(100vh - var(--height-header) - var(--height-footer));
  }
}
</style>
<template>
  <div :class="css.container">
    <Menu />
    <div :class="css.body">
      <nuxt />
    </div>
    <Bottom />
    <Tools />
  </div>
</template>
<script>
import Menu from '@/components/Menu'
import Bottom from '@/components/Bottom'
export default {
  components: {
    Menu,
    Bottom
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: var(--color-font-1);
}

*,
*:before,
*:after {
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}

ul,
ol {
  list-style: none;
}
</style>
