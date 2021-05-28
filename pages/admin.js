import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../src/components/Input/Input";
import { login } from "../src/store/actions/user";
import { useRouter } from "next/router";
import { Button } from "@material-ui/core";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";
import DoneAllIcon from "@material-ui/icons/DoneAll";

const AdminPage = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password, loginCallback, errorCallback));
  };

  useEffect(() => {
    if (localStorage.getItem("jwtToken")) {
      router.push("/adminpanel");
    }
  }, []);

  const loginCallback = () => {
    router.push("/adminpanel");
  };

  const errorCallback = (err) => {
    setError(err);
  };

  return (
    <div className="page">
      <Head>
        <title>CyberGames | Admin login</title>
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
        style={{ marginTop: 40, marginLeft: 60 }}
      >
        Nazad
      </Button>
      <div className="content prijava">
        <h1>Admin panel</h1>
        <h3>Login</h3>
        <form onSubmit={onSubmit}>
          <Input
            placeholder="Korisničko ime"
            required
            value={username}
            onChange={(val) => setUsername(val)}
          />
          <Input
            placeholder="Lozinka"
            required
            type="password"
            value={password}
            onChange={(val) => setPassword(val)}
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
      </div>
    </div>
  );
};

export default AdminPage;
