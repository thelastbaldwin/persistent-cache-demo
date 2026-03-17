"use client";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import Loading from "./Loading";
import { useContext } from "react";
import { LoadingContext } from "../context";

const Header = () => {
  const { loading } = useContext(LoadingContext);

  return (
    <AppBar position="relative">
      <Toolbar>
        <Link href="/">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Persistent Cache Demo
          </Typography>
        </Link>
      </Toolbar>
      {loading && (
        <Box
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
          }}
        >
          <Loading />
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
