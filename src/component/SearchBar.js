import React from "react";
import "./SearchBar.css";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";

function SearchBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="searchbar">
      <div className="searchbar-left">
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <div style={{ display: "flex" }}>
            <p style={{ margin: "0px", padding: "0px", fontSize: "12px" }}>
              All
            </p>
            <ArrowDropDownIcon />
          </div>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>All Departments</MenuItem>
          <MenuItem onClick={handleClose}>Arts & Crafts</MenuItem>
          <MenuItem onClick={handleClose}>Automotive</MenuItem>
        </Menu>
      </div>
      <div className="searchbar-centre">
        <input style={{ height: "35px", width: "100%" }} type="text" />
      </div>
      <div className="searchbar-right">
        <SearchIcon style={{ fontSize: 28, margin: "4px" }} />
      </div>
    </div>
  );
}

export default SearchBar;
