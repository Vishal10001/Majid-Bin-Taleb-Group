import React from "react";
import {Box, AppBar, Container} from '@mui/material'

import Button from "../Button";
import searchIcon from '../../assets/searchIcon.svg';
import headerLogo from '../../assets/headerLogo.svg';
import {navList} from "../../utils";

const Header = () => {
    return (
        <Box sx={{flexGrow: 1, height: '96px'}}>
            <AppBar
                sx={(theme) => ({
                    pb: '10px',
                    pt: '15px',
                    padding: 'auto',
                    height: '96px',
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
                            maxHeight: '50px',
                            height: '100%',
                            backgroundColor: theme.palette.secondary.main,
                            color: theme.palette.white[100],
                            lineHeight: '41px'
                        })}>
                            الخدمات الإلكترونية
                        </Button>
                        <img src={searchIcon} alt=''/>
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
                                display: {xs: 'none', md: 'flex'},
                                justifyContent: 'space-between',
                            })}
                        >
                            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                                {navList.map((page) => (
                                    <Button
                                        key={page?.navName}
                                        sx={(theme) => ({
                                            borderRadius: 0,
                                            height: '100%',
                                            display: 'block',
                                            backgroundColor: 'transparent !important',
                                            color: theme.palette.primary.main
                                        })}
                                    >
                                        {page?.navName}
                                    </Button>
                                ))}
                            </Box>
                        </Box>
                        <img src={headerLogo} style={{height: '70px'}} alt=''/>
                    </Box>
                </Container>
            </AppBar>
        </Box>
    )
};
export default Header;
