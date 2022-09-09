import * as React from 'react';
import dayjs from 'dayjs';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';

dayjs.extend(isBetweenPlugin);

const CustomPickersDay = styled(PickersDay, {
    shouldForwardProp: (prop) =>
        prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
    ...(dayIsBetween && {
        borderRadius: 0,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.primary.dark,
        },
    }),
    ...(isFirstDay && {
        borderTopLeftRadius: '50%',
        borderBottomLeftRadius: '50%',
    }),
    ...(isLastDay && {
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
    }),
}));

function disableWeekends(date) {
    const d = new Date();
    let day = d.getDay()
    // need to get specific day for disabe it
    console.log("day is ------------------------>",d,"date--------------->",date);
    if (typeof date === 'object' && date !== null && 'getDay' in date) {
        const result = date.getDay();
        console.log(result); // 👉️ 4
    }
    // if (date?.getDay()) {
    //     return date.getDay() === 0 || date.getDay() === 6;
    // } else {
    //     // return false
    // }
}

function disableRandomDates() {
    return Math.random() > 0.7;
}

export default function DateCalanderPicker() {
    const [date, setDate] = React.useState(dayjs());

    // const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    //     if (!value) {
    //         return <PickersDay {...pickersDayProps} />;
    //     }

    //     const start = value.startOf('week');
    //     const end = value.endOf('week');

    //     const dayIsBetween = date.isBetween(start, end, null, '[]');
    //     const isFirstDay = date.isSame(start, 'day');
    //     const isLastDay = date.isSame(end, 'day');

    //     return (
    //         <CustomPickersDay
    //             {...pickersDayProps}
    //             disableMargin
    //             dayIsBetween={dayIsBetween}
    //             isFirstDay={isFirstDay}
    //             isLastDay={isLastDay}
    //         />
    //     );
    // };

    return (
        <LocalizationProvider sx={{ borderRadius: 20, background: 'white' }} dateAdapter={AdapterDayjs}>
            {/* <StaticDatePicker
                displayStaticWrapperAs="desktop"
                label="Week picker"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderDay={renderWeekPickerDay}
                renderInput={(params) => <TextField {...params} />}
                inputFormat="'Week of' MMM d"
                sx={{ borderRadius: 20 }}
            /> */}
            <CalendarPicker
                shouldDisableDate={disableWeekends}
                date={date}
                onChange={(newDate) => setDate(newDate)}
            />
        </LocalizationProvider>
    );
}