import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import "./style.css"
import rasm from "../../assents/imgs/1.jpg"
import rasm1 from "../../assents/imgs/2.jpg"
import rasm2 from "../../assents/imgs/3.jpg"
import rasm4 from "../../assents/imgs/45.png"
import rasm5 from "../../assents/imgs/46.png"
function Home() {
    return (
        <Box>
            <Box >
                

                <Box id='rang' sx={{ justifyContent: "center", display: "flex" }} >
                </Box>
                <Box sx={{ width: "100%", height: "auto", p: "100px 0 60px 0" }}>
                    <Typography sx={{ textAlign: "center", fontSize: "40px", color: '#294057' }}>
                        НОВЫЕ ПОСТУПЛЕНИЯ
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", }}>
                        <Grid container spacing={2} sx={{ width: { lg: "80%", md: "100%", sm: "100%", xs: "100%" } }}>
                            <Grid item lg={4} md={4} sm={6} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                                <img src={rasm2} alt="" />

                            </Grid>
                            <Grid item lg={4} md={4} sm={6} xs={12} sx={{ display: "flex", justifyContent: "center" }}>

                                <img src={rasm} alt="" />
                            </Grid>
                            <Grid item lg={4} md={4} sm={6} xs={12} sx={{ display: "flex", justifyContent: "center" }}>

                                <img src={rasm1} alt="" />
                            </Grid>

                        </Grid>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", p: "30px 0" }}>
                        <Box sx={{ width: "220px", height: "50px", border: "2px solid #294057", display: "flex", justifyContent: "center", alignItems: "center", "&:hover": { background: "#294057", color: "white", transition: ".3s" }, color: "#C99867", cursor: "pointer" }}>
                            <Typography sx={{ fontSize: "16px", fontFamily: '"open sans", sans-serif', }}>
                                СМОТРЕТЬ КОЛЛЕКЦИЮ

                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: "100%", height: "auto", background: "#294057", p: "40px 0" }}>
                    <Typography sx={{ fontSize: "60px", color: "#C99867", textAlign: "center", height: "50px" }}>
                        "
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Typography sx={{ fontSize: "24px", width: "480px", textAlign: "center", color: "white", height: "auto" }}>
                            Это текст. Кликните дважды, чтобы отредактировать и рассказать о себе.
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Grid container spacing={0}>
                        <Grid item xlg={6} md={6} sm={6} xs={12}>
                            <Box sx={{ width: "100%", height: "100%", }}>
                                <Box sx={{ width: "100%",  background: "white", height: "620px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Typography >
                                        <Typography style={{ fontSize: "40px", color: '#B99867', }}>О НАС</Typography>
                                        <Typography sx={{ width: "340px", mt: "30px", color: "grey" }}>
                                            Это раздел «О нас». Самое место рассказать вашу историю и объяснить, чем вы занимаетесь. Если вы владелец бизнеса, напишите, как все начиналось, как вам пришла в голову та самая идея и к чему это привело. Людям будет интересно увидеть в вас реальную личность, поэтому не бойтесь делиться настоящими случаями из жизни. Расскажите о ваших ценностях и чем вы отличаетесь от конкурентов.
                                        </Typography>

                                        <Box sx={{ width: "160px", height: "50px", border: "2px solid #294057", display: "flex", justifyContent: "center", alignItems: "center", "&:hover": { background: "#294057", color: "white", transition: ".3s" }, color: "#C99867", cursor: "pointer", mt: "30px" }}>
                                            <Typography sx={{ fontSize: "16px", fontFamily: '"open sans", sans-serif', }}>
                                                ЗАЙТИ В ГОСТИ
                                            </Typography>
                                        </Box>

                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12} sx={{ width: "100%" }}>
                            <Box sx={{ width: "100%", height: "620px",  }}>
                                <img src={rasm5} style={{ width: "100%", height: "100%", }} alt="" />
                            </Box>
                        </Grid>

                    </Grid>


                    <Grid container spacing={0}>
                        <Grid item lg={6} md={6} sm={6} xs={12} sx={{ width: "100%" }}>
                            <Box sx={{ width: "100%", height: "620px", }}>
                                <img src={rasm4} style={{ width: "100%", height: "100%", }} alt="" />
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Box sx={{ width: "100%", height: "100%", }}>
                                <Typography sx={{ width: "100%", background: "white", minHeight: "620px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Box >
                                        <Typography style={{ fontSize: "40px", color: '#B99867', width: "200px" }}>
                                            СВОБОДА
                                            ДВИЖЕНИЙ</Typography>
                                        <Typography sx={{ width: "350px", mt: "30px", color: "grey" }}>
                                            Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе.
                                        </Typography>

                                        <Box sx={{ width: "160px", height: "50px", border: "2px solid #294057", display: "flex", justifyContent: "center", alignItems: "center", "&:hover": { background: "#294057", color: "white", transition: ".3s" }, color: "#C99867", cursor: "pointer", mt: "30px" }}>
                                            <Typography sx={{ fontSize: "16px", fontFamily: '"open sans", sans-serif', }}>
                                                ЗАЙТИ В ГОСТИ
                                            </Typography>
                                        </Box>

                                    </Box>
                                </Typography>
                            </Box>
                        </Grid>


                    </Grid>
                </Box>



            </Box>
        </Box>
    )
}

export default Home