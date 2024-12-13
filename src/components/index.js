//components组件全局注册  插件方式
import ImageView from './imageView/index.vue'
import Sku from './XtxSku/index.vue'

export const componentPlugin = {
    install(app){
        app.component('ImageView',ImageView)
        app.component('XtxSku',Sku)
    }
}