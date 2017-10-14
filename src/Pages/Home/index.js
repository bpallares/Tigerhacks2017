import React, {Component} from 'react'
import Card from '../Home/Components/card'
import withSideNav from '../../hoc/withSideNav'

class Home extends Component {
  render () {
    return (
      <div style={{display: 'flex', height: '100%', marginLeft: '30px', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>

    )
  }
}

export default withSideNav(Home)
