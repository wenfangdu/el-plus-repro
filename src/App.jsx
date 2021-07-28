import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => (
      <ElTable>
        <ElTableColumn>
          {{
            // 👇 default slot is called even if there's no data
            default: () => console.log('called'),
          }}
        </ElTableColumn>
      </ElTable>
    )
  },
})
