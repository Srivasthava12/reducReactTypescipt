import React from "react";
import Head from "./components/Head";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "./components/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./App.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

function App() {
  const classes = useStyles();

  const getCardActions = () => {
    return <Button size="small">Template Button</Button>;
  };
  const getCardContent = () => {
    return (
      <Typography variant="h5" component="h2">
        Card Content
      </Typography>
    );
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Head />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>Other Components</Paper>
            </Grid>
            <Grid item xs={3}>
              <Card
                CardContentChild={getCardContent}
                CardActionChild={getCardActions}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
