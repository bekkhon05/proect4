import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Grid } from '@mui/material';
import { FaFacebook, FaTwitter, FaLinkedin,FaProjectDiagram } from 'react-icons/fa';
import "./style.css"

export default function SimpleAccordion() {
    return (
        <div>
            <Accordion className='ac'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className="acname"> Как добавить вопросы и ответы?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: "start" }} >
                    <Typography className="acname">
                        Чтобы добавить раздел с ответами на вопросы:
                    </Typography>
                    <Box sx={{ marginLeft: "40px" }}>
                        <Typography className="acname">
                            1. Нажмите кнопку «Настроить FAQ».
                        </Typography>
                        <Typography className="acname">
                            2. В панели управления сайтом нажмите «Добавить» и выберите «Вопрос и ответ».
                        </Typography>
                        <Typography className="acname">
                            3. Каждой новой паре вопрос-ответ должна быть присвоена категория.
                        </Typography>
                        <Typography className="acname">
                            4. Сохраните и опубликуйте.
                        </Typography>
                    </Box>
                    <Typography className="acname">
                        Вы всегда можете отредактировать вопросы и ответы, изменить их порядок или назначить им другие категории.
                    </Typography>
                    <Box sx={{display:"flex",gap:"8px",marginBottom:"10px"}}>
                    <Typography sx={{ margin: "0px 8px 0px 0px" ,color:"rgb(41, 64, 87)",fontSize:"20px"}}>
                        <FaFacebook />
                    </Typography>
                    <Typography sx={{ margin: "0px 8px 0px 0px",color:"rgb(41, 64, 87)",fontSize:"20px" }}>
                        <FaTwitter />
                    </Typography>
                    <Typography sx={{ margin: "0px 8px 0px 0px",color:"rgb(41, 64, 87)",fontSize:"20px" }}>
                        <FaLinkedin />
                    </Typography>
                    <Typography sx={{ margin: "0px 8px 0px 0px",color:"rgb(41, 64, 87)",fontSize:"20px" }}>
                        <FaProjectDiagram />
                    </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion className='ac'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className="acname"> Можно ли добавить в FAQ изображение, видео или гифку?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: "start" }} >
                    <Typography className="acname">
                        Можно. Чтобы добавить медиафайл:
                    </Typography>
                    <Box sx={{ marginLeft: "40px" }}>
                        <Typography className="acname">
                            1. Откройте настройки приложения.
                        </Typography>
                        <Typography className="acname">
                            2. Нажмите «Управлять FAQ»
                        </Typography>
                        <Typography className="acname">
                            3. Создайте или выберите вопрос, в который хотите добавить медиафайл.
                        </Typography>
                        <Typography className="acname">
                            4. При редактировании ответа нажмите значок видео, изображения или гифки.
                        </Typography>
                        <Typography className="acname">
                            5. Добавьте медиафайл из библиотеки и сохраните.
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex",gap:"8px",marginBottom:"10px"}}>
                    <Typography sx={{ margin: "0px 8px 0px 0px" ,color:"rgb(41, 64, 87)",fontSize:"20px"}}>
                        <FaFacebook />
                    </Typography>
                    <Typography sx={{ margin: "0px 8px 0px 0px",color:"rgb(41, 64, 87)",fontSize:"20px" }}>
                        <FaTwitter />
                    </Typography>
                    <Typography sx={{ margin: "0px 8px 0px 0px",color:"rgb(41, 64, 87)",fontSize:"20px" }}>
                        <FaLinkedin />
                    </Typography>
                    <Typography sx={{ margin: "0px 8px 0px 0px",color:"rgb(41, 64, 87)",fontSize:"20px" }}>
                        <FaProjectDiagram />
                    </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion className='ac'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className="acname">Как отредактировать или удалить заголовок раздела FAQ?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign: "start" }} >
                    <Typography className="acname">
                        Отредактировать заголовок можно на вкладке «Настройки» приложения. Если вы не хотите, чтобы заголовок отображался, деактивируйте флажок «Текст заголовка» в разделе «Показать».
                    </Typography>
                    <Box sx={{display:"flex",gap:"8px",marginBottom:"10px"}}>
                    <Typography sx={{ margin: "0px 8px 0px 0px" ,color:"rgb(41, 64, 87)",fontSize:"20px"}}>
                        <FaFacebook />
                    </Typography>
                    <Typography sx={{ margin: "0px 8px 0px 0px",color:"rgb(41, 64, 87)",fontSize:"20px" }}>
                        <FaTwitter />
                    </Typography>
                    <Typography sx={{ margin: "0px 8px 0px 0px",color:"rgb(41, 64, 87)",fontSize:"20px" }}>
                        <FaLinkedin />
                    </Typography>
                    <Typography sx={{ margin: "0px 8px 0px 0px",color:"rgb(41, 64, 87)",fontSize:"20px" }}>
                        <FaProjectDiagram />
                    </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}