import React from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends React.Component{

    state = {


    }
render(){
    return(
        <div>
        <Menu> 
            <Menu.Item name="Home" onClick />
            <Menu.Item name="Saved Reviews" />
            <Menu.Item name="Resuarants" />
        </Menu>
        
        </div>
    )
    }
}

