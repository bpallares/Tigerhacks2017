import React, {Component} from 'react'
import {Card, CardHeader, CardText, CardTitle} from 'material-ui/Card'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'

import CircularProgress from 'material-ui/CircularProgress'

class CardComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gone: false
    }
  }
  handleOpen = () => {
    console.log('helo')
    this.setState({active: !this.state.active})
  }
  componentDidMount () {
    setInterval(() => this.setState({gone: true}), 5000)
  }
  render () {
    let {stateOfFire} = this.props
    console.log(stateOfFire)
    return (
      stateOfFire.active ? (
        <Dialog
          title={stateOfFire.title}
          // actions={actions}
          contentStyle={{display: 'flex', width: '90vmax', justifyContent: ' center'}}
          modal={false}
          open={stateOfFire.active}
          onRequestClose={this.handleOpen}
        >
          <br />
          <Card style={{ width: '900px', height: '500px', display: 'flex', alignItems: 'center', overflowY: 'scroll' }}>

            {
              stateOfFire.notes
                ? stateOfFire.notes.map((element, key) => (
                  <Card key={key} style={{width: '350px', display: 'flex', marginTop: '5%' }} >
                    <CardTitle >{element.note.title}
                      <CardText>
                        <TextField defaultValue={element.note.body} multiLine />
                      </CardText>
                    </CardTitle>
                  </Card>)
                )
                : this.state.gone
                  ? (<div>text</div>)
                  : (<CircularProgress size={80} thickness={5} />)

            }

          </Card>
        </Dialog>

      ) : (
        <Card style={{ width: '600px', height: '400px', margin: '40px,40px,40px,40px' }} onExpandChange={this.handleOpen} >
          <CardHeader
            title={stateOfFire.title}
            actAsExpander
            showExpandableButton
          />
          <Card>
            <CardText>
              <ul>
                {
                  stateOfFire.notes
                    ? stateOfFire.notes.map((element, key) => (<li key={key}>{element.note.title}</li>))
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
