import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { BiTime } from "react-icons/bi";
function Kontakt() {
  return (
    <Box>
      <Box>
        <Box>
          <Typography sx={{
            fontSize: "45px",
            color: "#B99867",
            textAlign: "center",
            
          }}>
            ЖДЕМ В ГОСТИ
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
          <Box sx={{ width: "70%", height: 'auto', display: "flex", p: "60px 0" }}>

            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box sx={{ width: "100%", height: "100%", textAlign: "center", }}>
              <CiLocationOn style={{ fontSize: "75px", color: "#B99867" }} />
              <Typography sx={{ fontSize: "25px", color: "#294057" }}>
                НАШ АДРЕС
              </Typography>
              <Typography sx={{ fontSize: "17px", mt: "10px", color: "#605E5E" }}>
                Ул. Арбат, 1а, Москва,
              </Typography>
              <Typography sx={{ fontSize: "17px", mt: "10px", color: "#605E5E" }}>
                119019, Россия
              </Typography>
              <Typography sx={{ fontSize: "17px", mt: "10px", color: "#605E5E" }}>
                info@mysite.ru  |   +7 (495) 000-00-00
              </Typography>
              <Typography sx={{ mt: "20px", color: "#B99867", cursor: "pointer" }}>
                Смотреть на карте
              </Typography>
            </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box sx={{ width: "100%", height: "100%", textAlign: "center", borderLeft: {lg:"1px solid  #B99867", md:"1px solid  #B99867", sm:"none", xs:"none"} }}>
              <BiTime style={{ fontSize: "75px", color: "#B99867" }} />
              <Typography sx={{ fontSize: "25px", color: "#294057" }}>
                ЧАСЫ РАБОТЫ
              </Typography>
              <Typography sx={{ fontSize: "17px", mt: "10px", color: "#605E5E" }}>
                Понедельник — пятница: 10:00–20:00
              </Typography>
              <Typography sx={{ fontSize: "17px", mt: "10px", color: "#605E5E" }}>
                Суббота: 11:00–18:00
              </Typography>
              <Typography sx={{ fontSize: "17px", mt: "10px", color: "#605E5E" }}>
                Воскресенье: 12:00–16:00
              </Typography>
            </Box>

              </Grid>
            </Grid>
            

           
          </Box>

        </Box>

        <Box sx={{ width: "100%", height: "auto", background: "#294057", display: "flex", justifyContent: "center", alignItems: "center", p: "60px 0" }}>
          <Box sx={{ width: { lg: "55%", md: "65%", sm: "70%", xs: "90%" }, height: "50%", p: "10px" }}>


            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography sx={{ color: "white" }}>
                  Вы можете написать нам на имейл info@mysite.com или просто заполнить эту форму:
                </Typography>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box sx={{ width: "100%" }}>
                  <Typography sx={{ mt: "5px" }}>
                    <input type="text" style={{ width: "98%", height: "28px", background: "none", border: "1px solid white", color: "white", padding: "0 0px 0 15px" }} placeholder="Name" color='white' />
                  </Typography>
                  <Typography sx={{ mt: "5px" }}>
                    <input type="text" style={{ width: "98%", height: "28px", background: "none", border: "1px solid white", color: "white", padding: "0 0px 0 15px" }} placeholder="Gmail" />
                  </Typography>
                  <Typography sx={{ mt: "5px" }}>
                    <input type="text" style={{ width: "98%", height: "28px", background: "none", border: "1px solid white", color: "white", padding: "0 0px 0 15px" }} placeholder="Number" />
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box sx={{ width: "100%", mt: "5px", }}>
                  <input type="text" style={{ width: "100%", height: "95px", background: "none", border: "1px solid white", color: "white" }} />
                  <Box sx={{ display: "flex", justifyContent: "right", mt: "10px" }}>
                    <Typography sx={{ width: "130px", height: "30px", border: "1px solid grey", display: "flex", justifyContent: "center", alignItems: "center", background: "white", "&:hover": { color: "white", background: "#B99867", cursor: "pointer" }, transition: ".2s" }}>
                      Отправить
                    </Typography>
                  </Box>
                </Box>
              </Grid>

            </Grid>

            {/* <Box sx={{ display: "flex", justifyContent: "space-between", mt: "25px" }}>

              
            </Box> */}
          </Box>

        </Box>

        <Box sx={{ width: "100%", height: "60vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Box sx={{ width: { lg: "55%", md: "65%", sm: "70%", xs: "90%" }, height: "300px" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47955.529859584916!2d69.26172159999999!3d41.304064000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1665154251123!5m2!1sru!2s"
              width="100%" height="100%" style={{ border: 0 }} allowfullscreen=""
              loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Box>

        </Box>
      </Box>
    </Box>
  )
}

export default Kontakt