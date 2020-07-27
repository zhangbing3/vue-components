<template>
  <el-form class="edit-form" :model="model" label-width="80px">
    <el-form-item
      v-for="item in fields"
      :key="item.name"
      :prop="item.name"
      :label="item.label"
      :rules="item.rules"
    >
      <edit-form-item
        :editable="editable"
        :name="item.name"
        :component="item.component"
        :attrs="item.attrs"
        v-model="model[item.name]"
      ></edit-form-item>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import EditFormItem from '../common/edit-form-item'
import { EDIT_TYPE } from '../common/enums'

@Component({ components: { EditFormItem } })
export default class EditTable extends Vue {
  @Prop({ type: Object, default: () => [] }) private model!: any
  @Prop({ type: Array, default: () => [] }) private fields!: any[]
  @Prop({ type: Boolean, default: true }) private editable!: boolean

  getEditFromData() {
    return this.model
  }
}
</script>
<style lang="scss" scoped>
.edit-form {
  // ::v-deep .el-date-editor.el-input,
  // .el-date-editor.el-input__inner {
  //   max-width: 100%;
  // }
}
</style>
