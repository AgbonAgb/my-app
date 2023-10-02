import { CircularProgress } from '@mui/material'
import {styled} from "@mui/material";

const CircularLoader: React.FC = () => {
    
  return (
    <Wrapper>
        <CircularProgress style={{ color: "#574d90",}} />
    </Wrapper>
  )
}

export default CircularLoader

const Wrapper = styled("main")`
display: flex;
align-items: center;
justify-content: center;

`;