import React from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends React.Component{
render(){
    return(
        <div>
        <Menu> 
            <Menu.Item name="Home" />
            <Menu.Item name="Reviews" />
            <Menu.Item name="Resuarants" />
        </Menu>
        
        </div>
    )
    }
}

