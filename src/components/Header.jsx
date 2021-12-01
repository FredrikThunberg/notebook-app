import React from "react";
import BookIcon from '@mui/icons-material/Book';

function Header() {
    return (
        <header>
            <h1>
                <BookIcon />
                Notebook <span>...not the movie</span>
            </h1>
        </header>
    );
}

export default Header;
