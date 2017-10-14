import React, {Component} from 'react'
import Card from '../Home/Components/card'
import withSideNav from '../../hoc/withSideNav'
import {db} from '../../fire'
import CircularProgress from 'material-ui/CircularProgress'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  async componentWillMount () {
    await db.ref('projects/projects').on('value', (snapshot) => {
      // create the basic state
      this.state = {
        cards: null
      }
      const newArray = []
      snapshot.forEach((child) => {
        let arrayDone = child.val().project
        newArray.push(arrayDone)
        this.setState({cards: newArray})
      })
      // console.log(this.state.cards)
    })
  }

  render () {
    return (
      <div style={{display: 'flex', height: '100%', marginLeft: '30px', flexWrap: 'wrap', justifyContent: 'space-evenly', marginTop: '20px'}}>
        { this.state.cards
          ? (this.state.cards.map((elements, key) => (<Card key={key} stateOfFire={this.state.cards[key]} />)))
          : (<CircularProgress size={80} thickness={5} />)
        }
      </div>
    )
  }
}

export default withSideNav(Home)
