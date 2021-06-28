import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => (
      <ElDropdown>
        {{
          default: () => (
            <span class='el-dropdown-link'>
              下拉菜单<i class='el-icon-arrow-down el-icon--right'></i>
            </span>
          ),
          dropdown: () => (
            <ElDropdownMenu>
              <ElDropdownItem>黄金糕</ElDropdownItem>
              <ElDropdownItem>狮子头</ElDropdownItem>
              <ElDropdownItem>螺蛳粉</ElDropdownItem>
              <ElDropdownItem disabled>双皮奶</ElDropdownItem>
              <ElDropdownItem divided>蚵仔煎</ElDropdownItem>
            </ElDropdownMenu>
          ),
        }}
      </ElDropdown>
    )
  },
})
