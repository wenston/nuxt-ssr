<script>
import Attention from './Attention'
import GoTop from './GoTop'
import Probation from './Probation'
export default {
  components: {
    Attention,
    GoTop,
    Probation
  },
  render() {
    return (
      <div class={this.css.tools}>
        <Probation />
        <Attention />
        <GoTop />
      </div>
    )
  }
}
</script>
<style lang="postcss" module="css">
.tools {
  position: fixed;
  right: 0;
  bottom: 200px;
  z-index: 100;
  box-shadow: 0 0px 25px rgba(100, 100, 100, 0.5);
}
</style>