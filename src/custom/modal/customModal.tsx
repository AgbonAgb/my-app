import { Dialog, IconButton, DialogContent } from "@mui/material";
import { forwardRef, ReactNode } from "react"
// import {ReactComponent as CloseIcon} from "../../svgs/close.svg"
import styles from "./main.module.scss"

type BreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface Props {
    title?: string | ReactNode;
    description?: string;
    open: boolean;
    handleOpen?: (value: any) => void;
    handleClose?: () => void;
    Content?: React.ReactNode;
    maxWidth?: false | BreakPoint | undefined;
}


const CustomModal = forwardRef<HTMLDivElement, Props>(({ handleClose, open, Content, maxWidth }, ref) => {
    return (
        <Dialog className={styles.modal} open={open} onClose={handleClose} maxWidth={maxWidth ? maxWidth : 'sm'} fullWidth={true} fullScreen={false} ref={ref}>
            <IconButton
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8
                }}
            >
                {/* <CloseIcon/> */}
            </IconButton>
            <DialogContent sx={{ background: "white", paddingInline: '5rem' }}>
                {Content && Content}
            </DialogContent>

        </Dialog>
    )
});

export default CustomModal