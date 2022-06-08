import React from 'react'
import './superCard.css'

export default function SuperCard(props){
    return(
        <div className='container'>
        <div className='image'>
            <img src={props.image} alt={'No existe imagen'}/>
        </div>
        <div className='container'>

        </div>
        </div>
    )
}