<style lang="postcss" module="css">
.go {
  cursor: pointer;
}
</style>
<script>
import Wrapper from './Wrapper'
export default {
  components: { Wrapper },
  methods: {},
  render() {
    return (
      <Wrapper
        class={this.css.go}
        onClick={e => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }}
      >
        <div>图标</div>
        <div>回到顶部</div>
      </Wrapper>
    )
  }
}
</script>