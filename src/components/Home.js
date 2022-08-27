import React from "react";
import {Container,Box} from '@mui/material';
import HammerImg from '../assets/law-justice-bg.jpg';

const Home = () => {
    return (
        <Container
            maxWidth='xl'
            sx={{
                gap: '10px',
                display: 'flex',
                height: '100%',
            }}

        >
            <Box>
            <img src={HammerImg} alt='' />
            </Box>
        </Container>
    )
};
export default Home;
