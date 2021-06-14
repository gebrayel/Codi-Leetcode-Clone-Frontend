import React, { useState, useContext } from "react";
import clsx from "clsx";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Box,
  CardMedia,
  Collapse,
  IconButton,
  Grid,
  Modal,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CreditCard from "./CreditCard";
import ContinueButton from "../ContinueButton/ContinueButton";
import { CallReceived } from "@material-ui/icons";
import AlertModal from "../Modal/Modal";
import colors from "../../config/colors/colors";
import date from "../../helpers/date/date";
import k from "../../helpers/constants/constants";
import yellowCodi from "../../assets/yellow_codi.png";
import { useHistory } from "react-router-dom";
import AppContext from "../../helpers/context/context";
import payments from "../../api/payments/payments";
import moment from "moment";

const PaymentModal = ({ modal, setModal, price, subscription }) => {
  const classes = useStyles();

  const currentUser = useContext(AppContext);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focused: "",
  });

  const [buttonText, setButtonText] = useState("Continuar");

  const [expanded, setExpanded] = useState(true);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const [openModalError, setOpenModalError] = useState(false);

  const handleClickOpenError = () => {
    setOpenModalError(true);
  };

  const handleClickCloseError = () => {
    setOpenModalError(false);
  };

  const [openModalApi, setOpenModalApi] = useState(false);

  const handleClickOpenApi = () => {
    setOpenModalApi(true);
  };

  const handleClickCloseApi = () => {
    setOpenModalApi(false);
  };

  const [openModalConfirm, setOpenModalConfirm] = useState(false);

  const handleClickOpenConfirm = () => {
    setOpenModalConfirm(true);
  };

  const handleClickCloseConfirm = () => {
    setOpenModalConfirm(false);
  };
  let history = useHistory();

  const subscriptionType = {
    "<Semanal>": 1,
    "{Mensual}": 2,
    "#Anual": 3,
  };

  const redirectToSucces = async () => {
    let actualDate = new Date();
    let dateFormat = "YYYY-MM-DD[ ]HH:mm:ss";

    const paymentInfo = {
      date: moment(actualDate).format(dateFormat),
      amount: price.split(",")[0].replace("$", ""),
      pm_id: 1,
      user_id: currentUser.user.google_id,
      sub_type: subscriptionType[subscription],
    };

    try {
      await payments.createPayment(paymentInfo);
      history.push("/payment_success");
    } catch (error) {
      console.log(error);
    }
  };

  const validateFields = () => {
    return (
      cardInfo.number.length === k.cardNumberLength &&
      cardInfo.name.length >= k.cardNameLength &&
      cardInfo.expiry.length === k.cardExpiryLength &&
      date.validateDate(cardInfo.expiry) &&
      cardInfo.cvc.length === k.cardCvcLength
    );
  };

  const toggleConfirmation = () => {
    if (validateFields()) {
      toggleExpanded();
      if (buttonText == "Continuar") {
        setButtonText("Confirmar");
      } else {
        setButtonText("Continuar");
      }
    } else {
      handleClickOpenError();
    }
  };

  const buttonNext = () => {
    if (expanded) {
      toggleConfirmation();
    } else {
      handleClickOpenConfirm();
    }
  };

  const msgError = {
    variant: "",
    color: "secondary",
    text: "Campos inválidos",
    title: "Campos inválidos",
    description: "Revise y rellene cuidadosamente los campos del formulario",
    acceptText: "Cerrar",
    cancelText: "Cerrar",
  };

  const msgContiue = {
    variant: "",
    color: "secondary",
    text: "Confirmación de pago",
    title: "Confirmación de pago",
    description: "¿Esta seguro que quiere realizar el pago?",
    acceptText: "Confirmar",
    cancelText: "Cancelar",
  };

  const msgErrorAPI = {
    variant: "",
    color: "secondary",
    text: "Error al pagar",
    title: "Error al pagar",
    description:
      "Ocurrió un error al realizar el pago, revise los campos o inténtelo más tarde",
    acceptText: "Cerrar",
    cancelText: "Cerrar",
  };

  const body = (
    <Box className={classes.container}>
      <Box className={classes.shoppingConfirmation}>
        <ShoppingCartOutlinedIcon className={classes.icon} />
        <p>Confirmación de compra</p>
      </Box>
      <Box className={classes.subscriptionSelection}>
        <CardMedia
          className={classes.media}
          image="../"
          title="Contemplative Reptile"
        />
        <Box className={classes.subscriptionInformation}>
          <img className={classes.image} src={yellowCodi} alt="Yellow Codi" />
          <Box className={classes.package}>
            <p> {subscription} </p>
            <p> {price} </p>
          </Box>
        </Box>
      </Box>
      <Box className={classes.paymentInformation} onClick={toggleConfirmation}>
        <Box className={classes.circle}>1</Box>
        <p>Datos de Pago</p>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon className={classes.expandIcon} />
        </IconButton>
      </Box>
      <Box className={classes.cardContainer}>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CreditCard
            editable={true}
            cardInfo={cardInfo}
            setCardInfo={setCardInfo}
          />
        </Collapse>
      </Box>
      <Box className={classes.paymentConfirmation} onClick={toggleConfirmation}>
        <Box className={classes.circle}>2</Box>
        <p>Confirmación de Pago</p>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: !expanded,
          })}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon className={classes.expandIcon} />
        </IconButton>
      </Box>

      <Box className={classes.cardContainer}>
        <Collapse in={!expanded} timeout="auto" unmountOnExit>
          <CreditCard
            editable={false}
            cardInfo={cardInfo}
            setCardInfo={setCardInfo}
          />
        </Collapse>
      </Box>
      <Box className={classes.bottomContainer}>
        <Box className={classes.AmountInformation}>
          <p>Total de Compra: </p>
          <p> {price} </p>
        </Box>
        <ContinueButton
          buttonText={buttonText}
          setButtonText={setButtonText}
          onClick={() => buttonNext()}
        />
      </Box>
      <AlertModal
        modalDesing={"desktop"}
        modalTitle={"Cerrar Sesion"}
        variant={msgError.variant}
        color={msgError.color}
        text={msgError.text}
        title={msgError.title}
        description={msgError.description}
        acceptText={msgError.acceptText}
        cancelText={msgError.cancelText}
        passedBlueFunction={handleClickCloseError}
        handleClickOpen={handleClickOpenError}
        handleClickClose={handleClickCloseError}
        open={openModalError}
        setOpen={setOpenModalError}
        renderButton={false}
        singleButton={true}
      />
      <AlertModal
        modalDesing={"desktop"}
        modalTitle={"Cerrar Sesion"}
        variant={msgContiue.variant}
        color={msgContiue.color}
        text={msgContiue.text}
        title={msgContiue.title}
        description={msgContiue.description}
        acceptText={msgContiue.acceptText}
        cancelText={msgContiue.cancelText}
        passedRedFunction={handleClickCloseConfirm}
        passedBlueFunction={redirectToSucces}
        handleClickOpen={handleClickOpenConfirm}
        handleClickClose={handleClickCloseConfirm}
        open={openModalConfirm}
        setOpen={setOpenModalConfirm}
        renderButton={false}
        singleButton={false}
      />
      <AlertModal
        modalDesing={"desktop"}
        modalTitle={"Cerrar Sesion"}
        variant={msgErrorAPI.variant}
        color={msgErrorAPI.color}
        text={msgErrorAPI.text}
        title={msgErrorAPI.title}
        description={msgErrorAPI.description}
        acceptText={msgErrorAPI.acceptText}
        cancelText={msgErrorAPI.cancelText}
        passedRedFunction={handleClickCloseApi}
        passedBlueFunction={handleClickCloseApi}
        handleClickOpen={handleClickCloseApi}
        handleClickClose={handleClickCloseApi}
        open={openModalApi}
        setOpen={setOpenModalApi}
        renderButton={false}
        singleButton={true}
      />
    </Box>
  );

  return (
    <Modal
      className={classes.modal}
      open={modal}
      onClose={toggleModal}
      disableAutoFocus={true}
    >
      <Grid xs={11} sm={10} md={7} lg={5} xl={3} className={classes.grid}>
        {body}
      </Grid>
    </Modal>
  );
};

