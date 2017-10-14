
import React from 'react'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

const style = {
  // margin: '16px 32px 16px 0',
  backgroundColor: 'rgba(70, 87, 93, 1)',
  height: '100%',
  width: '200px',
  color: 'white'
}

const MenuExampleSimple = () => (
  <Paper style={style}>
    <Menu style={style}>
      <MenuItem primaryText='Note Cards' style={{color: 'white'}} />
      <MenuItem primaryText='Analyse' style={{color: 'white'}} />
      <MenuItem primaryText='Settings' style={{color: 'white'}} />
    </Menu>
  </Paper>
)

export default MenuExampleSimple
