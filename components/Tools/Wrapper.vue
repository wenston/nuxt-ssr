<style lang="postcss" module="css">
.wra {
  display: flex;
  width: var(--width-tools);
  height: var(--height-tools);
  line-height: 1.5;
  color: white;
  background-color: var(--color-primary);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  font-size: 12px;
  cursor: default;
  transition: var(--transition);
  position: relative;
  & + .wra {
    margin-top: 1px;
  }
}
</style>
<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  methods: {},
  render() {
    const { css } = this
    const p = {
      class: [[css.wra]],
      on: this.$listeners
    }
    return <this.tag {...p}>{this.$slots.default}</this.tag>
  }
}
</script>