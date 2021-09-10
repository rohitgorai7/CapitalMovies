import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import './custompagination.css'
import { createTheme, ThemeProvider } from '@material-ui/core';

const darkTheme= createTheme({
    palette: {
        type: "dark",
    },
});

const CustomPagination = ({ setPage, setMaxPage = 10 }) =>{
    const handlePageChange =(page) => {
        setPage(page);
        window.scroll(0,0);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Pagination className="page" count={setMaxPage} onChange={(e) => handlePageChange(e.target.textContent)} hideNextButton hidePrevButton color="primary" />
        </ThemeProvider>        
    );
};

export default CustomPagination;