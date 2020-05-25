<style module="css" lang="postcss">
.footer {
  background-color: var(--color-footer);
  height: var(--height-footer);
  padding: 40px 0;
  & .f_container {
    margin: 0 auto;
    width: var(--width-page);
    & .friend {
      position: relative;
      padding-top: 20px;
      & a {
        color: var(--color-font-3);
        text-decoration: none;
        &:hover {
          color: rgba(255, 255, 255, 0.8);
        }
        & + a {
          margin-left: 20px;
        }
      }
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.15);
      }
    }
  }
}
</style>
<template>
  <div :class="css.footer">
    <div :class="css.f_container">
      <div :class="css.friend">
        <a
          target="_blank"
          v-for="item in friends"
          :key="item.url"
          :href="item.url"
          >{{ item.name }}</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    friends: () => [
      {
        name: '中关村在线',
        url: 'http://www.zol.com.cn/'
      },
      {
        name: 'Z商城',
        url: 'http://www.zol.com/'
      }
    ]
  }
}
</script>
