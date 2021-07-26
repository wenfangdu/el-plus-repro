import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const modelValue = ref(null)

    return () => (
      <ElRadioGroup modelValue={modelValue.value}>
        {/* 👇 selectable */}
        <ElRadioButton label='foo' />
        {/* 👇 not selectable */}
        <ElRadio label='bar' />
      </ElRadioGroup>
    )
  },
})
