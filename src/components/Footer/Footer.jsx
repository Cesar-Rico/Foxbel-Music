import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons'
import { faForwardStep } from '@fortawesome/free-solid-svg-icons'
import { Slider } from '@material-ui/core'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react'
import './footer.css'


export default function Footer(props){

    const matches = useMediaQuery('(min-width:500px)');

    return(
        <footer className="footer">
            <div className='info-container'>
                <div className='image-container'>
                    <img src={props.image} alt='imagen album'/>
                </div>
                <div className='text-container'>
                    <h4>Cancion</h4>
                </div>
            </div>
            <div className='icons-container'>
                <FontAwesomeIcon icon={faBackwardStep} size='3x' className='backwardStep'/>
                <FontAwesomeIcon icon={faCirclePlay} size='4x'/>
                <FontAwesomeIcon icon={faForwardStep} size='3x' className='forwardStep'/>
            </div>
            {matches ?
            <div className='options-container'>
            <div className='slider-container'>
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </div>
            <FontAwesomeIcon icon={faVolumeHigh} className='volumen-icon'/>
            </div> : null}
        </footer>
    )
}