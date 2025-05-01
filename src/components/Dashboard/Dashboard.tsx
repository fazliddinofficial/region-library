import { Box, Typography } from "@mui/material";

export const Dashboard = () => {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography>Hello world</Typography>
    </Box>
  );
};
