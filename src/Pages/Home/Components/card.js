import React, {Component} from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

class CardComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }
  handleOpen = () => {
    console.log('helo')
    this.setState({open: !this.state.open})
  }
  render () {
    return (
      this.state.open ? (
        <Card style={{ width: '500px', height: '300px' }} onExpandChange={this.handleOpen}>
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
      ) : (
        <Card style={{ width: '300px', height: '300px' }} onExpandChange={this.handleOpen}>
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
      )
    )
  }
}

export default CardComponent
