import React from 'react';
import { Grid, Paper, Container, Box, FormControl, InputLabel, Input } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import diamond from "../assets/diamond.svg";
import Typography from '../commonComponent/Typography';
import whatsappIcon from "../assets/whatsappIcon.svg";
import Footer from '../commonComponent/Footer';
import HammerImg from '../assets/law-justice-bg.jpg';
import TextField from '../commonComponent/TextField';
import Button from '../commonComponent/Button';
import { mobileAndTabletCheck } from '../utils';
import InputWithLabel from '../commonComponent/InputWithLabel';
import Checkbox from '@mui/material/Checkbox';
// import CircleChecked from '@material-ui/icons/CheckCircleOutline';
// import {CircleChecked,CircleUnchecked} from '@material-ui/icons';
// import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    background: 'transparent'
}));

const isMobile = mobileAndTabletCheck();

const sampleText = `<span class='light-yellow'>تواصل </span>معنا الآن عبرتساب `;
console.log("isMobile", isMobile)
const Login = () => {
    return (
        <>
            {!isMobile ?
                <Box sx={{ backgroundImage: `url(${diamond})` }}>
                    <Box mt={10}>
                        <Container
                            maxWidth={false}
                            sx={{
                                gap: '10px',
                                display: 'flex',
                                height: 'auto',
                            }}
                            className='flex-column'
                        >
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                                <Grid item xs={4} sm={6} md={6}>
                                    <img src={HammerImg} alt="" className='h-100 w-100' style={{ borderBottomRightRadius: '40px' }} />
                                </Grid>
                                <Grid className='gap-3 d-flex flex-column' item xs={4} sm={6} md={6}>
                                    <Box className='d-flex flex-column align-items-end justify-content-between gap-4'>
                                        <Typography
                                            sx={{
                                                color: '#39281F',
                                                fontSize: '25px',
                                            }}
                                            dangerouslySetInnerHTML={{ __html: sampleText }}
                                        />
                                        <InputWithLabel />
                                    </Box>
                                    <Box className='d-flex flex-column align-items-end justify-content-between gap-2' mt={3}>
                                        <Typography
                                            sx={{
                                                color: '#39281F',
                                                fontSize: '25px',
                                            }}
                                            text="تواصل معنا الآن عبر الواتساب "
                                        />
                                        <Typography
                                            sx={{
                                                color: '#979797',
                                                fontSize: '20px',
                                            }}
                                            text="تواصل معنا "
                                        />
                                        <InputWithLabel />
                                    </Box>
                                    <Box>
                                        {/* <Checkbox
                                            {...label}
                                            defaultChecked
                                            icon={<CircleUnchecked />}
                                            checkedIcon={<CircleChecked />}
                                        /> */}
                                    </Box>
                                    <Button sx={{ background: '#AE965A !important', mt: 3, color: 'white' }} rounded>ارسال </Button>
                                    <Typography
                                        sx={{
                                            color: '#979797',
                                            fontSize: '18px',
                                        }}
                                        className="text-end"
                                        text="هل نسيت كلمة المرور؟"
                                    />
                                </Grid>
                            </Grid>
                        </Container>
                        <Box my={5} className='d-flex align-items-center justify-content-end gap-3 w-100'>
                            <Box className='position-relative'
                                sx={(theme) => ({ backgroundColor: theme.palette.white[100], borderRadius: 30 })} p={1}
                                px={2}>
                                <Box sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '100%',
                                    marginTop: '-5px',
                                    borderWidth: '5px',
                                    borderStyle: 'solid',
                                    borderColor: 'transparent transparent transparent white',
                                }} />
                                <Typography sx={(theme) => ({
                                    color: theme.palette.primary.main,
                                    fontSize: '14px',
                                    fontWeight: 500
                                })} text='تواصل معنا الآن عبر الواتساب ' />
                            </Box>
                            <Box sx={{ maxWidth: '40px', maxHeight: '40px' }}>
                                <img src={whatsappIcon} alt='' className="h-100 w-100" />
                            </Box>
                        </Box>
                    </Box>
                    <Footer hideContent sx={{ mt: 5 }} >
                        <Typography
                            sx={{
                                color: '#39281F',
                                fontSize: '20px',
                                my: 10,
                                textAlign: 'end'
                            }}
                            text="جميع الحقوق محفوظة لمجموعة ماجد بن طالب     2022"
                        />
                    </Footer>
                </Box>
                :
                <>
                    <Box className='h-100 d-flex align-items-center justify-content-center' sx={{ backgroundImage: `url(${HammerImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <Box className='h-100' sx={{ maxHeight: '400px', maxWidth: '300px', margin: '0 auto', backgroundColor: '#F5F1EE' ,borderRadius:'20px'}}>
                            <Container
                                sx={{
                                    gap: '10px',
                                    display: 'flex',
                                    height: 'auto',
                                }}
                                className='flex-column'
                            >
                                <Box className="d-flex flex-column">
                                    <Box className='d-flex flex-column align-items-end justify-content-between gap-4'>
                                        <Typography
                                            sx={{
                                                color: '#39281F',
                                                fontSize: '20px',
                                            }}
                                            dangerouslySetInnerHTML={{ __html: sampleText }}
                                        />
                                        <InputWithLabel />
                                    </Box>
                                    <Box className='d-flex flex-column align-items-end justify-content-between gap-2' mt={3}>
                                        <Typography
                                            sx={{
                                                color: '#39281F',
                                                fontSize: '20px',
                                            }}
                                            text="تواصل معنا الآن عبر الواتساب "
                                        />
                                        <Typography
                                            sx={{
                                                color: '#979797',
                                                fontSize: '18px',
                                            }}
                                            text="تواصل معنا "
                                        />
                                        <InputWithLabel />
                                    </Box>
                                    <Box>
                                        {/* <Checkbox
                                            {...label}
                                            defaultChecked
                                            icon={<CircleUnchecked />}
                                            checkedIcon={<CircleChecked />}
                                        /> */}
                                    </Box>
                                    <Button sx={{ background: '#AE965A !important', mt: 3, color: 'white' }} rounded>ارسال </Button>
                                    <Typography
                                        sx={{
                                            color: '#979797',
                                            fontSize: '18px',
                                        }}
                                        text="هل نسيت كلمة المرور؟"
                                    />
                                </Box>
                            </Container>
                        </Box>
                    </Box>
                    <Footer hideContent sx={{ mt: 5 }} >
                        <Typography
                            sx={{
                                color: '#39281F',
                                fontSize: '20px',
                                my: 5,
                                textAlign: 'end'
                            }}
                            text="جميع الحقوق محفوظة لمجموعة ماجد بن طالب     2022"
                        />
                    </Footer>
                </>
            }
        </>
    )
};
export default Login;