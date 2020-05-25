import Vue from 'vue'
import Tools from '@/components/Tools/Main'
import Button from '@/components/Button'
import Drawer from '@/components/Drawer'
import Input from '@/components/Input'
let AllComponents = {}
AllComponents.install = (Vue, opts) => {
  Vue.component('Tools', Tools)
  Vue.component('Button', Button)
  Vue.component('Drawer', Drawer)
  Vue.component('Input', Input)
}

Vue.use(AllComponents)
