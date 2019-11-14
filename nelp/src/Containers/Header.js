import React from 'react'
import {Menu} from 'semantic-ui-react'
import NELP from '../data/NELP.png'


const Header = props => {

    return (
        <div >
        <Menu  className= "header-menu"   inverted widths={3} big>
            <Menu.Item><img src={NELP} class = "nelp"></img>The home of bad restaurants</Menu.Item>
            <Menu.Item >Hey, {props.user}!</Menu.Item>
        </Menu>
        </div>
     )
}

export default Header