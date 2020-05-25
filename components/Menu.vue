<style module="css" lang="postcss">
.fr {
  float: right;
}
.header {
  background-color: white;
  height: var(--height-header);
  line-height: var(--height-header);
  & .nav {
    width: var(--width-page);
    margin: 0 auto;
    & .logo_cont {
      display: inline-block;
      line-height: 1;
      margin-right: 80px;
      & > a {
        vertical-align: middle;
        & img {
          height: 46px;
          vertical-align: middle;
        }
      }
    }
    & > a {
      padding: 0 30px;
      color: var(--color-font-1);
      text-decoration: none;
      &:global(.link_active) {
        color: var(--color-primary);
      }
    }
  }
}

.cont {
  background-color: white;
  @supports (backdrop-filter: blur(10px)) {
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
  }
  border-radius: var(--radius);
  padding: 20px;
  width: 280px;
  line-height: 1em;
}
</style>
<template>
  <header :class="css.header">
    <nav :class="css.nav">
      <div :class="css.logo_cont">
        <a href="/">
          <img src="/img/logo.png" />
        </a>
      </div>
      <nuxt-link v-for="item in nav" :to="item.path" :key="item.name" exact>{{
        item.name
      }}</nuxt-link>
      <span :class="css.fr">
        <!-- <Button
          type="primary"
          tag="a"
          href="http://erp2.zolerp.cn/login.html"
          target="_blank"
          >登录
        </Button> -->
        <Button @click="onLogin" v-if="token == ''">登录</Button>
        <div v-else>
          {{ info.userName }}，欢迎！<span>&#8194;</span
          ><a href="javascript:;" @click="onLogout">退出</a>
        </div>
      </span>
    </nav>
    <Drawer :show.sync="showDrawer">
      <div :class="css.cont">
        <Input v-model.trim="info.userName" placeholder="用户名" />
        <div>&#12288;</div>
        <Input v-model.trim="info.userPwd" placeholder="密码" type="password" />
        <div>&#12288;</div>
        <Button tag="div" type="primary" block @click="toLogin">登录</Button>
      </div>
    </Drawer>
  </header>
</template>
<script>
export default {
  data() {
    return {
      title: '',
      showDrawer: false,
      info: {
        userName: 'zcadmin',
        userPwd: 'abc111'
      }
    }
  },
  computed: {
    token() {
      const t = this.$store.state.token
      console.log(t)
      return t
    },
    nav: () => [
      {
        name: '首页',
        path: '/'
      },
      {
        name: '功能说明',
        path: '/intro/description'
      },
      {
        name: '产品购买',
        path: '/buy'
      },
      {
        name: '更多服务',
        path: '/more'
      },
      {
        name: '关于我们',
        path: '/about'
      }
    ]
  },
  fetch({ app, store }) {
    const token = store.state.token
    console.log('ttt', token)
  },
  methods: {
    onLogin() {
      this.showDrawer = true
    },
    async toLogin() {
      this.$nuxt.$loading.start()
      const t = await this.$axios.post('/api/user/login', this.info)
      const { token } = t || {}
      // this.$axios.setToken(token) //这个到底怎么用？有什么用？
      this.$store.dispatch('SET_TOKEN', token)
      this.$nuxt.$loading.finish()
    },
    onLogout() {
      // this.token = ''
      // this.$axios.setToken(false)
      this.$store.dispatch('SET_TOKEN', '')
    }
  },
  mounted() {
    // console.log(this.$store)
  }
}
</script>
