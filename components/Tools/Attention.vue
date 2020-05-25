<style lang="postcss" module="css">
.qrcode {
  position: absolute;
  right: 100%;
  margin-right: 10px;
  top: -50%;
  width: 150px;
  &:after {
    content: '';
    position: absolute;
    right: -10px;
    top: 37%;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent transparent transparent white;
    border-width: 5px;
  }
  & img {
    width: 100%;
  }
}
</style>
<script>
import Wrapper from './Wrapper'
export default {
  components: { Wrapper },
  data() {
    return {
      show: false
    }
  },
  methods: {},
  render() {
    const on = {
      mouseenter: e => {
        this.show = true
      },
      mouseleave: e => {
        this.show = false
      }
    }
    return (
      <Wrapper {...{ on }}>
        <div>图标</div>
        <div>扫码关注</div>
        <transition name="slide-fade">
          <div class={this.css.qrcode} v-show={this.show}>
            <img src="/img/qrcode.jpg" />
          </div>
        </transition>
      </Wrapper>
    )
  }
}
</script>