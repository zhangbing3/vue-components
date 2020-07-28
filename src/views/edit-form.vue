<template>
  <div>
    <edit-form ref="editForm" :model="editForm" :fields="columns"></edit-form>
    <div style="text-align: center; margin: 10px auto;">
      <el-button type="primary" @click="handleEditFromClick">提交</el-button>
      <!-- <el-button type="primary" @click="toogleEditable">编辑模式</el-button> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Prop } from 'vue-property-decorator'
import { EDIT_TYPE, EditForm } from '@/components/edit-form/index'

@Component({
  components: {
    EditForm
  }
})
export default class Home extends Vue {
  private editable = false
  private editForm = {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }
  private columns = [
    {
      name: 'date',
      label: '日期',
      component: 'el-date-picker',
      width: '200',
      attrs: {
        // readonly: true
      }
    },
    {
      name: 'name',
      label: '姓名',
      width: '140',
      component: EDIT_TYPE.SELECT,
      attrs: {
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶',
            disabled: true
          }
        ]
      }
    },
    {
      name: 'address',
      label: '地址',
      component: 'el-input'
    }
  ]
  handleEditFromClick () {
    const form = (this.$refs.editForm as EditForm).getEditFrom()
    console.log('form', form)
  }
}
</script>
