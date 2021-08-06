import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { ProductsContext } from "../context/context";
const useStyles = makeStyles({
  root: {
    minWidth: 200,
    width: 345,
    maxWidth: 400,
    margin: "10px 15px",
  },
  media: {
    height: 200,
  },
});

export default function ProductCard({
  id,
  Name,
  price,
  image,
  quantity,
  cart,
}) {
  const classes = useStyles();
  const addToCard = useContext(ProductsContext).add;
  const removeFromCard = useContext(ProductsContext).remove;
  const minusHandler = () => {
    removeFromCard(id);
  };
  const addHandler = () => {
    addToCard(id);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={window.location.origin + image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: {price}
          </Typography>
          {cart ? (
            <>
              <Typography variant="body2" color="textSecondary" component="p">
                Total: {quantity}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Cost(INR): {quantity * price}
              </Typography>
            </>
          ) : (
            ""
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={addHandler}
        >
          <AddIcon />
        </Button>
        <Button size="small" variant="contained" onClick={minusHandler}>
          <RemoveIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
