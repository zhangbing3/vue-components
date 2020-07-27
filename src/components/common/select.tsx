import { Component, Emit, Vue, Prop } from 'vue-property-decorator'

@Component
export default class EditTableCell extends Vue {
  @Prop({ type: Array }) private options!: any[]
  @Prop() private value: any
  @Prop({type: Boolean, default: false}) private editeable!: boolean

  @Emit('input')
  handleInput (val: any) {
    return val
  }

  render() {
    const { value, options } = this
    return (
      <el-select value={value} onInput={this.handleInput}>
        {options.map(({value, label}) => (
          <el-option key={value} value={value} label={label}></el-option>
        ))}
      </el-select>
    )
  }
}
