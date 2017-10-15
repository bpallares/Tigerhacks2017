import React, {Component} from 'react'
import {Card, CardHeader, CardText, CardTitle} from 'material-ui/Card'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import fire from '../../../fire'

import CircularProgress from 'material-ui/CircularProgress'

let saver
class CardComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gone: false,
      active: false
    }
  }
  handleOpen = () => {
    // console.log('helo')
    fire.database().ref('projects/' + saver.key).update({
      active: !this.state.active
    }).then(() => {
      this.setState({active: !this.state.active})
    }
    )
    // console.log(this.state.active)
  }
  componentWillMount () {
    let {stateOfFire} = this.props
    saver = stateOfFire
  }
  componentDidMount () {
    setTimeout(() => this.setState({gone: true}), 5000)
  }
  render () {
    let {stateOfFire} = this.props
    // console.log(saver.notes)
    return (
      this.state.active ? (
        <Dialog
          title={stateOfFire.title}
          // actions={actions}
          contentStyle={{display: 'flex', width: '90vmax', justifyContent: ' center'}}
          modal={false}
          open={this.state.active}
          onRequestClose={this.handleOpen}
        >
          <br />
          <Card style={{ width: '900px', height: '500px', display: 'flex', overflowY: 'scroll' }}>

            <CardText>
              { stateOfFire.notes
                ? stateOfFire.notes.map((element, key) => (
                  <span>
                    <h1>Note</h1>
                    <CardTitle>{<h4>Title</h4>}..{element.title}</CardTitle>
                    <CardText>{<h4>Body</h4>}{element.body}</CardText>
                  </span>
                ))
                : this.state.gone ? (<div>There are no notes yet</div>)
                  : (<CircularProgress size={80} thickness={5} />)
              }
            </CardText>

          </Card>
        </Dialog>

      ) : (
        <Card style={{ width: '600px', height: '400px', margin: '40px,40px,40px,40px', marginRight: '40px', marginBottom: '30px' }} onExpandChange={this.handleOpen} >
          <CardHeader
            title={stateOfFire.title}
            actAsExpander
          />
          <Card>
            <CardText>
              <h1>Notes</h1>
              <ul>
                {
                  /*
                  stateOfFire.notes
                    ? stateOfFire.notes.map((element, key) => (<li key={key}>{element.note.title}</li>))
                    : this.state.gone ? (<div>There are no notes yet</div>)
                      : (<CircularProgress size={80} thickness={5} />)
                      */
                  /*
                  saver.notes
                    ? Object.keys(saver.notes).map((item, i) => console.log(saver.notes)
                    )
                    : (<h1>ww</h1>) */

                  // getItem()
                  // console.log(stateOfFire.notes[0].body)
                  stateOfFire.notes
                    ? stateOfFire.notes.map((element, key) => (<li key={key}>{element.body}</li>))
                    : this.state.gone ? (<div>There are no notes yet</div>)
                      : (<CircularProgress size={80} thickness={5} />)

                }
              </ul>
            </CardText>
          </Card>
        </Card>
      )
    )
  }
}

export default CardComponent
