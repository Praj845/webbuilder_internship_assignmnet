import React from "react";
import { Card, CardContent, Container, Paper, Typography } from "@mui/material";
import "./pageOne.css"; // Replace with the actual path to your Tailwind CSS file
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { ListItemIcon } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import exampleImage from "../Components/images/Frame3.png";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { EmojiFoodBeverage } from "@mui/icons-material";
import Button from "@mui/material/Button";
const PageOne = () => {
  const style = {
    py: 0,
    width: "100%",
    maxWidth: 900,
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "background.paper",
    gap: "1px",
    topRelevant: {
      marginleft: "6px", // Adjust the top margin for Top Relevant
    },
    disclosure: {
      marginleft: "6px", // Adjust the bottom margin for Advertising Disclosure
    },
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Container
      maxWidth="md"
      className="my-8 page-one-container"
      style={{ height: "800px" }}
    >
      {/* Adjust margin-top for vertical height */}
      {/* Content for Page One */}
      <Paper elevation={1} className="paper-custom" mb={2}>
        <Typography variant="h4" component="div" mb={1} ml={1}>
          Best Website Builders in the US
        </Typography>
        <List sx={style}>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon style={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText
              primary="Last Updated - March 2, 2024"
              sx={style.disclosure}
            />
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText
              primary="Advertising Disclosure"
              sx={style.disclosure}
            />
            <ListItemText primary="Top Relevant" sx={style.disclosure} />
            <ExpandMoreIcon />
          </ListItem>
        </List>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3} mt={1} className="flex">
            <Grid item xs={12} sm={6} md={4} lg={2} className="border-none">
              <Item>Tools</Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2} className="border-none">
              <Item>AWS Builder</Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2} className="border-none">
              <Item>Start Build</Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2} className="border-none">
              <Item>Build Supplies</Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2} className="border-none">
              <Item>Tooling</Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2} className="border-none">
              <Item>BlueHosting</Item>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="body1" component="div" mt={3} spacing={2}>
          Home &#8250; Hosting for all &#8250; hosting 6 &#8250; hosting 5
        </Typography>
        <div className="wrapper">
          <section className="mt-4">
            <Card className="flex w-full">
              <Typography variant="h5" component="div" mb={2}>
                <span className="mr-2">1</span>
                <Chip
                  label={
                    <Typography
                      variant="body2"
                      sx={{ color: "white", fontWeight: "bold" }}
                    >
                      Best Choice
                    </Typography>
                  }
                  icon={<EmojiFoodBeverage sx={{ color: "white" }} />}
                  sx={{
                    backgroundColor: "#FFA500", // Orange color
                    "&:hover": {
                      backgroundColor: "#FF8000", // Darker orange on hover
                    },
                  }}
                />
              </Typography>
              {/* Card Image */}
              <CardMedia
                component="img"
                alt="Example Image"
                sx={{ height: 150, width: "40%" }} // Set your desired height and width percentage
                image={exampleImage}
              />

              {/* Card Content */}

              <CardContent className="flex flex-col justify-between pl-4">
                {/* Card Title */}

                {/* Card Text */}
                <Typography variant="body2" component="div">
                  <strong> WixPro 72-Inch Responsive Website Builder </strong> -
                  Comprehensive Digital Platform Creation Tool, Streamlined
                  Design Interface for Professional Websites and Online Stores
                  (Black/Blue) <br />
                  <strong>Main highlights </strong> <br />
                  [What You Get]: Receive the WixPro website builder suite,
                  access to premium design templates, an extensive library of
                  widgets and apps, and detailed step-by-step guides.
                </Typography>

                {/* Small Box with Additional Information */}
                <div className="flex items-center mt-4">
                  <div
                    className="bg-lightblue text-center rounded-md p-2 mr-4"
                    style={{ width: "60px" }}
                  >
                    <Typography variant="h6">9.8</Typography>
                    <Typography variant="body2">Exceptional</Typography>
                    {/* Add your 5 stars component here */}
                    {/* Example: <FiveStarsComponent /> */}
                  </div>

                  {/* View Button */}
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      padding: "10px 30px",
                      fontSize: "16px",
                      marginLeft: "auto",
                    }}
                  >
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
          <section className="mt-4">
            <Card className="flex w-full">
              <Typography variant="h5" component="div" mb={2}>
                <span className="mr-2">2</span>
                <Chip
                  label={
                    <Typography
                      variant="body2"
                      sx={{ color: "white", fontWeight: "bold" }}
                    >
                      Best Value
                    </Typography>
                  }
                  icon={<EmojiFoodBeverage sx={{ color: "white" }} />}
                  sx={{
                    backgroundColor: "#FFA500", // Orange color
                    "&:hover": {
                      backgroundColor: "#FF8000", // Darker orange on hover
                    },
                  }}
                />
              </Typography>
              {/* Card Image */}
              <CardMedia
                component="img"
                alt="Example Image"
                sx={{ height: 150, width: "40%" }} // Set your desired height and width percentage
                image={exampleImage}
              />

              {/* Card Content */}
              <CardContent className="flex flex-col justify-between pl-4">
                {/* Card Title */}

                {/* Card Text */}
                <Typography variant="body2" component="div">
                  <strong>SiteCraft 68-Inch Ultimate Web Design Studio </strong>
                  Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor
                  for Dynamic Websites and E-commerce Platforms (Green/White){" "}
                  <br /> <strong> Main highlights </strong> <br />
                  [What You Get]: Gain access to the SiteCraft design studio,
                  featuring a robust selection of design elements, SEO
                  optimization tools, and e-commerce integrations
                </Typography>

                {/* Small Box with Additional Information */}
                <div className="flex items-center mt-4">
                  <div
                    className="bg-lightblue text-center rounded-md p-2 mr-4"
                    style={{ width: "60px" }}
                  >
                    <Typography variant="h6">9.8</Typography>
                    <Typography variant="body2">Exceptional</Typography>
                    {/* Add your 5 stars component here */}
                    {/* Example: <FiveStarsComponent /> */}
                  </div>

                  {/* View Button */}
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      padding: "10px 30px",
                      fontSize: "16px",
                      marginLeft: "auto",
                    }}
                  >
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
          <section className="mt-4">
            <Card className="flex w-full">
              <Typography variant="h5" component="div" mb={2}>
                <span className="mr-2">3</span>
              </Typography>
              {/* Card Image */}
              <CardMedia
                component="img"
                alt="Example Image"
                sx={{ height: 150, width: "40%" }} // Set your desired height and width percentage
                image={exampleImage}
              />

              {/* Card Content */}

              <CardContent className="flex flex-col justify-between pl-4">
                {/* Card Title */}

                {/* Card Text */}
                <Typography variant="body2" component="div">
                  <strong>WixPro 72-Inch Responsive Website Builder</strong>-
                  Comprehensive Digital Platform Creation Tool, Streamlined
                  Design Interface for Professional Websites and Online Stores
                  (Black/Blue)
                  <br />
                  <strong> Main highlights </strong> <br />
                  [What You Get]: Receive the WixPro website builder suite,
                  access to premium design templates, an extensive library of
                  widgets and apps, and detailed step-by-step guides.
                </Typography>

                {/* Small Box with Additional Information */}
                <div className="flex items-center mt-4">
                  <div
                    className="bg-lightblue text-center rounded-md p-2 mr-4"
                    style={{ width: "60px" }}
                  >
                    <Typography variant="h6">9.8</Typography>
                    <Typography variant="body2">Exceptional</Typography>
                    {/* Add your 5 stars component here */}
                    {/* Example: <FiveStarsComponent /> */}
                  </div>

                  {/* View Button */}
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      padding: "10px 30px",
                      fontSize: "16px",
                      marginLeft: "auto",
                    }}
                  >
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
          <section className="mt-4">
            <Card className="flex w-full">
              <Typography variant="h5" component="div" mb={2}>
                <span className="mr-2">4</span>
              </Typography>
              {/* Card Image */}
              <CardMedia
                component="img"
                alt="Example Image"
                sx={{ height: 130, width: "20%" }} // Set your desired height and width percentage
                image={exampleImage}
              />

              {/* Card Content */}
              <CardContent className="flex flex-col justify-between pl-4">
                {/* Card Title */}

                {/* Card Text */}
                <Typography variant="body2" component="div">
                  <strong>CDK Resposive Builder:</strong> An extensive library
                  of widgets and apps, and detailed step-by-step guides <br />
                  <span style={{ color: "blue" }}>26% Off</span> <br />
                  <strong>Main Hightlights </strong>
                  <br />
                  <div
                    style={{
                      backgroundColor: "#FFD700",
                      padding: "10px",
                      width: "200px",
                    }}
                  >
                    9.9 building responsive <br />
                    8.9 Cool <br />
                    8.9 Docs <br />
                  </div>
                  Why we love it <br />
                  <CheckCircleIcon
                    style={{ color: "green" }}
                  /> Documentation <br />
                  <CheckCircleIcon style={{ color: "green" }} /> Easy Use <br />
                  <CheckCircleIcon style={{ color: "green" }} /> Out of the Box
                </Typography>
                {/* Small Box with Additional Information */}
                <div className="flex items-center mt-4">
                  <div
                    className="bg-lightblue text-center rounded-md p-2 mr-4"
                    style={{ width: "60px" }}
                  >
                    <Typography variant="h6">9.8</Typography>
                    <Typography variant="body2">Exceptional</Typography>
                    {/* Add your 5 stars component here */}
                    {/* Example: <FiveStarsComponent /> */}
                  </div>

                  {/* View Button */}
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      padding: "10px 30px",
                      fontSize: "16px",
                      marginLeft: "auto",
                    }}
                  >
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </Paper>
      {/* Add more sections and components as needed */}
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* Card 1 */}
          <Grid item xs={12} sm={4}>
            <section className="mt-4">
              <Card className="flex w-full">
                <Typography variant="h5" component="div" mb={2}>
                  <span className="mr-2">1</span>
                </Typography>

                <CardContent className="flex flex-col justify-between pl-4">
                  <CardMedia
                    component="img"
                    alt="Example Image"
                    sx={{ height: 150, width: "80%" }} // Set your desired height and width percentage
                    image={exampleImage}
                  />
                  <Typography variant="body2" component="div">
                    <strong>Webbuilder 1 </strong> <br />
                    $39.96 $49.96 <br />
                    <span style={{ color: "blue" }}>(20% Off)</span> <br />
                    <strong>
                      {" "}
                      View Deal Computer Modern clasic with wix support
                    </strong>
                  </Typography>
                  <div className="flex items-center mt-4">
                    <div
                      className="bg-lightblue text-center rounded-md p-2 mr-4"
                      style={{ width: "60px" }}
                    >
                      <Typography variant="h6">9.8</Typography>
                      <Typography variant="body2">Exceptional</Typography>
                    </div>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        padding: "10px 30px",
                        fontSize: "16px",
                        marginLeft: "auto",
                      }}
                    >
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </Grid>
          {/* Card 2 */}
          <Grid item xs={12} sm={4}>
            <section className="mt-4">
              <Card className="flex w-full">
                <Typography variant="h5" component="div" mb={2}>
                  <span className="mr-2">2</span>
                </Typography>
                <CardContent className="flex flex-col justify-between pl-4">
                  <CardMedia
                    component="img"
                    alt="Example Image"
                    sx={{ height: 150, width: "80%" }} // Set your desired height and width percentage
                    image={exampleImage}
                  />
                  <Typography variant="body2" component="div">
                    <strong>Webbuilder 1 </strong> <br />
                    $39.96 $49.96 <br />
                    <span style={{ color: "blue" }}>26% Off</span> <br />
                    <strong>
                      {" "}
                      View Deal Computer Modern clasic with wix support
                    </strong>
                  </Typography>
                  <div className="flex items-center mt-4">
                    <div
                      className="bg-lightblue text-center rounded-md p-2 mr-4"
                      style={{ width: "60px" }}
                    >
                      <Typography variant="h6">9.8</Typography>
                      <Typography variant="body2">Exceptional</Typography>
                    </div>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        padding: "10px 30px",
                        fontSize: "16px",
                        marginLeft: "auto",
                      }}
                    >
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </Grid>

          {/* Card 3 */}
          <Grid item xs={12} sm={4}>
            <section className="mt-4">
              <Card className="flex w-full">
                <Typography variant="h5" component="div" mb={2}>
                  <span className="mr-2">3</span>
                </Typography>

                <CardContent className="flex flex-col justify-between pl-4">
                  <CardMedia
                    component="img"
                    alt="Example Image"
                    sx={{ height: 150, width: "80%" }} // Set your desired height and width percentage
                    image={exampleImage}
                  />
                  <Typography variant="body2" component="div" marginTop={1}>
                    <strong>Webbuilder 1 </strong> <br />
                    $39.96 $49.96 <br />
                    <span style={{ color: "blue" }}>(20% Off)</span> <br />
                    <strong>
                      {" "}
                      View Deal Computer Modern clasic with wix support
                    </strong>
                  </Typography>
                  <div className="flex items-center mt-4">
                    <div
                      className="bg-lightblue text-center rounded-md p-2 mr-4"
                      style={{ width: "60px" }}
                    >
                      <Typography variant="h6">9.8</Typography>
                      <Typography variant="body2">Exceptional</Typography>
                    </div>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        padding: "10px 30px",
                        fontSize: "16px",
                        marginLeft: "auto",
                      }}
                    >
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="xl"
        style={{ marginTop: "50px", padding: "10px", textAlign: "left" }}
      >
        <Typography variant="h4" gutterBottom style={{ color: "grey" }}>
          Sign up and get exclusive special deals
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "80%", marginBottom: "10%" }}
        >
          Sign Up
        </Button>
      </Container>
    </Container>
  );
};

export default PageOne;
