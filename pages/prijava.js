import * as React from "react";
import Head from "next/head";
import Link from "next/link";

const Prijava = () => {
  const [teamName, setTeamName] = React.useState("");
  const [teamSize, setTeamSize] = React.useState("");
  const [teamLeader, setTeamLeader] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
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
      <div className="goBack">
        <Link href="/">Nazad</Link>
      </div>
      <div className="content prijava">
        <h1>Prijava</h1>
        <h3>Prijave su otvorene do: 24.06.2021. 18:00</h3>
        <form onSubmit={onSubmit}>
          <input
            placeholder="Ime tima"
            required
            onChange={(e) => setTeamName(e.target.value)}
          />
          <input
            placeholder="Broj clanova"
            required
            onChange={(e) => setTeamSize(e.target.value)}
          />
          <input
            placeholder="Ime kapitena"
            required
            onChange={(e) => setTeamLeader(e.target.value)}
          />
          <input
            placeholder="Broj telefona"
            type="tel"
            // pattern="+[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit">Prijavi se</button>
        </form>
      </div>
    </div>
  );
};
export default Prijava;
