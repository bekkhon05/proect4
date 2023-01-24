import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { BsSearch } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import asm from "../../assents/imgs/1.jpg"
import { Blogmap } from '../../assents/blogmap';
function Blog() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ p: "80px 0 80px 0" }}>
                <Box>
                    <Typography sx={{
                        fontSize: "45px",
                        color: "#B99867",
                        textAlign: "center"
                    }}>
                        БЛОГ
                    </Typography>
                </Box>
                <Box sx={{ width: "940px", height: "80px", display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                    <Typography sx={{ fontSize: "15px", color: "rgb(47, 46, 46)", width: "100%" }}>
                        Все посты
                    </Typography>
                    <Typography>
                        <BsSearch />
                    </Typography>
                </Box>
                {Blogmap.map((v, i) => (
                    <Grid container spacing={2} key={i} >
                        <Box sx={{ width: "940px", height: "auto", border: "1px solid rgb(123, 101, 69)", display: 'flex', mt: "30px" }}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Box sx={{ width: "100%", height: "340px" }}>
                                <img src={v.rasm} style={{ width: "100%", height: '100%' }} alt="" />
                            </Box>

                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{p:'25px 35px'}}>
                            <Box sx={{ width: "100%", height: "100%",  }}>
                                <Box sx={{ width: "100%", height: "40px", }}>
                                    <Box sx={{ display: "flex" }}>
                                        <Typography sx={{ width: "40px", height: "40px", background: "grey", borderRadius: "50%" }}>
                                            <img src="" alt="" />
                                        </Typography>

                                        <Box sx={{ ml: '10px' }}>
                                            <Typography sx={{ fontSize: "12px" }}>
                                                Админ
                                            </Typography>
                                            <Typography sx={{ fontSize: "12px" }}>
                                                4 дек. 2022 г. -
                                                1 мин.
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ mt: "20px" }}>
                                        <Typography sx={{ fontSize: "30px", lineHeight: "1.1" }}>
                                            {v.name}
                                        </Typography>
                                        <Typography sx={{ mt: "15px", fontSize: "16px" }}>
                                            Создайте подзаголовок поста: одно-два предложения, которые кратко передают содержание поста и побуждают продолжить чтение.
                                        </Typography>
                                    </Box>
                                    <Box sx={{ width: "100%", height: "1px", background: "grey", mt: "45px" }}></Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: "15px" }}>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography sx={{ fontSize: "13px" }}>
                                                0 просмотров
                                            </Typography>
                                            <Typography sx={{ ml: "10px", fontSize: "13px" }}>
                                                0 комментариев
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <AiFillHeart style={{ color: "red" }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        </Box>
                    </Grid>
                ))}

            </Box>
        </Box >
    )
}

export default Blog