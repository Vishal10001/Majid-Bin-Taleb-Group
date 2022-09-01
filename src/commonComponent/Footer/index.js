import React from 'react';
import { Box, Container } from '@mui/material';
import { LinkedIn, LocalPostOffice } from '@mui/icons-material';
import Twitter from '@mui/icons-material/Twitter';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from '../Typography';

const Footer = (props) => {
    const { sx } = props;
    return (
        <Box mt={25} sx={{ borderTop: 2, borderColor: '#AE965A', ...sx }}>
            <Container
                maxWidth='xl'
                sx={{
                    gap: '10px',
                    display: 'flex',
                    height: 'auto',
                }}
                className='flex-column'
            >
                <Box pt={3} pb={4} mb={3}>
                    <Box mt={3} className='d-flex align-items-start justify-content-between'>
                        <Box className='d-flex align-items-center flex-column gap-4'>
                            <Typography text='تابعنا على ' sx={{ color: '#39281F', fontSize: '30px', fontWeight: 700 }} />
                            <Box className='d-flex gap-2'>
                                <Twitter sx={{ fill: '#AE965A' }} />
                                <LinkedIn sx={{ fill: '#AE965A' }} />
                                <LocalPostOffice sx={{ fill: '#AE965A' }} />
                            </Box>
                        </Box>
                        <Box className='d-flex align-items-end flex-column gap-4'>
                            <Typography text='العنوان' sx={{ color: '#39281F', fontSize: '30px', fontWeight: 700 }} />
                            <Typography text='جدة - الرياض - الدمام ' sx={{ color: '#000000', fontWeight: 400 }} />
                        </Box>
                        <Box className='d-flex align-items-end flex-column gap-4'>
                            <Typography text='ساعات العمل ' sx={{ color: '#39281F', fontSize: '30px', fontWeight: 700 }} />
                            <Typography text='من الاحد الى الخميس ' sx={{ color: '#000000', fontWeight: 400 }} />
                            <Typography text='9:00 ص - 4:00 م' sx={{ color: '#000000', fontWeight: 400 }} />
                        </Box>
                    </Box>
                    <Typography
                        mt={3}
                        text='جميع الحقوق محفوظة لمجموعة ماجد بن طالب     2022'
                        sx={{ color: '#000000', fontWeight: 400 }}
                        className='text-end'
                    />
                    <Box className='d-flex align-items-center justify-content-center' mt={1}>
                        <Box sx={(theme) => ({
                            backgroundColor: theme.palette.secondary.main,
                            borderRadius: 5,
                            cursor: 'pointer'
                        })} px={0.5}
                            pb={2.5} pt={0.5}
                        >
                            <KeyboardArrowUpIcon sx={{ fill: 'white' }} />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default Footer;