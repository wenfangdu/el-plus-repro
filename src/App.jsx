import { defineComponent } from 'vue'

const Comp = defineComponent({
  setup(props, { slots }) {
    return () => (
      <div>
        Comp
        {slots.default()}
      </div>
    )
  },
})

export default defineComponent({
  setup() {
    return () => <Comp>{{ default: () => 1, ...{} }}</Comp>
  },
})
