import { Box, Container, Grid, Paper, styled, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { green } from "@mui/material/colors";
import SvgIcon from "@mui/material/SvgIcon";
import logo from "../images/logo.jpeg";

// function CheckIcon(props) {
//     return (
//         <SvgIcon {...props}>
//             <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//         </SvgIcon>
//     );
// }

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Confirmation() {
  return (
    <div>
      <div className="confirmBox">
        <Box sx={{ padding: "10px" }}>
          <Grid container>
            <Grid item>
              {/* <svg data-testid="CheckIcon"></svg> */}
              {/* <CheckIcon sx={{ color: "green", width: "100px", margin: "0 auto" }} /> */}

              <div
                stylw={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    "& > :not(style)": {
                      m: 2,
                    },
                  }}
                >
                  <CheckIcon
                    alignItems="center"
                    sx={{
                      alignItems: "center !important",
                      fontSize: "400",
                      color: green[500],
                    }}
                  />
                </Box>
              </div>

              <Typography sx={{ textAlign: "justify", color: green[500] }}>
                Thank you for booking with Travel Explorer! Your booking
                confirmation has been sent to your email. Everyting looks right.
                We'll get in touch if we need any additional information to
                process your travel document(s). At the airport, all you need to
                check-in for your flight is your booking reference and valid
                ID/Passport.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Typography variant="h5" sx={{ paddingLeft: "100px" }}>
        {/* Booking reference: <span style="color: orange;">COOERYY</span> - Status:{" "}
        <span style="green">Confirmed</span> */}
        Booking reference: COOERYY - Status: Confirmed
      </Typography>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={3} sm={3} md={3} lg={3}>
                <h4>Departure<br />LONDON (LHR) --> LAGOS (LOS)</h4>
              <Item>
                <img src={logo} alt="Airline" width="200" />
                <p>Virgin Atlantic</p>
              </Item>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3}>
              <Item>
                <p>LHR<br />Sat. 23 Jul 2022 - 22:30<br />LONDON HEATHROW</p>
              </Item>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3}>
              <Item>
                06 hr 30 min
              </Item>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3}>
              <Item>
                LOS<br />Sun. 24 Jul 2022 - 05:00<br />MURTALA MUHAMMED INTRENATIONAL
              </Item>
            </Grid>
            <p>2 Piece(s) | Economy | Aircraft - Airbus A330-300 | Operated by Virgin Atlantic</p>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
