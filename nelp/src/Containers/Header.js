import React from 'react'
import {Menu} from 'semantic-ui-react'

const Header = props => {

    return (

        <Menu color= "red" inverted widths={3}>
        
            < Menu.Item name='Yelp'/>

            < Menu.Item name={props.user}></Menu.Item>

        </Menu>
    )


}

export default Header