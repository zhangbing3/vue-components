import { Component, Emit, Vue, Prop } from 'vue-property-decorator'
import Select from './select'
import { EDIT_TYPE } from './enums'

Vue.component(EDIT_TYPE.SELECT, Select)

@Component
export default class EditTableCell extends Vue {
  @Prop() private attrs!: object
  @Prop({ type: String }) private name!: string
  @Prop({ type: String }) private component!: string
  @Prop() private value: any
  @Prop({ type: Boolean, default: false }) private editable!: boolean

  @Emit('input')
  handleInput(val: any) {
    return val
  }

  render() {
    const { name, component, value, attrs, editable } = this
    const props = {
      name,
      value,
      ...attrs
    }
    const data = { is: editable ? component : 'label' }
    return (
      <component {...data} {...{ props }} onInput={this.handleInput}>
        {!editable && value}
      </component>
    )
  }
}
