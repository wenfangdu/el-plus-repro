<template>
  <el-select
    v-model="selected"
    value-key="price"
    :placeholder="selected ? '' : 'Please Select'"
    clearable
  >
    <el-option v-for="item in options" :value="item">
      <div class="option-grid">
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
        <div class="price">{{ item.price }}</div>
      </div>
    </el-option>

    <template v-if="selected" #prefix>
      <div class="option-grid prefix">
        <div class="title">{{ selected.title }}</div>
        <div class="desc">{{ selected.desc }}</div>
        <div class="price">{{ selected.price }}</div>
      </div>
    </template>
  </el-select>
</template>

<script setup>
  import { ref } from 'vue'

  const options = Array.from({ length: 3 }, (_, i) => {
    const n = i + 1

    return {
      title: `Title ${n}`,
      desc: `Description ${n}`,
      price: `Price ${n}`,
    }
  })

  const selected = ref(null)
</script>

<style lang="scss">
  .el-select-dropdown__item {
    height: max-content;
  }

  .option-grid {
    display: grid;
    grid-template-areas:
      'title price'
      'desc  price';
    line-height: 1.2;
    .title,
    .desc {
      font-size: 14px;
    }
    .title,
    .price {
      font-weight: bold;
    }
    .title {
      grid-area: title;
    }
    .desc {
      grid-area: desc;
    }
    .price {
      grid-area: price;
      justify-self: end;
      align-self: center;
    }
    &.prefix {
      width: 196px;
      color: var(--el-text-color-regular);
      .title,
      .desc {
        justify-self: start;
        padding-left: 20px;
      }
    }
    &:not(.prefix) {
      .title {
        padding-top: 4px;
      }
      .desc {
        padding-bottom: 4px;
      }
    }
  }
</style>
