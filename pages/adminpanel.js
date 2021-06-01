import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "../src/store/actions/team";
import { useRouter } from "next/router";
import Head from "next/head";

import { forwardRef } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import dayjs from "dayjs";
import {
  getRegistrationTime,
  updateRegistrationTime,
} from "../src/store/actions/registration";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { ExitToAppOutlined, Save } from "@material-ui/icons";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => (
    <SaveAlt color={"#000"} {...props} ref={ref} />
  )),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(2),
  },
}));

const combineDateAndTime = (date, time) => {
  const newDate = new Date();

  const year = dayjs(date).format("YYYY");
  const month = dayjs(date).format("MM"); // Jan is 0, dec is 11
  const day = dayjs(date).format("DD");
  const hours = time.substring(0, 2);
  const minutes = time.substring(3, 5);

  newDate.setFullYear(year);
  newDate.setMonth(month - 1);
  newDate.setDate(day);
  newDate.setHours(hours);
  newDate.setMinutes(minutes);

  return newDate;
};

const AdminPanel = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    if (!localStorage.getItem("jwtToken")) {
      router.push("/admin");
    }
    dispatch(getTeams());
  }, []);

  const logoutHandler = () => {
    localStorage.clear();
    router.push("/");
  };

  const { expiration } = useSelector((state) => state.registration);
  const [expireDateFormated, setExpireDateFormated] = useState(
    dayjs(expiration).format("DD.MM.YYYY. [u] HH:mm")
  );
  const [expirationDate, setExpirationDate] = useState(
    dayjs(expiration).format("YYYY-MM-DD")
  );
  const [expirationTime, setExpirationTime] = useState(
    dayjs(expiration).format("HH:mm")
  );
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    !expiration && dispatch(getRegistrationTime());
  }, []);

  useEffect(() => {
    setExpireDateFormated(dayjs(expiration).format("DD.MM.YYYY. [u] HH:mm"));
    setExpirationDate(dayjs(expiration).format("YYYY-MM-DD"));
    setExpirationTime(dayjs(expiration).format("HH:mm"));
  }, [expiration]);

  const { teams } = useSelector((state) => state.teams);

  const nameField = {
    field: "name",
    title: "Ime tima",
    cellStyle: { width: 150, maxWidth: 150 },
    headerStyle: { width: 150, maxWidth: 150 },
  };
  const sizeField = {
    field: "size",
    title: "Broj clanova",
    cellStyle: { width: 150, maxWidth: 150 },
    headerStyle: { width: 150, maxWidth: 150 },
  };
  const leaderField = {
    field: "leader",
    title: "Lider tima",
    cellStyle: { width: 150, maxWidth: 150 },
    headerStyle: { width: 150, maxWidth: 150 },
  };
  const contactField = {
    field: "phoneNumber",
    title: "Kontakt telefon",
    cellStyle: { width: 150, maxWidth: 150 },
    headerStyle: { width: 150, maxWidth: 150 },
  };

  const updateExpireDate = () => {
    setShowEdit(false);
    dispatch(
      updateRegistrationTime(
        combineDateAndTime(expirationDate, expirationTime)
        // () => setShowEdit(false)
      )
    );
  };

  return (
    <>
      <div className="page content adminPanel">
        <Head>
          <title>CyberGames | Admin panel</title>
          <meta
            name="description"
            content="Cyber games, game development tournament"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackSharpIcon />}
          onClick={() => router.push("/")}
        >
          Nazad
        </Button>
        <h1 style={{ marginBottom: 20, marginTop: 20 }}>Prijavljeni timovi</h1>
        <MaterialTable
          icons={tableIcons}
          title="Prijavljeni timovi za 2021. godinu"
          options={{ pageSize: 10, pageSizeOptions: [10, 20, 50] }}
          data={teams ? teams : []}
          columns={[nameField, sizeField, leaderField, contactField]}
          options={{
            draggable: false,
            exportButton: true,
          }}
        />
        <h1 style={{ marginTop: 10 }}>Vreme zavrsetka prijava</h1>
        <div className="change-expiration">
          <h3 style={{ color: "black", marginBottom: 10 }}>
            {expireDateFormated}
          </h3>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Edit />}
            onClick={() => {
              setShowEdit(true);
              setExpirationDate(dayjs(expiration).format("YYYY-MM-DD"));
              setExpirationTime(dayjs(expiration).format("HH:mm"));
            }}
          >
            Izmeni
          </Button>
        </div>
        <br />
        <Button
          variant="contained"
          color="secondary"
          startIcon={<ExitToAppOutlined />}
          onClick={logoutHandler}
          style={{ marginBottom: 30 }}
        >
          Odjavi se
        </Button>
      </div>
      <Dialog
        open={showEdit ? true : false}
        className={classes.paper}
        aria-labelledby="delete-dialog-title"
        style={{ padding: 12 }}
      >
        <DialogTitle id="delete-dialog-title" style={{ color: "black" }}>
          Izmenite vreme kraja prijava
        </DialogTitle>
        <TextField
          className="date-exp"
          id="date"
          label="Datum"
          type="date"
          defaultValue={expirationDate}
          style={{ marginBottom: 12 }}
          className={classes.textField}
          onChange={(e) => setExpirationDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="time"
          label="Vreme"
          type="time"
          defaultValue={expirationTime}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setExpirationTime(e.target.value)}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <DialogActions>
          <Button
            onClick={() => setShowEdit(false)}
            variant="contained"
            color="secondary"
            startIcon={<ArrowBackSharpIcon />}
          >
            Nazad
          </Button>
          <Button
            onClick={updateExpireDate}
            variant="contained"
            color="primary"
            startIcon={<Save />}
          >
            Izmeni
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AdminPanel;
