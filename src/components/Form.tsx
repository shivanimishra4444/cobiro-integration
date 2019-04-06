import * as React from 'react'
import { createData } from '../model/Model'

const fields = {
  WEBSITE: 'website',
  LANG_CODE: 'language_code',
  CURRENCY: 'currency',
  NAME: 'name',
  PLATFORM: 'platform'
}

interface IState {
  website?: string
  language_code?: string
  currency?: string
  name?: string
  platform?: string
}

export default class Form extends React.Component<null, IState> {
  private formRef: any
  constructor(props) {
    super(props)
    this.state = { website: '', language_code: '', currency: '', name: '', platform: '' }
  }

  handleChange = (event: React.FormEvent<EventTarget>): void => {
    let target = event.target as HTMLInputElement
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = event => {
    const { website, currency, name, language_code, platform } = this.state
    const json = {
      currency,
      website,
      name,
      language_code,
      platform
    }
    createData(json)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={ref => (this.formRef = ref)}>
        <label>
          {fields.WEBSITE}:
          <input type="text" value={this.state.website} name={fields.WEBSITE} onChange={this.handleChange} />
        </label>
        <label>
          {fields.LANG_CODE}:
          <input type="text" value={this.state.language_code} name={fields.LANG_CODE} onChange={this.handleChange} />
        </label>
        <label>
          {fields.CURRENCY}:
          <input type="text" value={this.state.currency} name={fields.CURRENCY} onChange={this.handleChange} />
        </label>
        <label>
          {fields.NAME}:
          <input type="text" value={this.state.name} name={fields.NAME} onChange={this.handleChange} />
        </label>
        <label>
          {fields.PLATFORM}:
          <input type="text" value={this.state.platform} name={fields.PLATFORM} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
