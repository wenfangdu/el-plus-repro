import { createApp, defineComponent } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import { useLocale, useLocaleProps } from 'element-plus'

const ConfigProvider = defineComponent({
  props: useLocaleProps,
  setup(props, { slots }) {
    useLocale()

    return () => slots.default()
  },
})

const app = createApp(
  <ConfigProvider>
    <App />
  </ConfigProvider>,
)

installElementPlus(app)

app.mount('#app')
