import React from "react";
import { Box, FormControl, MenuItem, Select, Container } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import articalImg from "../assets/articalImg.jpg";
import SearchBar from "../commonComponent/SearchBar";
import Typography from "../commonComponent/Typography";
import Pagination from "../commonComponent/Pagination";

const Artical = () => {
    const [age, setAge] = React.useState('');
    const [page, setPage] = React.useState(1);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box>
            <Container
                maxWidth='xl'
                sx={{
                    gap: '10px',
                    display: 'flex',
                    height: 'auto',
                }}
                className='flex-column'
            >
                <Box mt={3} className="d-flex align-items-center justify-content-between">
                    <Box className="d-flex align-items-center gap-3">
                        <FormControl sx={{ m: 1, maxWidth: 100, width: '100%' }}>
                            <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                sx={{
                                    fontSize: '15px',
                                    border: '1px solid #CAC7C7',
                                    borderRadius: '30px',
                                    backgroundColor: '#fff',
                                    color: '#AE965A',
                                    '& legend': { display: 'none' }, '& fieldset': {
                                        top: 0,
                                        color: '#AE965A',
                                        borderColor: '#CAC7C7'
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        color: '#AE965A !important',
                                        borderColor: '#CAC7C7 !important'
                                    },
                                    '& .MuiSelect-select': {
                                        paddingLeft: '25px !important',
                                        paddingRight: '14px !important',
                                        py: '13px'
                                    },
                                    '& .MuiSvgIcon-root': {
                                        left: 4,
                                        fill: '#AE965A'
                                    }
                                }}
                            >
                                <MenuItem value={10}>فرز</MenuItem>
                                <MenuItem value={20}>من الأحدث الى الأقدم</MenuItem>
                                <MenuItem value={30}>من الأقدم الى الأحدث</MenuItem>
                                <MenuItem value={30}>الأكثر مشاهدة</MenuItem>
                            </Select>
                        </FormControl>
                        <SearchBar />
                    </Box>
                    <Typography className='text-end'
                        sx={{
                            fontSize: '30px',
                            fontWeight: 900,
                            color: '#39281F'
                        }}
                        text='جميع المقالات'
                    />
                </Box>
                <Container
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        height: 'auto',
                    }}
                    className='flex-column gap-5'
                >
                    <Box mt={5} className='d-flex flex-column gap-5'>
                        {Array.from({ length: 8 }).map(() =>
                            <Box className="d-flex align-items-streach justify-content-between bg-white" sx={{ borderTopRightRadius: '50px' }}>
                                <Box>
                                    <img style={{ maxHeight: '200px', borderBottomRightRadius: '60px' }} src={articalImg} alt="" />
                                </Box>
                                <Box className="d-flex flex-column justify-content-between" p={3}>
                                    <Box>
                                        <Typography className='text-end'
                                            sx={{
                                                fontSize: '20px',
                                                fontWeight: 900,
                                                color: '#CAC7C7'
                                            }}
                                            text='يناير 10 , 2022 '
                                        />
                                        <Typography className='text-end'
                                            sx={{
                                                fontSize: '25px',
                                                fontWeight: 900,
                                                color: '#39281F'
                                            }}
                                            text="ماهي القيمة المضافة باندماج الشركات ؟"
                                        />
                                    </Box>
                                    <Box className="d-flex align-items-center justify-content-end">
                                        <WestIcon sx={{ fill: '#AE965A' }} />
                                        <Typography className='text-end'
                                            sx={{
                                                fontSize: '22px',
                                                fontWeight: 900,
                                                color: '#AE965A'
                                            }}
                                            text='اقرأ المزيد '
                                        />
                                    </Box>
                                </Box>
                            </Box>)}
                    </Box>
                </Container>
            </Container>
            <Box mt={5} className="d-flex align-items-center justify-content-center">
                <Pagination onChange={(pageNum) => setPage(pageNum)} page={page} count={10} />
            </Box>
        </Box>
    )
};
export default Artical;