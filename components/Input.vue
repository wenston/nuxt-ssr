<script>
export default {
  props: {
    value: [String, Number]
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: e => {
          this.$emit('input', e.target.value)
        }
      }
    }
  },
  data() {
    return {
      v: this.value
    }
  },
  watch: {
    value(v) {
      this.v = v
    }
  },
  render() {
    const input_p = {
      class: [[this.css.input]],
      attrs: this.$attrs,
      on: this.listeners
    }
    return (
      <div class={this.css.input_wrapper}>
        <input value={this.value} {...input_p} />
      </div>
    )
  }
}
</script>
<style lang="postcss" module="css">
.input_wrapper {
  & .input {
    display: block;
    width: 100%;
    border: 1px solid var(--color-input-border);
    height: 32px;
    line-height: 30px;
    border-radius: var(--radius);
    padding: 0 15px;
    &::placeholder {
      color: var(--color-font-4);
    }
  }
}
</style>
