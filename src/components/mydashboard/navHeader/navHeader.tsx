import {
    Badge,
    Divider,
    IconButton,
    Tooltip,
    styled,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import styles from "./navHeader.module.scss";
  import { ReactComponent as HamburgerMenuIcon } from "../../../../src/svgs/hamburger-menu.svg";
  import { ReactComponent as NotificationIcon } from '../../../../src/svgs/notification.svg';
  import { ReactComponent as Logout } from "../../../../src/svgs/profile.svg";
  import {  Menu, MenuItem } from "@mui/material";
  import { ReactComponent as ProfileIcon } from "../../../../src/svgs/profile.svg";
  import { ReactComponent as Search } from "../../../../src/svgs/search.svg";
  import { ReactComponent as Tick } from "../../../../src/svgs/profile.svg";
  import {AiOutlineSearch as SearchIcon} from 'react-icons/ai';
  import {IoReload as ReloadIcon} from 'react-icons/io5';
  import { useNavigate } from "react-router-dom";
  
  
  interface HeaderProps {
    handleSidebarToggle?: () => void;
  }
  export interface PaymentStatus {
    ActionName: string;
    Amount: number;
    Status: string;
  }
  
  export interface NotificationMessage {
    TotalCount: string;
    Activities: string;
  }
  
  export type NotificationType = {
    ActivityDescription: string;
    ActivityId: number;
    ApplicantId: string;
    IsActive: boolean;
  };
  
  export interface NotificationModalProps {
    activities?: NotificationMessage[];
    onReadNotification?: (id: number) => void;
  }
  
  const NavHeader: React.FC<HeaderProps> = ({ handleSidebarToggle }) => {
    const [unreadCount, setUnreadCount] = useState<number>(0);
    
    const navigate = useNavigate();
  
   
   
  
    const nthNumber = (number: number) => {
      if (number > 3 && number < 21) return "th";
      switch (number % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
  
    const getDate = () => {
      const date = new Date();
      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "long" });
      const year = date.getFullYear();
      const fullDate = [`${day}${nthNumber(day)}`, month, year].join(" ");
      return `${fullDate}`;
    };
  
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const [notificationEl, setNotificationEl] =
      React.useState<null | HTMLElement>(null);
    const openNotification = Boolean(notificationEl);
    const handleClickNotification = (event: React.MouseEvent<HTMLElement>) => {
      setNotificationEl(event?.currentTarget);
    };
    const handleCloseNotification = () => {
      setNotificationEl(null);
    };
  
  
 
  
    const NotificationMenu = ({ onReadNotification }: NotificationModalProps) => {
      return (
        <React.Fragment>
          <Menu
        
            anchorEl={notificationEl}
            id="account-menu"
            open={openNotification}
            onClose={handleCloseNotification}
            onClick={handleCloseNotification}
    
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            sx={{width: "50%"}}
          >
            <div>
          
                <span className={styles.notificationheader}>NOTIFICATIONS</span>
              
            
  
              {/* {getNotificationsData &&
                getNotificationsData?.Activities === null && (
                  <MenuItem sx={{ width: "20rem", gap: "1rem" }}>
                    <span className={styles.notificationmessage}>
                      No new Notifications
                    </span>
                  </MenuItem>
                )} */}
  
      
          
           
            </div>
          </Menu>
        </React.Fragment>
      );
    };
  
  
  
 
  
  
    return (
      <div className={styles.header}>
      
        <IconButton
          aria-label="open sidebar"
          edge="start"
          onClick={handleSidebarToggle}
          sx={{
            mr: 1,
            visibility: { xs: "visible", md: "hidden" },
            display: { md: "hidden" },
          }}
        >
          <HamburgerMenuIcon className={styles.hamburgerStyle} />
        </IconButton>

        <div className={styles.gab}>

       

        <div  className={styles.groups}>
        <span style={{ fontSize: "1.5rem" }} className={styles.date}>
          <Section1>
            <label className={'searchForm'}>
                        <span className={'sI'}><SearchIcon/></span>
                        <input  type="text" placeholder='Search' />
                        {/* <button className={'rBtn'} type="submit"><ReloadIcon/></button> */}
            </label>

          </Section1>
     
          </span> 
          <span style={{ fontSize: "1.5rem" }} className={styles.dates}>
            {getDate()}
          </span> 
        </div>

        </div >
    
        

        

        {/* <span style={{ fontSize: "1.5rem" }} className={styles.date}>
            {getDate()}
          </span> */}
  
        <div className={styles.group}>
          <Tooltip title="Notifications" sx={{ fontSize: "2rem" }}>
            
            <Badge
              badgeContent={unreadCount}
              color="error"
              onClick={handleClickNotification}
              className={styles.button}
            >
              <NotificationIcon style={{ width: "40px", height: "35px" }} />
            </Badge>
  
          
          </Tooltip>
          
  
          <NotificationMenu />
  
          <Tooltip title="My Account" sx={{ fontSize: "2rem" }}>
            <IconButton
              onClick={handleClick}
              
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              
                <ProfileIcon style={{ width: "40px", height: "35px" }} />
              
            </IconButton>
          </Tooltip>
  
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{ boxShadow: "none", marginTop: "1rem" }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem
            //   onClick={handleProfile}
              style={{
                height: "auto",
                paddingBlock: "1px",
                paddingInline: "5px",
                fontSize: "2rem",
              }}
            >
              <ProfileIcon/>
              View Profile
            </MenuItem>
            <MenuItem
            //   onClick={handleLogout}
              style={{
                height: "auto",
                paddingBlock: "1px",
                paddingInline: "5px",
                fontSize: "2rem",
              }}
            >
              <Logout />
              Logout
            </MenuItem>
          </Menu>
  
          
        </div>
      </div>
    );
  };
  
  export default NavHeader;
  
  interface PhotoStyleProps {
    url?: string;
  }
  
  const PhotoStyle = styled("img")<PhotoStyleProps>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100%;
    background-image: url(${(PhotoStyleProps) => PhotoStyleProps?.url});
  `;
  
  const Section1 = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & span{
        font-size: 16px;
    }

    & .searchWrapper{
        margin-block-start: 1.6px;
        display: flex;
        gap: 10px;
    }

    & .searchForm{
        width: 250px;
        position: relative;
        display: flex;
        align-items: center;
    }

    &   .sI{
        position: absolute;
        left:7px;
    }

    &  .rBtn{
        position: absolute;
        right:7px;
        border:none;
        outline:none;
        background-color: transparent;
        cursor: pointer;
    }
    &   .searchForm > input{
        width:100%;
        outline:none;
        border: 1px solid #E2E4E9;
        padding:15px 30px 15px 30px;
        border-radius: 5px;
}
`