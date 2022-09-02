import { Box, FormControl, InputLabel, Input } from '@mui/material';

const InputWithLabel = () => {
    return (
        <Box className=' w-100' px={2} sx={{ borderBottomRightRadius: '30px', background: 'white' }}>
            <InputLabel sx={{ fontSize: '0.8rem' }} className='text-end' htmlFor="component-simple">رقم الهوية / الإقامة</InputLabel>
            <FormControl className=' w-100' variant="standard">
                <Input required id="component-simple" disableUnderline={true} sx={{ '& .MuiInputBase-input ': { textAlign: 'end' } }} />
            </FormControl>
        </Box>
    )
};
export default InputWithLabel;