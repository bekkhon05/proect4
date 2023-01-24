import { Box, Link, Typography } from '@mui/material';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPinterestP } from "react-icons/fa";
import './Futter.css';
function Futter() {
    return (
        <Box>
            <Box sx={{
                background: '#B99869',
                padding: { xl: '30px 0', lg: '30px 0', md: '30px 0', sm: '25px 0', xs: '16.5px 0' },
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography id='futicon1'>
                        <FaFacebookF />
                    </Typography>
                    <Typography id='futicon1'>
                        <FaTwitter />
                    </Typography>
                    <Typography id='futicon1'>
                        <FaYoutube />
                    </Typography>
                    <Typography id='futicon1'>
                        <FaPinterestP />
                    </Typography>
                    <Typography id='futicon2'>
                        <FaInstagram />
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                background: 'rgb(41, 64, 87)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Box sx={{
                    width:{xl:'43%',lg:'46%',md:'64%',sm:'84%',xs:'94%'}
                }}>
                    <Typography sx={{
                        fontSize: '15px',
                        color: '#fff',
                        padding: '11px 0 14px 0'
                    }}>
                        SUBSCRIBE FOR UPDATES
                    </Typography>
                    <input type="text" placeholder="Enter your email here*" id='futinp' /> <br />
                    <button id='futbut'>Sumbit</button>
                    <Typography sx={{
                        color:'#fff',
                        fontSize:'14px',
                        letterSpacing:'0.5px',
                        marginTop:'50px',
                        width:'80%',
                        marginLeft:'10%',
                        textAlign:'center',
                        marginBottom:'65px'
                    }}>
                        ©2035 by Gling Urban Bikes. Powered and secured by 
                        <Link href='#'  sx={{
                            color:'#fff',
                            textDecorationColor:'#fff',
                            marginLeft:'3px'
                        }}>Wix</Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default Futter;