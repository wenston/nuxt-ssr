<script>
export default {
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'xl' //l,xl,xxl,xxxl,xxxxl
    },
    disabled: Boolean,
    block: Boolean
  },
  methods: {},
  render() {
    const { $props, $slots, $listeners, $attrs, css } = this
    const p = {
      attrs: {
        tabindex: 0,
        ...$attrs
      },
      class: {
        [css.btn]: true,
        [css[$props.type]]: true,
        [css[$props.size]]: true,
        [css.disabled]: $props.disabled,
        [css.block]: this.block
      },
      props: {
        ...$props
      },
      on: {
        click: e => {
          if (this.disabled) {
            return
          }
          this.$emit('click', e)
        },
        ...$listeners
      }
    }
    return <this.tag {...p}>{$slots.default}</this.tag>
  }
}
</script>
<style lang="postcss" module="css">
.btn {
  border: 1px solid var(--color-font-2);
  border-radius: var(--radius);
  outline: none;
  cursor: pointer;
  font-size: 14px;
  background-color: white;
  padding: 0 1.2em;
  transition: 0.35s;
  display: inline-flex;
  text-align: center;
  text-decoration: none;
  &.default {
    color: var(--color-font-2);
    &:hover {
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
    }
    &:focus {
      border-color: var(--color-primary);
      color: var(--color-primary);
    }
    &:active {
      background-color: var(--color-primary-light-3);
    }
    &:link {
      color: var(--color-font-2);
    }
  }
  &.primary {
    color: white;
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    &:hover {
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
      background-color: var(--color-primary-light-1);
      border-color: var(--color-primary-light-1);
    }
    &:focus {
      border-color: var(--color-primary-light-1);
    }
    &:active {
      background-color: var(--color-primary-light-1);
    }
    &:link {
      color: white;
    }
  }
  &.xl {
    height: 36px;
    line-height: 34px;
  }
  &.xxl {
    height: 45px;
    line-height: 43px;
  }
  &.xxxl {
    line-height: 56px;
    height: 54px;
  }
  &.disabled {
    cursor: not-allowed;
  }
  &.block {
    display: block;
  }
}
</style>
