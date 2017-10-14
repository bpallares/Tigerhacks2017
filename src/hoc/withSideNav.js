import React, {Component} from 'react'
import SideNav from '../SideNav'

export default ComposeComponent => {
  return class withSideNav extends Component {
    render () {
      return (
        <div style={{display: 'flex', height: '100vh'}} >
          <SideNav style={{position: 'relative'}} />
          <ComposeComponent {...this.props} />
        </div>
      )
    }
  }
}
