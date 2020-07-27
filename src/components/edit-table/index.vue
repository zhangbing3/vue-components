<template>
  <el-table class="edit-table" :data="data">
    <el-table-column type="index" label="序号" width="70"> </el-table-column>
    <el-table-column
      v-for="item in columns"
      :key="item.name"
      :property="item.name"
      :label="item.label"
      :width="item.width"
    >
      <template slot-scope="props">
        <edit-form-item
          :editable="editable"
          :name="item.name"
          :component="item.component"
          :attrs="item.attrs"
          v-model="props.row[item.name]"
        />
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import EditFormItem from '../common/edit-form-item'
import { EDIT_TYPE } from '../common/enums'

@Component({ components: { EditFormItem } })
export default class EditTable extends Vue {
  @Prop({ type: Array, default: () => [] }) private data!: any[]
  @Prop({ type: Array, default: () => [] }) private columns!: any[]
  @Prop({ type: Boolean, default: false }) private editable!: boolean

  getEditTableData () {
    return this.data
  }
}
</script>
<style lang="scss" scoped>
.edit-table {
  ::v-deep .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    max-width: 100%;
  }
}
</style>
