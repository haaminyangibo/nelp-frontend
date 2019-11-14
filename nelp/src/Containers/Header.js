import React from 'react'
import {Menu} from 'semantic-ui-react'

const Header = props => {

    return (
        <div >
        <Menu  className= "header-menu"  color= "red" inverted widths={2} big>
            < Menu.Item name='Yelp'/>
            < Menu.Item name={props.user}></Menu.Item>
        </Menu>
        </div>
     )
}

export default Header