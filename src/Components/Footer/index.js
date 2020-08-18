import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {
  createMuiTheme,
  responsiveFontSizes,
  withStyles,
} from "@material-ui/core/styles";
import Logo from "./../../Components/Images/Logo1.svg";
import BlueLogo from "./../../Components/Images/TwitterBlue.svg";
const useStyles = makeStyles((theme) => ({
  containermain: {
    //diseño del container que tiene todo
    backgroundColor: "#15202B", //color de fondo
    justifyContent:'center',
    font: '13px system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif',
    color:'rgb(136, 153, 166)',
    padding:'20px',
  },
  paddings:{
     paddingRight:'15px',
  },
 
}));
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
theme.typography.h3 = {
  fontSize: "25px",

  [theme.breakpoints.up("md")]: {
    fontSize: "40px",
  },
};
 

export default function Footer() {
  const classes = useStyles();
  return(
    <Grid container item xs={12} sm={12}   className={classes.containermain}>
        <Grid item className={classes.paddings}>
         Acerca de
       </Grid>
       <Grid item className={classes.paddings}>
       Centro de ayuda
       </Grid >
       <Grid item className={classes.paddings}>
       Términos
       </Grid>
       <Grid item className={classes.paddings}>
       Política de privacidad
       </Grid>
       <Grid item className={classes.paddings}>
       Cookies
       </Grid>
       <Grid item className={classes.paddings}>
       Información de anuncios
       </Grid>
       <Grid item className={classes.paddings}>
       Blog
       </Grid>
       <Grid item className={classes.paddings}>
       Estado
       </Grid>
       <Grid item className={classes.paddings}>
       Trabajos
       </Grid>
       <Grid item className={classes.paddings}>
       Marca
       </Grid>
       <Grid item className={classes.paddings}>
       Publicar anuncios
       </Grid>
       <Grid item className={classes.paddings}>
       Marketing
       </Grid>
       <Grid item className={classes.paddings}>
       Empresas
       </Grid>
       <Grid item className={classes.paddings}>
       Desarrolladores
       </Grid>
       <Grid item className={classes.paddings}>
       Guía
       </Grid>
       <Grid item className={classes.paddings}>
       Configuración
       </Grid>
       <Grid item className={classes.paddings}>
       © 2020 Twitter, Inc.
       </Grid>
    </Grid>
  );
}
