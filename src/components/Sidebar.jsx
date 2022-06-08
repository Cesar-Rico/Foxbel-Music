import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ListItemIcon from '@mui/material/ListItemIcon';
import logo from '../assets/Foxbel-Music/foxbel-music.png'
import './sidebar.css'

export default function Sidebar({ subItems }){
    const [openFirst, setOpenFirst] = React.useState(true);
    const [openSecond, setOpenSecond] = React.useState(true);

    const FirstHandleClick = () => {
        setOpenFirst(!openFirst);
    }
    const SecondHandleClick = () => {
        setOpenSecond(!openSecond);
    }
    return (
        <div className="sidebar">
            <List 
                sx={{ width: '100%', maxWidth: 360, bgcolor: '#662323'}}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <div className='header-image'>
                        <img src={logo} alt='hola'/>
                    </div>   
                }
                >
                <ListItemButton key={'miLibreria'} onClick={FirstHandleClick} sx={{pl: 4, height: 40}} >
                    <ListItemText >
                        <h1 className='title'>{'Mi Libreria'}</h1>
                    </ListItemText>    
                </ListItemButton>
                <Collapse in={openFirst} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {subItems[0].map(({label,name}) => {
                        return (
                            <ListItemButton key={name} sx={{ height: 30, pl: 4}}>
                                <ListItemText >
                                    <h2 className='subTitle'>{label}</h2>
                                </ListItemText>
                            </ListItemButton>
                        );
                        })}
                    </List>  
                </Collapse>
                <ListItemButton key={'playlist'} onClick={SecondHandleClick} sx={{pl: 4, height: 40, mt: 3}}>
                    <ListItemText >
                        <h1 className='title'>{'Mi Playlist'}</h1>
                    </ListItemText>    
                </ListItemButton>
                <Collapse in={openSecond} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {subItems[1].map(({label,name}) => {
                        return (
                            <ListItemButton key={name} sx={{ height: 30, pl: 4}}>
                                <ListItemText className='subTitle'>
                                    <h2 className='subTitle'>{label}</h2>
                                </ListItemText>
                            </ListItemButton>
                        );
                        })}
                    </List>  
                </Collapse>
            </List>
        </div>
    )
}