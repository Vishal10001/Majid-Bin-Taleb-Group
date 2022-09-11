import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, AppBar, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import Button from "../Button";
import headerLogo from '../../assets/headerLogo.svg';
import { navList } from "../../utils";

const Header = () => {
    let navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1, height: '80px' }}>
            <AppBar
                sx={(theme) => ({
                    // pb: '10px',
                    // pt: '15px',
                    padding: 'auto',
                    height: '80px',
                    boxShadow: 'none !important',
                    backgroundColor: theme.palette.secondary[300],
                    borderBottom: `${theme.border.width[2]} solid ${theme.palette.secondary.main}`
                })}
            >
                <Container
                    maxWidth='xl'
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        height: '100%',
                    }}
                    className='justify-content-between'
                >
                    <Box className='d-flex align-items-center justify-content-between gap-4'>
                        <Button size='small' rounded sx={(theme) => ({
                            maxHeight: '40px',
                            height: '100%',
                            backgroundColor: theme.palette.secondary.main,
                            color: theme.palette.white[100],
                            lineHeight: '41px',
                            fontWeight: 600,
                            fontSize: '16px'
                        })}
                            onClick={() => navigate('/login')}
                        >
                            الخدمات الإلكترونية
                        </Button>
                        <SearchIcon fontSize="small" sx={{ fill: '#39281F' }} />
                        {/* <img src={searchIcon} alt=''/> */}
                    </Box>
                    <Box className='d-flex align-items-center justify-content-between gap-3'>
                        <Box
                            sx={(theme) => ({
                                [theme.breakpoints.between('sm', 'lg')]: {
                                    gap: theme.spaces.X_LARGE,
                                },
                                [theme.breakpoints.up('lg')]: {
                                    gap: theme.spaces.X_LARGE,
                                },
                                flexGrow: 3,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'space-between',
                            })}
                        >
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {navList.map((page) => (
                                    <Button
                                        key={page?.navName}
                                        sx={(theme) => ({
                                            borderRadius: 0,
                                            height: '100%',
                                            display: 'block',
                                            backgroundColor: 'transparent !important',
                                            color: '#39281F',
                                            fontWeight: 400
                                        })}
                                        onClick={() => navigate('')}
                                    >
                                        {page?.navName}
                                    </Button>
                                ))}
                            </Box>
                        </Box>
                        <img src={headerLogo} style={{ height: '55px',maxWidth:'66px' }} alt='' />
                    </Box>
                </Container>
            </AppBar>
        </Box>
    )
};
export default Header;
