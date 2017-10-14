import React, {Component} from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
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
          modal={false}
          open={stateOfFire.active}
          onRequestClose={this.handleOpen}
        >
          <br />
          <Card style={{ width: '500px', height: '300px' }}>
            <CardHeader
              title='Without Avatar'
              subtitle='Subtitle'
              actAsExpander
              showExpandableButton
            />
            <CardActions>
              <FlatButton label='Action1' />
              <FlatButton label='Action2' />
            </CardActions>
            <CardText expandable>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
          <Card style={{ width: '500px', height: '300px' }}>
            <CardHeader
              title='Without Avatar'
              subtitle='Subtitle'
              actAsExpander
              showExpandableButton
            />
            <CardActions>
              <FlatButton label='Action1' />
              <FlatButton label='Action2' />
            </CardActions>
            <CardText expandable>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </Dialog>

      ) : (
        <Card style={{ width: '300px', height: '300px' }} onExpandChange={this.handleOpen} >
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
