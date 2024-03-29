import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

export default function Layout() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box sx={{ marginTop: "64px" }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