const useStyles = makeStyles((theme) => ({
  modal: {
    width: "100vw",
    height: "100vh",
    color: colors.white,
    backgroundColor: colors.paymentModalBackground,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: colors.background,
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
    },
  },
  grid: {
    outline: "none",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "540px",
    },
  },
  shoppingConfirmation: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottom: "solid 1px white",
  },
  icon: {
    color: colors.white,
    padding: "0 10px 0 20px",
  },
  subscriptionSelection: {
    width: "calc(100% - 35px)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottom: "solid 1px white",
    padding: "5px 20px 5px 15px",
  },
  subscriptionInformation: {
    width: "calc(100% - 10px)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "auto",
    height: "52px",
    [theme.breakpoints.down("xs")]: {
      height: "40px",
    },
  },
  package: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "10px",
    justifyContent: "space-between",
  },
  paymentInformation: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottom: "solid 1px white",
    cursor: "pointer",
  },
  circle: {
    width: "25px",
    height: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: "100%",
    color: colors.darkText,
    margin: "0 10px 0 20px",
    [theme.breakpoints.down("xs")]: {
      width: "20px",
      height: "20px",
    },
  },
  paymentConfirmation: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottom: "solid 1px white",
    cursor: "pointer",
  },
  cardContainer: {
    borderBottom: "solid 1px white",
    "& .MuiCollapse-wrapperInner": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  bottomContainer: {
    width: "calc(100% - 40px)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
  },
  AmountInformation: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "40px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  expandIcon: {
    color: colors.white,
  },
}));

export default PaymentModal;
