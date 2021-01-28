import React, { useState } from "react";
import "./index.css";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function ChangeNavDropdown(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseV1 = () => {
    setAnchorEl(null);
    props.sendStateRelNavUp(1);
  };
  const handleCloseV2 = () => {
    setAnchorEl(null);
    props.sendStateRelNavUp(2);
  };
  const handleCloseV3 = () => {
    setAnchorEl(null);
    props.sendStateRelNavUp(3);
  };
  const handleCloseV4 = () => {
    setAnchorEl(null);
    props.sendStateRelNavUp(4);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: "lightgray" }}
      >
        Select Nav Version
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleCloseV1}>v1</MenuItem>
        <MenuItem onClick={handleCloseV2}>v2</MenuItem>
        <MenuItem onClick={handleCloseV3}>v3</MenuItem>
        <MenuItem onClick={handleCloseV4}>v4</MenuItem>
      </Menu>
    </div>
  );
}

export default ChangeNavDropdown;
