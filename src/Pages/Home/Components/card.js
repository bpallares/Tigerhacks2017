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
    console.log('helo')
    fire.database().ref('projects/' + saver.key).update({
      active: !this.state.active
    }).then(() => {
      this.setState({active: !this.state.active})
    }
    )
    console.log(this.state.active)
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
    console.log(saver.notes)
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
          <Card style={{ width: '900px', height: '500px', display: 'flex', alignItems: 'center', overflowY: 'scroll' }}>

            <CardText>
              <CardTitle>Note 1</CardTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sem at ipsum consequat consequat vel ac risus. Integer aliquet maximus sem, sed porttitor enim malesuada a. Aenean sit amet diam vel tellus eleifend suscipit. Fusce vitae lacus sit amet purus mattis vulputate sed a leo. Sed tincidunt diam lorem. Suspendisse euismod sodales tortor, sit amet luctus lorem aliquam id. Curabitur tincidunt porttitor augue eget pretium. Cras eget lectus vel enim commodo condimentum at eu tortor. Nunc venenatis ante felis, in fermentum tortor consectetur elementum. Nunc aliquam convallis tortor eget eleifend. Sed id laoreet nisl. Nam in rutrum quam, ut imperdiet risus. Vivamus ac sodales dolor.
            </CardText>
            <CardText>
              <CardTitle>Note 2</CardTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sem at ipsum consequat consequat vel ac risus. Integer aliquet maximus sem, sed porttitor enim malesuada a. Aenean sit amet diam vel tellus eleifend suscipit. Fusce vitae lacus sit amet purus mattis vulputate sed a leo. Sed tincidunt diam lorem. Suspendisse euismod sodales tortor, sit amet luctus lorem aliquam id. Curabitur tincidunt porttitor augue eget pretium. Cras eget lectus vel enim commodo condimentum at eu tortor. Nunc venenatis ante felis, in fermentum tortor consectetur elementum. Nunc aliquam convallis tortor eget eleifend. Sed id laoreet nisl. Nam in rutrum quam, ut imperdiet risus. Vivamus ac sodales dolor.
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
                }
              </ul>
              <ul>
                <li>Note 1 </li>
                <li>Note 2 </li>
              </ul>
            </CardText>
          </Card>
        </Card>
      )
    )
  }
}

export default CardComponent
