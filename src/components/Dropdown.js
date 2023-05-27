import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Dropdown(options) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="basic-select-label">{options.name}</InputLabel>
                <Select
                    labelId="basic-select-label"
                    id="basic-select"
                    value={selectedOption}
                    label={options.name}
                    onChange={handleChange}
                    className="text-white"
                >
                    {options.options.map((option) => (
                        <MenuItem key={option.id} value={option.option} className="text-white">{option.option}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default Dropdown;
