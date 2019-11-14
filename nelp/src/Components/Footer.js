import React from 'react';
import footer_cityscape from '../data/footer_cityscape.png'

class Footer extends React.Component{

    render() {

        return(

            <div class ="footer">
            <img src = {footer_cityscape}></img>
            <p> Elizabeth & Haami 2019 ©</p>
             </div>
        )
    }

}

export default Footer 