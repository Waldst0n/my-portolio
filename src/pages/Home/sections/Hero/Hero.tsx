import {Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from '../../../../assets/images/1694174514925.jpeg'
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
    
    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up("xs")]: {
            paddingTop: "70px",
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: "0",
            
        },
        
    }))

    const StyledImg = styled("img")(() => ({
        width: "75%",
        borderRadius: "50%",
        border: `2px solid ${theme.palette.primary.contrastText}`
    }))

  return (
    <div>
        <StyledHero >
            <Container maxWidth="lg">
            <Grid container spacing={2} >
                <Grid item xs={12} md={5}>
                    <Box position="relative">
                        <Box position="absolute" width={"150%"} top={-100} right={0}>
                            <AnimatedBackground />
                        </Box>
                        <Box position="relative" textAlign="center" >
                            <StyledImg src={Avatar} />           
                        </Box>
                    </Box>
                </Grid >
                <Grid item xs={12} md={7}  >
                    <Typography  color="primary.contrastText" textAlign="center" variant="h1" pb={2}>Waldston Santana</Typography>
                    <Typography color="primary.contrastText" textAlign="center" variant="h2" >Desenvolvedor Fullstack</Typography>
                    <Grid container display="flex" justifyContent={"center"} spacing={3} pt={3} >
                        <Grid item xs={12} md={4} display="flex" justifyContent="center" >
                            <StyledButton onClick={() => console.log("download")}>
                                <DownloadIcon />
                                <Typography>Download CV</Typography>
                            </StyledButton>
                        </Grid>
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                            <StyledButton onClick={() => console.log("contato")
                            } >
                                <EmailIcon />
                                <Typography>Contato</Typography>
                            </StyledButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Container>
        </StyledHero>
        
    </div>
  )
}

export default Hero