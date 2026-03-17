"use client";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import Loading from "./Loading";
import { useContext } from "react";
import { LoadingContext } from "../context";

const Header = () => {
  const { loading } = useContext(LoadingContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Persistent Cache Demo
          </Typography>
        </Link>
      </Toolbar>
      {loading && <Loading />}
    </AppBar>
  );
};

export default Header;
