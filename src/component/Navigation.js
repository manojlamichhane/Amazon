import React, { useState } from "react";
import "./Navigation.css";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CloseIcon from "@material-ui/icons/Close";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Navigation(props) {
  const [open, setOpen] = useState(false);
  const draweroptions = [
    "Amazon Music",
    "Kindle E-readers & Books",
    "Appstore for Android",
  ];
  const toggleDrawer = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div className="navcontainer">
      <React.Fragment>
        <Drawer open={open}>
          <div className="drawerheader">
            <AccountCircleIcon
              style={{ fontSize: "30px", paddingRight: "10px" }}
            />
            Hello, Sign in
            <CloseIcon
              style={{ fontSize: "35px", paddingLeft: "20px" }}
              onClick={toggleDrawer}
            />
          </div>
          <List>
            <ListItem>
              <ListItemText>
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    margin: "0px",
                  }}
                >
                  Digital Content & Devices
                </p>
              </ListItemText>
            </ListItem>
            {draweroptions.map((options) => {
              return (
                <ListItem>
                  <div className="drawerlist">
                    <ListItemText style={{ margin: "0px" }}>
                      {options}
                    </ListItemText>
                    <ListItemIcon>
                      <ArrowForwardIosIcon
                        style={{
                          fontSize: "20px",
                          paddingLeft: "10px",
                          margin: "0px",
                        }}
                      />
                    </ListItemIcon>
                  </div>
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      </React.Fragment>
      <div className="title">
        <MenuIcon onClick={toggleDrawer} />
        All
      </div>
      <div className="title">Today's Deals</div>
      <div className="title">Customer Service</div>
      <div className="title">Gift Cards</div>
      <div className="title">Registry</div>
      <div className="title">Sell</div>
      <div style={{ marginLeft: "540px" }} className="title">
        Amazon's response to COVID-19
      </div>
    </div>
  );
}

export default Navigation;
