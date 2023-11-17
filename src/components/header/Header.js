import React from 'react';
import { Stack} from '@mui/material';


const Header = ({ name }) => {

return (
    <Stack sx={{ backgroundColor : 'red' }}>
        <h1>{name}</h1>
    </Stack>
)
}

export default Header;