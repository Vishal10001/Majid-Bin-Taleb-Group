import { Box, FormControl, InputLabel, Input } from '@mui/material';
import { VisibilityOff } from '@material-ui/icons';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const InputWithLabel = (props) => {
    const { label, required, type = 'text', sx, restProps } = props;
    return (
        <Box className=' w-100' {...restProps} px={2} pt={1} sx={{ borderBottomRightRadius: '30px', background: 'white', ...sx }}>
            <InputLabel sx={{ fontSize: '0.8rem', color: '#AE965A' }} className='text-end' htmlFor="component-simple">
                {required && <span className='color-red'>*</span>}
                {label}
            </InputLabel>
            <FormControl className=' w-100' variant="standard">
                <Input
                    type={type}
                    required={required}
                    id="component-simple"
                    disableUnderline={true}
                    sx={{ '& .MuiInputBase-input ': { textAlign: 'end' } }}
                    startAdornment={
                        <InputAdornment position="start">
                            {type === "password" ? <IconButton
                                aria-label="toggle password visibility"
                                // onClick={handleClickShowPassword}
                                // onMouseDown={handleMouseDownPassword}
                                edge="start"
                            >
                                {/* {values.showPassword ? <VisibilityOff /> : <Visibility />} */}
                                <VisibilityOff style={{ color: '#ae965abf', fill: '#ae965abf' }} />
                            </IconButton>
                                :
                                <>
                                </>
                            }
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
    )
};
export default InputWithLabel;