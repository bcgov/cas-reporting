"use client";

import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import Button from "@mui/material/Button";
import Main from "./components/layout/Main";

export default function Page() {
  return (
    <>
      <Header />
      <Main>
        <Button
          variant="contained"
          className="w-full md:max-w-[70%] bg-bc-bg-blue"
          sx={{ marginBottom: "24px", width: "100px" }}
        >
          Log in with Business BCeID
        </Button>
        <Button
          variant="contained"
          className="w-full md:max-w-[70%] bg-bc-bg-blue"
          sx={{ width: "100px" }}
        >
          Log in with IDIR
        </Button>
      </Main>
      <Footer />
    </>
  );
}
