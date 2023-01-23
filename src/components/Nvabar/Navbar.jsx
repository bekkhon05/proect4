import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css';
import { BsChevronRight } from "react-icons/bs";
import NavImgYoz from './yozuv.png';
import Navsomqut from './Somka.png';
import Navsomqut2 from './Somka2.png';
import NavIconcha from './Iconcha.png';
import { Link } from 'react-router-dom';
import { NavbarMap } from './map/map';

const pages = ['HOME', 'SHOP', 'BLOG', 'FAQ', 'CONTACT', 'MEMBERS'];

function Components() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box id='AppBar' sx={{
            paddingLeft: { xl: '17%', lg: '11%', md: '20px' },
        }}>
            <AppBar position="static">
                <Container maxWidth="xl" id='fsadgfhg'>
                    <Toolbar disableGutters sx={{
                        display: 'flex',
                        justifyContent: { xl: '', lg: '', md: '', sm: 'space-between', xs: 'space-between' }
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Link >
                                <img src={NavImgYoz} alt="" width={'96px'} />
                            </Link>
                            <Link style={{
                                textDecoration: 'none',
                                color: '#B99867',
                                marginLeft: '3px',
                                letterSpacing: '0.15em',
                                fontFamily: '"open sans",sans-serif',
                                fontSize: '14px'
                            }}>
                                URBAN BIKES
                            </Link>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: { xl: '65px', lg: '65px', md: '30px', sm: '0' }, alignItems: 'center' }}>
                            {NavbarMap.map((val, i) => (
                                <Link
                                    to={val.path}
                                    key={i}
                                    onClick={handleCloseNavMenu}
                                    id='dfgbhhhhh'
                                >
                                    {val.name}
                                </Link>
                            ))}
                            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '18px' }} id='ddarsg'>
                                <Typography sx={{
                                    marginTop: '5px',
                                    padding: '0 5px'
                                }}>
                                    <img src={NavIconcha} alt="" width={'28px'} />
                                </Typography>
                                <Typography id='sadtfyu'>
                                    Log In
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <Box sx={{ flexGrow: 0 }} id='sadfgh'>
                                <Tooltip title="Open settings">
                                    <IconButton>
                                        <Box>
                                            <Box sx={{
                                                background: '#294057',
                                                padding: '6px 39px',
                                                display: { xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none' }
                                            }}>
                                                <Link onClick={handleOpenUserMenu} sx={{
                                                    cursor: 'pointer'
                                                }}>
                                                    <img src={Navsomqut} alt="" width={'45px'} />
                                                </Link>
                                                <Typography sx={{
                                                    color: '#fff',
                                                    fontSize: '14px',
                                                    fontFamily: '"open sans",sans-serif'
                                                }}>
                                                    MY CART
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                display: { xl: 'none', lg: 'none', md: 'none', sm: 'block' },
                                            }} >
                                                <Link onClick={handleOpenUserMenu}>
                                                    <img src={Navsomqut2} alt="" width={'50px'} />
                                                </Link>
                                            </Box>
                                        </Box>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <Box sx={{ display: 'flex' }}>
                                        <Box onClick={handleCloseUserMenu} sx={{
                                            width: { xl: '100%', lg: '100%', md: '100%', sm: '100%', xs: '0%' },
                                            minHeight: '100vh',
                                            maxHeight: '100vh',
                                            background: '#000',
                                            opacity: '0.2'
                                        }}>
                                        </Box>
                                        <Box sx={{
                                            minWidth: { xl: '350px', lg: '350px', md: '350px', sm: '350px', xs: '100%' },
                                            minHeight: '100vh',
                                            maxHeight: '100vh',
                                        }}>
                                            <Box sx={{
                                                background: '#294057',
                                                width: '100%',
                                                height: { xl: '110px', lg: '110px', md: '110px', sm: '90px', xs: '75px' },
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                <Link onClick={handleCloseUserMenu} style={{
                                                    fontSize: '22px',
                                                    color: '#fff',
                                                    textDecoration: 'none',
                                                    marginLeft: '30px',
                                                    cursor: 'pointer'
                                                }}>
                                                    <BsChevronRight />
                                                </Link>
                                                <Typography id='weregtdcf7g'>
                                                    Cart
                                                </Typography>
                                            </Box>
                                            <Box id='qwesdrtfyctfy' >
                                                <Typography sx={{
                                                    fontSize: '18px',
                                                    color: '#294057',
                                                    textAlign: 'center'
                                                }}>
                                                    Cart is empty
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Menu>
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appba"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                >
                                    <Box sx={{
                                        border: '1px solid #294057',
                                        fontSize: '32px',
                                        width: '50px',
                                        height: '50px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#294057',
                                    }}>
                                        <MenuIcon style={{ fontSize: '30px' }} />
                                    </Box>
                                </IconButton>
                                <Menu
                                    id="menu-appba"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    <Box sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'right'
                                    }}>
                                        <Box onClick={handleCloseNavMenu} sx={{
                                            border: '1px solid #294057',
                                            fontSize: '32px',
                                            width: '50px',
                                            height: '50px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#294057',
                                            margin: '20px 20px 20px 0'
                                        }}>
                                            <BsChevronRight style={{ fontSize: '30px' }} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '18px', justifyContent: 'center' }} id='ddarsg'>
                                        <Typography sx={{
                                            marginTop: '5px',
                                            padding: '0 5px',
                                            marginLeft: '-35px'
                                        }}>
                                            <img src={NavIconcha} alt="" width={'28px'} />
                                        </Typography>
                                        <Typography id='sadtfyu'>
                                            Log In
                                        </Typography>
                                    </Box>
                                    {NavbarMap.map((val, i) => (
                                        <MenuItem key={i} onClick={handleCloseNavMenu}>
                                            <Link
                                                to={val.path}
                                                key={i}
                                                onClick={handleCloseNavMenu}
                                                id='dfgbhhhhh2'
                                            >
                                                {val.name}
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
export default Components;