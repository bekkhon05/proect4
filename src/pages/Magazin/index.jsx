import React from 'react'
import { Box, Grid, Link, Typography } from "@mui/material"
import { MagazinMap } from '../../assents/Magazinmap/magazin'
import "./style.css"
function Magazin() {
    return (
        <>
            <Box sx={{
                textAlign: "center",
                paddingTop: "100px",
                marginBottom: "100px"
            }}>
                <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={11} lg={6} md={6} sm={11} xl={12} sx={{ textAlign: "center", }}>
                        <Typography variant='h2' sx={{
                            textAlign: "center",
                            fontSize: "45px",
                            letterSpacing: "0.1em",
                            color: "#B99867"
                        }}>
                            НАША КОЛЛЕКЦИЯ
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={11} lg={8} md={10} sm={11} xl={6} >
                        <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={6}>
                        {MagazinMap.map((val, v) => (
                            <Grid key={v} item xs={11} lg={4} md={4} sm={5.5} xl={4} sx={{marginBottom:"10px"}}>
                                <Box sx={{ width: "100%" }}>
                                    <Box className="container">
                                        <img src={val.img} alt="Avatar" class="image" />
                                        <span class="INg0tB FbHYze oOOCOE" style={{opacity:(val.opa)}}>СКИДКА {val. skit}%</span>
                                        <Box className="overlay">
                                            <Typography className="text">Быстрый просмотр</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        padding: "16px 0px 0px",
                                    }}>
                                        <Box>
                                            <Typography variant='h3' sx={{
                                                color:"#294057",
                                                fontSize:"18px",
                                                marginBottom:"5px"
                                            }}>
                                                Ваш товар
                                            </Typography>
                                            <Typography class="narx">
                                                <span style={{
                                                    textDecoration: "line-through",
                                                }}>{val.narx2}</span>
                                                <span >{val.narx}</span>
                                            </Typography>
                                        </Box>

                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                        </Grid>
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}
export default Magazin