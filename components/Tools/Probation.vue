<style lang="postcss" module="css">
.pro {
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
      <Wrapper class={this.css.pro} onClick={e => {}}>
        <div>图标</div>
        <div>免费试用</div>
      </Wrapper>
    )
  }
}
</script>