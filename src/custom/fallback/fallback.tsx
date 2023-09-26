import { CircularProgress } from "@mui/material";
import { FC } from "react";
import {styled} from "@mui/material";
const Fallback : FC = () => {
    return (
        <Fallbacks>
            <CircularProgress color="inherit"/>
        </Fallbacks>
    )
}

export default Fallback

const Fallbacks = styled("main")`
display: flex;
justify-content: center;
align-items: center;
min-block-size: 100vh;
font-size: 1.6rem;
color: #574d90;

`;