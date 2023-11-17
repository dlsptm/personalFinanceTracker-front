import React, {useState} from 'react';
import { Divider,Drawer,List,ListItem ,ListItemIcon, ListItemText, Stack, Button} from '@mui/material';
import { Link } from "react-router-dom";
import routes from '../../constants/routes';

const getRoutes = () => routes.map((route) => (
    <>
        <ListItem>
            <ListItemIcon>
                {route.icon}
            </ListItemIcon>
            <Link to={route.link}>
                <ListItemText primary={route.title} />
            </Link>
        </ListItem>
        <Divider variant='middle'/>
    </>
));

const SideNav = () => {
const [isOpen, setIsOpen] = useState(false)

const handleSetIsOpen = () => {
    setIsOpen(!isOpen)
}

const closeDrawer = () => {
    setIsOpen(false)
}

return (
        <>
            <Button onClick={handleSetIsOpen}>
                {isOpen ? 'Fermer' : 'Ouvrir'}
            </Button>
            <Drawer sx={{width: 540}}  anchor='left' open={isOpen}>
                <Button onClick={closeDrawer}>Fermer</Button>
                <List>
                    <Stack spacing={4} mt={4}>
                        {getRoutes()}
                    </Stack>
                </List>
            </Drawer>
        </>
    )
}

export default SideNav