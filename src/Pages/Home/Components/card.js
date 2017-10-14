import React, {Component} from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Dialog from 'material-ui/Dialog'
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
          title='Dialog With Actions'
          // actions={actions}
          contentStyle={{display: 'flex', width: '90vmax', justifyContent: ' center'}}
          modal={false}
          open={stateOfFire.active}
          onRequestClose={this.handleOpen}
        >
          <br />
          <Card style={{ width: '900px', height: '500px' }}>
            <CardHeader
              title='Without Avatar'
              subtitle='Subtitle'
              actAsExpander
              showExpandableButton
            />
            <CardText expandable>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </Dialog>

      ) : (
        <Card style={{ width: '600px', height: '400px', margin: '40px,40px,40px,40px' }} onExpandChange={this.handleOpen} >
          <CardHeader
            title={stateOfFire.title}
            actAsExpander
            showExpandableButton
          />
          <CardText >
            <ul>
              {
                stateOfFire.notes
                  ? stateOfFire.notes.map((element, key) => (<li key={key}>{element.note.title}</li>))
                  : this.state.gone ? (<div>Notes not found</div>)
                    : (<CircularProgress size={80} thickness={5} />)

              }
            </ul>
          </CardText>
        </Card>
      )
    )
  }
}

export default CardComponent
