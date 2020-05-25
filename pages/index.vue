<template>
  <div :class="css.index">
    <Banner />
  </div>
</template>

<script>
import Banner from '@/components/HomeBanner'
export default {
  components: { Banner },
  data() {
    return {
      abc: ''
    }
  }
  //只在直接进入此页面时起作用，从其他页面链接过来不起作用，为什么？
  // asyncData() {
  //   if (process.server) {
  //     const fs = require('fs')
  //     return new Promise((resolve, reject) => {
  //       fs.readdir('static/img/banner', 'utf8', (err, files) => {
  //         if (err) {
  //           reject(err)
  //         }
  //         resolve({ list: files.map(f => `/img/banner/${f}`) })
  //       })
  //     })
  //   }
  // }
}
</script>

<style module="css" lang="postcss">
.index {
}
</style>
