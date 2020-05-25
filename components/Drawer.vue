<template>
  <transition
    :enter-class="css['t-enter']"
    :enter-active-class="css['t-enter-active']"
    :enter-to-class="css['t-enter-to']"
    :leave-class="css['t-leave']"
    :leave-active-class="css['t-leave-active']"
    :leave-to-class="css['t-leave-to']"
    @before-leave="beforeLeave"
    @before-enter="beforeEnter"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div
      v-if="visible"
      :class="[
        css.popup,
        { [css.popupCenter]: direction.toLowerCase() === 'center' }
      ]"
      @click="close"
    >
      <div ref="cont" @click.stop>
        <span :class="css.close" @click.stop="close" v-if="hasCloseBtn"
          >&times;</span
        >
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: Boolean,
    hasCloseBtn: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'center'
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    noAnimate: Boolean
  },
  data() {
    return {
      visible: this.show,
      bodyOverflow: ''
    }
  },
  methods: {
    beforeEnter() {
      // this.bodyOverflow = window.getComputedStyle(document.body, null)[
      //   'overflow'
      // ]
      if (!this.noAnimate) this.$refs.cont.className = this.css[this.direction]
    },
    beforeLeave() {
      if (!this.noAnimate)
        this.$refs.cont.className = this.css[this.direction + 'r']
    },
    afterEnter() {
      // document.body.style.overflow = 'hidden'
    },
    afterLeave() {
      // document.body.style.overflow = this.bodyOverflow
    },
    close() {
      this.visible = false
      this.$emit('after-close')
    }
  },
  watch: {
    show(v, oldV) {
      this.visible = v
    },
    visible(v, oldV) {
      this.$emit('update:show', v)
    }
  }
}
</script>
<style module="css" lang="postcss">
.popup {
  flex: none;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 999;
  display: flex;
  &.popupCenter {
    align-items: center;
    justify-content: center;
  }
  & .bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    max-height: 80%;
    overflow-x: hidden;
    background-color: white;
    animation: trbottom 0.3s ease-out;
  }
  & .bottomr {
    @extend .bottom;
    transition: 0.3s;
    transform: translate(0, 100%);
  }
  & .right {
    position: absolute;
    right: 0;
    height: 100%;
    background-color: white;
    overflow-x: hidden;
    animation: trright 0.3s ease-out;
  }
  & .rightr {
    @extend .right;
    transition: 0.3s;
    transform: translate(100%, 0);
  }
  & .left {
    position: absolute;
    left: 0;
    height: 100%;
    background-color: white;
    overflow-x: hidden;
    animation: trleft 0.3s ease-out;
  }
  & .leftr {
    @extend .left;
    transition: 0.3s;
    transform: translate(-100%, 0);
  }
  & .top {
    position: absolute;
    top: 0;
    width: 100%;
    background-color: white;
    animation: trtop 0.3s ease-out;
  }
  & .topr {
    @extend .top;
    transition: 0.3s;
    transform: translate(0, -100%);
  }
  & .center {
    animation: trcenter 0.3s ease-out;
  }
  & .centerr {
    @extend .center;
    transition: 0.3s;
    transform: scale(0.5, 0.5);
    opacity: 0;
  }
}

.t-enter,
.t-leave-to {
  background-color: rgba(0, 0, 0, 0);
}
.t-enter-to,
.t-leave {
  background-color: rgba(0, 0, 0, 0.1);
}
.t-enter-active {
  transition: 0.3s;
}
.t-leave-active {
  transition: 0.3s;
}

.close {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d6d3d6;
  text-align: center;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  overflow: hidden;
  user-select: none;
  font-size: 20px;
  z-index: 100000;
}

@keyframes trbottom {
  from {
    transform: translate(0, 100%);
    opacity: 0;
  }
  to {
    transform: translate(0, 0);
    opacity: 1;
  }
}

@keyframes trright {
  from {
    transform: translate(100%, 0);
    opacity: 0;
  }
  to {
    transform: translate(0, 0);
    opacity: 1;
  }
}

@keyframes trleft {
  from {
    transform: translate(-100%, 0);
    opacity: 0;
  }
  to {
    transform: translate(0, 0);
    opacity: 1;
  }
}

@keyframes trtop {
  from {
    transform: translate(0, -100%);
    opacity: 0;
  }
  to {
    transform: translate(0, 0);
    opacity: 1;
  }
}

@keyframes trcenter {
  from {
    transform: scale(0.5, 0.5);
    opacity: 0;
  }
  to {
    transform: scale(1, 1);
    opacity: 1;
  }
}
</style>
