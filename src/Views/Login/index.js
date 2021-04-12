import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Hidden from '@material-ui/core/Hidden';
import {
  createMuiTheme,
  responsiveFontSizes,
  withStyles,
} from "@material-ui/core/styles";
import Logo from "./../../Components/Images/Logo1.svg";
import BlueLogo from "./../../Components/Images/TwitterBlue.svg";
import SearchIcon from "@material-ui/icons/Search";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import Footer from "./../../Components/Footer";
import Loading from '../../Components/Loading';
import config from './../../Config/config';
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import jwt from 'jsonwebtoken';
import axios from "axios"; 
import {encript} from "./../../Utils/utils";
function Alert(props) { 
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  containermain: {
    //diseño del container que tiene todo
    backgroundColor: "#15202B", //color de fondo
    [theme.breakpoints.down('sm')]: {
       flexDirection:'column-reverse',
    },
  },
  input: {
    color: "white",
  },
  fontStyle: {
    fontWeight: 500,
  },
  alignCenter: {
    alignSelf: "center",
    textAlignLast: "left",
  },
  image: {
    maxWidth: "362.64px",
    marginTop: "30px",
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    height: "60px",
  },
  centerwords: {
    color: "white",
    font:
      '30px system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif',
    overflowWrap: "break-word",
    maxWidth: "362.64px",

    fontWeight: 700,
    textAlign: "left",
    marginBottom: "60px",
  },
  centerwords2: {
    color: "white",
    font:
      '15px system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif',
    overflowWrap: "break-word",
    paddingBottom: "20px",
    maxWidth: "362.64px",
    fontWeight: 700,
    textAlign: "justify",
  },
  centerwords3: {
    color: "white",
    font:
      '19px system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif',
    overflowWrap: "break-word",
    marginBottom: "40px",
    maxWidth: "362.64px",
    fontWeight: 700,
    textAlign: "justify",
  },
  gridizquierdo: {
    backgroundImage: `url(${BlueLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "180%",
    backgroundPositionX: "left",
    backgroundPositionY: "center",
    backgroundColor: "rgb(113, 201, 248)",
  },
  gridinterno: {
    height: "228.4px",
    maxWidth: "380px",
    minWidth: "380px",
    alignSelf: "center",
    paddingTop: "15px",
    paddingBottom: "15px",
  },
  gridderecho: {
    marginBottom: "160px",
    paddingTop:"15px",
  },
  iconpad: { color: "white" },
  textAli: {
    textAlign: "left",
    paddingLeft: "20px",
    paddingTop: "2px",
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
const CustomTextField = withStyles((theme) => ({
  root: {
    backgroundColor: "#192734",

    "& .MuiInputBase-input": {
      borderBottom: "3px solid #8899a6",
    },
    "& label.Mui-focused": {
      color: "#1DA1F2",
    },
    "& .MuiInputBase-input:focus": {
      outlineColor: "#1DA1F2",
      borderBottomColor: "#1DA1F2",
    },
    "&:focus": {
      borderBottomColor: "white",
    },
    "& label": {
      color: "#8899a6",
    },
  },
}))(TextField);
const CustomButton = withStyles((theme) => ({
  root: {
    color: "#1DA1F2",
    border: "1px solid #1DA1F2",
    borderRadius: "50px",
    textTransform: "none",
    font:
      '15px system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif',
    fontWeight: 700,

    "&:hover": {
      backgroundColor: "#162D3F",
    },
    "& .MuiButton-label": {
      padding: "5px",
    },
  },
}))(Button);
const CustomButton2 = withStyles((theme) => ({
  root: {
    color: "white",
    border: "1px solid #1DA1F2",
    borderRadius: "50px",
    textTransform: "none",
    backgroundColor: "#1DA1F2",
    font:
      '15px system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif',
    fontWeight: 700,

    "&:hover": {
      backgroundColor: "#1A91DA",
    },
    "& .MuiButton-label": {
      padding: "5px",
    },
  },
}))(Button);

export default function Login() {
  const classes = useStyles();
  const [cuenta, setCuenta] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [globalLoading, setGlobalLoading] = React.useState(false);
  const [alerType, setalerType] = React.useState("error");
  const [message, setMessage] = React.useState('Argumentos no validos');
  const [myAlert, setmyAlert] = React.useState({
    openAlert: false,
    vertical: "top",
    horizontal: "center"
  });
  const { vertical, horizontal, openAlert } = myAlert;
  const handleCloseGlobalLoading = () => {
    setGlobalLoading(false);
  };
  const handleToggleGlobalLoading = () => {
    setGlobalLoading(!globalLoading);
  };
  function handleClickAlert(newState) {

    setmyAlert({ openAlert: true, ...newState });

  };

  const handleCloseAlert = () => {
    setmyAlert({ ...myAlert, openAlert: false });
  };
  const login = (e ) => {
    e.preventDefault();
    if (cuenta == '' || password == '') {
      setMessage(
        "Asegurese de llenar todos los campos."
      );
      setalerType("warning")
      handleClickAlert({ vertical: "top", horizontal: "center" });
    } else {


      //localStorage.setItem('tipo', 'evaluador');
      handleToggleGlobalLoading();
      const passwordEncripted = encript(password);
      console.log("passwordENc ",passwordEncripted);
      axios
        .post(`${config.api.endpoint}/users/login`, {
          user: cuenta,
          password: passwordEncripted
        })
        .then(function (response) {
          //console.log(response.data.docs[0]);
          console.log(response.data.verified);
          console.log(jwt.decode(response.data.token));
          if (response.data.verified === true) {
            /**
            localStorage.setItem("nombre", response.data.docs[0].name);
            localStorage.setItem("apellido", response.data.docs[0].lastname);
            sessionStorage.setItem("id", response.data.docs[0]._id);
            sessionStorage.setItem("roles", response.data.docs[0].roles);
             */
            //console.log('prueba: '+response.data.docs[0].roles);
            localStorage.setItem("archivar", false);
            sessionStorage.setItem("info", response.data.token); 
          } else {
            handleCloseGlobalLoading();
            setMessage(
              "Correo o contraseña incorrecta, por favor intente nuevamente."
            );
            setalerType("warning")
            handleClickAlert({ vertical: "top", horizontal: "center" });
          }
        })
        .catch(function (error) {
          console.log(error);
          handleCloseGlobalLoading();
          setMessage("Error contacte a soporte.")
          handleClickAlert({ vertical: "top", horizontal: "center" });
        });
    }

    //window.location.reload(true);

  };
  return (
    /*La pantalla está dividida en 12 espacios, al asignar al grid sm={6} sabemos que cuando la pantalla sea de resolucion mayor a
       muy pequeña el grid tomará la mitad de la pantalla, y cuando sea xs={12} ese grid tomará el tamaño completo   
      TODO GRID ES CONTAINER SI TIENE GRIDS ADENTRO
       */
      <div>
    <Grid container className={classes.containermain}>
    <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          key={`${vertical},${horizontal}`}
          open={openAlert}
          onClose={handleCloseAlert}
        >
          <Alert onClose={handleCloseAlert} severity={alerType}>
            {message}
          </Alert>
        </Snackbar>
        <Loading
          open={globalLoading}
          setOpen={setGlobalLoading}
          handleClose={handleCloseGlobalLoading}
          handleToggle={handleToggleGlobalLoading}
        />
      {" "}
      {/*Tenemos un grid container que va a tener las 2 divisiones de la pantalla */}
      <Grid
        container
        item
        xs={12}
        sm={6}
        className={classes.gridizquierdo}
        align="center"
        justify="center"
      >
        {" "}
        {/*Primera división izquierda */}
        <Grid container item xs={10} sm={8} className={classes.gridinterno}>
          <Grid item xs={1} sm={1}>
            <SearchIcon fontSize="large" className={classes.iconpad} />
          </Grid>
          <Grid item xs={11} sm={11} className={classes.textAli}>
            <Typography className={classes.centerwords3}>
              Sigue lo que te interesa.
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1}>
            <PeopleOutlineIcon fontSize="large" className={classes.iconpad} />
          </Grid>
          <Grid item xs={11} sm={11} className={classes.textAli}>
            <Typography className={classes.centerwords3}>
              Enterate de que está hablando la gente.
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1}>
            <ChatBubbleIcon fontSize="large" className={classes.iconpad} />
          </Grid>
          <Grid item xs={11} sm={11} className={classes.textAli}>
            <Typography className={classes.centerwords3}>
              Únete a la conversación.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={6}
        spacing={2}
        justify="center"
        align="center"
        className={classes.gridderecho}
      >
        {" "}
        {/*Segunda división derecha */}
        <Hidden smDown>
        <Grid item xs={12} sm={4} style={{ paddingLeft: "40px" }}>
          <label> </label>
          <CustomTextField
            value={cuenta}
            onChange={(e) => setCuenta(e.target.value)}
            label="Teléfono, correo o usuario"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              className: classes.input,
              disableUnderline: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Contraseña"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              className: classes.input,
              disableUnderline: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.alignCenter}>
          <CustomButton  onClick={e => login(e)} disableRipple>Iniciar Sesión</CustomButton>
        </Grid>
        </Hidden>
        <Grid item xs={10} sm={9} className={classes.gridwords}>
          <div className={classes.image} />
          <Typography className={classes.centerwords}>
            {" "}
            Mira lo que está pasando en el mundo en este momento
          </Typography>
          <Typography className={classes.centerwords2}>
            {" "}
            Únete a Twitter hoy mismo.
          </Typography>
          <CustomButton2
            fullWidth
            style={{ maxWidth: "362.64px", marginBottom: "20px" }}
            disableRipple
          >
            Regístrate
          </CustomButton2>
          <CustomButton
            fullWidth
            style={{ maxWidth: "362.64px" }}
            disableRipple
          >
            Iniciar Sesión
          </CustomButton>
        </Grid>
      </Grid>
    
    </Grid>
       <Footer/>
       </div>
  );
}
