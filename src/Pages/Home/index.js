import React, {Component} from 'react'
import Card from '../Home/Components/card'
import withSideNav from '../../hoc/withSideNav'
import {db} from '../../fire'

var starCountRef = db.ref('cards')
starCountRef.on('value', function (snapshot) {
  snapshot.forEach((child) => {
    // console.log(child.val())
  })
})

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  async componentDidMount () {
    await db.ref(`cards/card01`).once('value').then((snapshot) => {
      let ref4 = snapshot.child('title').val()
      // this.setState({ref4})
    })

    await db.ref('cards').on('value', (snapshot) => {
      // create the basic state
      // this.setState({cards})
      this.state = {
        cards: ['']
      }
      const newArray = this.state.cards.slice(1)
      snapshot.forEach((child) => {
        let arrayDone = child.val()
        newArray.push(arrayDone)
        this.setState({cards: newArray})
      })
      console.log(this.state.cards)
    })
  }
  render () {
    let {ref4, ref5} = this.state
    return (
      <div style={{display: 'flex', height: '100%', marginLeft: '30px', flexWrap: 'wrap', justifyContent: 'space-evenly', marginTop: '20px'}}>

        { this.state.cards ? (this.state.cards.map((elements, key) => (<Card key={key} />))) : (<span>Loading</span>)
        }
      </div>

    )
  }
}

export default withSideNav(Home)
