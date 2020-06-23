import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Template from "../../_components/templates/website/website";
import Header from "../../_components/organisms/_header/_header";
import Main from "../../_components/organisms/_main/_main";
import Footer from "../../_components/organisms/_footer/_footer";

const useStyles = makeStyles((theme) => ({}));

export default function Homepage() {
  const classes = useStyles();
  return <Template header={<Header />} main={<Main />} footer={<Footer />} />;
}
