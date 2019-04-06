import * as React from 'react'
import { fetchData } from '../model/Model'

interface IState {
  sites: []
}
export default class SiteList extends React.Component<any, IState> {
  constructor(props) {
    super(props)
    this.state = { sites: [] }
  }
  public async componentDidMount() {
    const sites = await fetchData()
    this.setState({ sites })
  }
  public render() {
    if (!this.state.sites) {
      return
    }
    return (
      <div>
        {this.state.sites.map((site: { name: string }) => (
          <div>{site.name}</div>
        ))}
      </div>
    )
  }
}
