import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Input from "../src/components/Input/Input";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
// actions
import { getTeams, postTeam } from "../src/store/actions/team";
// import { successNotification } from "../src/store/actions/notification";
import dayjs from "dayjs";
import { Button } from "@material-ui/core";
import { getRegistrationTime } from "../src/store/actions/registration";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import HomeIcon from "@material-ui/icons/Home";
import { useRouter } from "next/router";

let now = new Date();

const Prijava = () => {
  const dispatch = useDispatch();
  const [teamName, setTeamName] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [teamLeader, setTeamLeader] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [applicationSuccess, setApplicationSuccess] = useState(false);
  const [error, setError] = useState();
  const router = useRouter();

  const { expiration } = useSelector((state) => state.registration);
  const { teams } = useSelector((state) => state.teams);

  const [expireDateFormated, setExpireDateFormated] = useState(
    dayjs(expiration).format("DD.MM.YYYY. [u] HH:mm")
  );
  const [expireDate, setExpireDate] = useState(new Date(expiration));

  useEffect(() => {
    !expiration && dispatch(getRegistrationTime());
    dispatch(getTeams());
  }, []);

  useEffect(() => {
    setExpireDateFormated(dayjs(expiration).format("DD.MM.YYYY. [u] HH:mm"));
    setExpireDate(new Date(expiration));
  }, [expiration]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (teams.find((elem) => elem.name === teamName)) {
      setError("Ime tima je zauzeto, probajte neko drugo");
      return;
    }
    if (!phoneNumberValidator(phoneNumber)) {
      setError("Unesite validan broj telefona");
      return;
    }
    dispatch(
      postTeam(teamName, teamSize, teamLeader, phoneNumber, successCallback)
    );
  };

  function phoneNumberValidator(inputtxt) {
    var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (inputtxt.match(phoneno)) {
      return true;
    } else {
      return false;
    }
  }

  const successCallback = () => {
    setApplicationSuccess(true);
  };

  return (
    <div className="page">
      <Head>
        <title>CyberGames | Prijava</title>
        <meta
          name="description"
          content="Cyber games, game development tournament"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {applicationSuccess ? (
        <div className="content prijava">
          <IoCheckmarkDoneCircle className="check-svg" />
          <h1>Čestitamo! Vaša prijava je uspešna!</h1>
          <Button
            variant="contained"
            color="primary"
            startIcon={<HomeIcon />}
            onClick={() => {
              router.push("/");
              setApplicationSuccess(false);
            }}
            style={{ marginTop: 60 }}
          >
            Početna strana
          </Button>
        </div>
      ) : (
        <>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ArrowBackSharpIcon />}
            onClick={() => router.push("/")}
            style={{ marginTop: 40, marginLeft: 60 }}
          >
            Nazad
          </Button>
          <div className="content prijava">
            <h1>Prijava</h1>
            <h3>Prijave su otvorene do: {`${expireDateFormated}`}</h3>
            {expireDate - now < 0 ? (
              <h1>Vreme za prijave je nažalost isteklo</h1>
            ) : (
              <form onSubmit={onSubmit}>
                <Input
                  placeholder="Ime tima"
                  required
                  value={teamName}
                  onChange={(val) => setTeamName(val)}
                />
                <Input
                  placeholder="Broj clanova"
                  required
                  type="number"
                  value={teamSize}
                  onChange={(val) => setTeamSize(val)}
                />
                <Input
                  placeholder="Ime kapitena"
                  required
                  value={teamLeader}
                  onChange={(val) => setTeamLeader(val)}
                />
                <Input
                  placeholder="Broj telefona"
                  type="tel"
                  // pattern="+[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                  value={phoneNumber}
                  onChange={(val) => setPhoneNumber(val)}
                />
                {error ? (
                  <p style={{ color: "red", fontSize: 16 }}>{error}</p>
                ) : (
                  <div style={{ height: 20 }} />
                )}
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  startIcon={<DoneAllIcon />}
                  style={{ marginTop: 20 }}
                >
                  Prijavi se
                </Button>
              </form>
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default Prijava;
