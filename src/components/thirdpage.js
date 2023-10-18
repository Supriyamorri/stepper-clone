import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function Thirdpage(){
    return(
        <TextareaAutosize
        maxRows={4}
        aria-label="material height"
        placeholder="material 4 rows"
        defaultValue="hgjghjhjhjhjvgfjhvbcgf"
        style={{width: 200}}
        />
    );
}