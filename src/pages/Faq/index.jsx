import * as React from 'react';
import { Box, Grid, Typography } from "@mui/material"
import { FaSistrix } from 'react-icons/fa';
import SimpleAccordion from './acardion';

function Faq() {
    return (
        <>
            <Box sx={{
                textAlign: "center",
                paddingTop: "100px",
                marginBottom: "60px"
            }}>
                <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={11} lg={6} md={6} sm={11} xl={12} sx={{ textAlign: "center", }}>
                        <Typography variant='h2' sx={{
                            textAlign: "center",
                            fontSize: "45px",
                            letterSpacing: "0.1em",
                            color: "#B99867"
                        }}>
                            FAQ
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ marginBottom: "20px" }}>
                <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={12} lg={5.5} md={6.4} sm={6.5} xl={4} sx={{ textAlign: "center", }}>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography variant='h2' sx={{
                                textAlign: "center",
                                letterSpacing: "0.1em",
                                color: "rgb(47, 46, 46)",
                                fontSize: "26px"
                            }} >
                                Часто задаваемые вопросы
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={0.1} md={0.1} sm={0.1} xl={0.1} sx={{ textAlign: "center", }}>
                        <Box sx={{ left: "100px" }}>
                            <Typography sx={{ fontSize: "23px", paddingLeft: {xl:"100px",lg:"100px",md:"100px",sm:"100px",xs:"0px"} }}>
                                <FaSistrix />
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
            <Box sx={{ marginBottom: "50px" }}>
                <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={11} lg={8} md={10} sm={11} xl={6}>
                        <Box sx={{display:"flex"}}>
                            <Typography sx={{
                                fontWeight:"700",
                                cursor: "default",
                                paddingRight:"30px",
                                color:"rgb(95, 112, 129)",
                                fontSize:"14px",
                                lineHeight:"40px"
                            }}>
                            Настройка раздела FAQ
                            </Typography>
                            <Typography sx={{
                                fontWeight:"500",
                                cursor: "default",
                                paddingRight:"30px",
                                color:"rgb(95, 112, 129)",
                                fontSize:"14px",
                                lineHeight:"40px"
                            }}>
                           Общее
                            </Typography>

                        </Box>
                        <SimpleAccordion />
                    </Grid>
                </Grid>
            </Box>


        </>
    )
}
export default Faq