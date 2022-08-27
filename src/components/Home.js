import React from "react";
import {Container, Box} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HammerImg from '../assets/law-justice-bg.jpg';
import Typography from "../commonComponent/Typography";
import Button from "../commonComponent/Button";
import scalesImg from "../assets/scalesImg.svg";
import groupImg from "../assets/Group.svg";
import carImg from "../assets/car.svg";
import whatsappIcon from "../assets/whatsappIcon.svg";
import dhlImg from "../assets/dhlImg.svg";
import bankLogo from "../assets/bankLogo.svg";
import {practiceArray} from "../utils";

const Home = () => {
    const sampleText = 'نوفر من خلال مجموعة ماجد بن  طالب مجموعة  <br/>مختلفة من الخدمات القانونية<br/> التى تحتاج اليه';
    return (
        <>
            <Container
                maxWidth='xl'
                sx={{
                    gap: '10px',
                    display: 'flex',
                    height: '100%',
                }}
                className='flex-column'
            >
                <Box className='d-flex' sx={{mt: '120px'}}>
                    <Box sx={{borderTopRightRadius: '31% 50%', overflow: 'hidden', width: '100%'}}>
                        <img src={HammerImg} alt=''/>
                    </Box>
                    <Box className='d-flex flex-column'>
                        <Box>
                            <Typography className='text-end'
                                        sx={{
                                            fontSize: '50px',
                                            fontWeight: 900,
                                            color: '#39281F'
                                        }}
                                        text='مجموعة ماجد بن طالب للمحاماة والاستشارات القانونية'/>
                            <Typography
                                className='text-end'
                                sx={{
                                    fontSize: '30px',
                                    mt: 2
                                }}
                                dangerouslySetInnerHTML={{__html: sampleText}}
                            />
                        </Box>
                        <Box sx={{mt: 7}} className='d-flex align-items-center justify-content-end'>
                            <Button size='small' rounded sx={(theme) => ({
                                maxHeight: '50px',
                                height: '100%',
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.white[100],
                                lineHeight: '41px'
                            })}>
                                اطلب استشارتك الآن
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box className='d-flex align-items-center justify-content-center' mt='-30px'>
                    <Box sx={{backgroundColor: '#39281F', borderRadius: 1.5}}
                         className='d-flex align-items-center' px={4}
                         py={3}>
                        <Box px={5} className='d-flex align-items-center' sx={{borderRight: '1px solid #fff'}}>
                            <Typography sx={(theme) => ({fontSize: '40px', color: theme.palette.white[100], mr: 1})}
                                        text='عميل 30+'/>
                            <Box sx={{height: '40px', width: '40px'}}>
                                <img className='h-100 w-100' src={scalesImg} alt=''/>
                            </Box>
                        </Box>
                        <Box px={5} className='d-flex align-items-center'>
                            <Typography sx={(theme) => ({fontSize: '40px', color: theme.palette.white[100], mr: 1})}
                                        text='قضية 30+'/>
                            <Box sx={{height: '40px', width: '40px'}}>
                                <img className='h-100 w-100' src={groupImg} alt=''/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className='d-flex align-items-center justify-content-center' mt={1}>
                    <Box sx={(theme) => ({
                        backgroundColor: theme.palette.secondary.main,
                        borderRadius: 5,
                        cursor: 'pointer'
                    })} px={0.5}
                         pt={2.5} pb={0.5}
                    >
                        <ExpandMoreIcon sx={{fill: 'white'}}/>
                    </Box>
                </Box>
            </Container>
            <Box sx={(theme) => ({backgroundColor: theme.palette.white[100], borderTopRightRadius: '140px'})}>
                <Container
                    maxWidth='xl'
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        height: '100%',
                    }}
                    className='flex-column'
                >
                    <Box className='text-end' pb={10} pt={7}>
                        <Typography text='لوريم إيبسوم' sx={{color: '#39281F', fontSize: '44px'}}/>
                        <Typography text='لوريم إيبسوم هو ببساطة نص رسمي (بمعنى أن النهاية هي الشكل وليس الشكل'
                                    sx={{color: '#39281F', fontSize: '35px', mt: 2}}/>
                        <Box className='d-flex flex-column gap-5'>
                            <Typography sx={{color: '#39281F', fontSize: '25px', mt: 3}}
                                        text='الإجراء الشكلي هو عندما تقوم مطبعة غير معروفة بتكديس مجموعة من الأحرف المأخوذة عشوائيًا من النص ، لتشكيل كتيب يعمل كدليل أو مرجع رسمي لهذه الأحرف. خمسة قرون من الزمن لم تحذف هذا النص ، بل تم استخدامه'/>
                            <Box>
                                <Button size='small' rounded sx={(theme) => ({
                                    maxHeight: '50px',
                                    height: '100%',
                                    backgroundColor: theme.palette.secondary.main,
                                    color: theme.palette.white[100],
                                    lineHeight: '41px'
                                })}>
                                    المزيد
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{maxHeight: '500px', margin: '0 auto', height: '100%'}}>
                <Container
                    maxWidth='xl'
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        height: '100%',
                    }}
                    className='flex-column justify-content-center align-items-center'
                >
                    <Box className='d-flex align-items-center justify-content-between w-100'>
                        <Typography sx={(theme) => ({color: theme.palette.secondary.main, fontSize: '39px'})}
                                    text='رؤية جميع مجالات الممارسة'/>
                        <Typography sx={(theme) => ({color: theme.palette.primary.main, fontSize: '44px'})}
                                    text='مجالات الممارسة'/>
                    </Box>
                    <Box className='d-flex flex-wrap gap-5' mt={4}>
                        {practiceArray?.map((item, index) =>
                            <Box
                                key={index}
                                sx={(theme) => ({
                                    border: `1px solid ${theme.palette.secondary.main}`,
                                    borderTopRightRadius: '20px',
                                    height: '168.06px', width: '255px',
                                })}
                                p={2}>
                                <Box className='text-end'>
                                    <img src={carImg} style={{height: '46px', width: '46px'}}/>
                                </Box>
                                <Typography text={item?.text}/>
                            </Box>)}
                    </Box>
                </Container>
            </Box>
            <Box>
                <Container
                    maxWidth={false}
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        height: '100%',
                    }}
                    className='flex-column justify-content-center align-items-center'
                >
                    <Typography text='عملاؤنا' sx={(theme) => ({
                        color: theme.palette.primary.main,
                        fontSize: '44px',
                        fontWeight: 800
                    })}/>
                    <Box className='d-flex align-items-center justify-content-end gap-3 w-100'>
                        <Box className='position-relative'
                             sx={(theme) => ({backgroundColor: theme.palette.white[100], borderRadius: 30})} p={1}
                             px={2}>
                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '100%',
                                marginTop: '-5px',
                                borderWidth: '5px',
                                borderStyle: 'solid',
                                borderColor: 'transparent transparent transparent black',
                            }}/>
                            <Typography sx={(theme) => ({
                                color: theme.palette.primary.main,
                                fontSize: '30px',
                                fontWeight: 500
                            })} text='تواصل معنا الآن عبر الواتساب '/>
                        </Box>
                        <img src={whatsappIcon} alt=''/>
                    </Box>
                </Container>
            </Box>
            <Box sx={{maxHeight: '300px', height: '100%'}}>
                <Container
                    maxWidth={false}
                    sx={(theme) => ({
                        gap: '10px',
                        display: 'flex',
                        height: '100%',
                    })}
                >
                    <Box sx={(theme) => ({background: theme.palette.primary.main, borderTopRightRadius: '140px'})}
                         className='w-100 d-flex align-items-center justify-content-around'>
                        <img src={dhlImg} alt=''/>
                        <img src={bankLogo} alt=''/>
                    </Box>
                </Container>
            </Box>
        </>
    )
};
export default Home;
