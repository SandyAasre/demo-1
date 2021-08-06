import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ICON from "../assests/IMAGEFOUR.jpeg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
const CShoppingCartIcon = styled(ShoppingCartIcon)`
  &.MuiSvgIcon-root {
    color: white;
  }
`;
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: "blue",
  },
}))(Badge);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            component={Link}
            to="/"
          >
            <img src={ICON} alt="icon" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Food's Restaurant
          </Typography>
          <IconButton aria-label="cart" component={Link} to={"/cart"}>
            <StyledBadge badgeContent={4} color="secondary">
              <CShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
