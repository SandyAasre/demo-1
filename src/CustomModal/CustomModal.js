import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../context/context";
const Table = styled.table`
  width: 100%;
`;
const Tb = styled.td`
  width: 33%;
`;
const ButtonContainer = styled.div`
  float: right;
  margin: 10px;
`;
const CusButton = styled(Button)`
  margin: 1rem;
`;
function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    maxWidth: 600,
    minWidth: 200,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 10,
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const product = useContext(ProductsContext).products.filter((value) => {
    if (value.quantity > 0) {
      return value;
    }
  });
  const [totalAmount, setTotalAmount] = React.useState(() => {
    let sum = 0;
    product.forEach((item) => {
      sum = sum + item.quantity * item.price;
    });
    return sum;
  });
  const addToCard = useContext(ProductsContext).add;
  const removeFromCard = useContext(ProductsContext).remove;

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    let sum = 0;
    product.forEach((item) => {
      sum = sum + item.quantity * item.price;
    });
    setTotalAmount(sum);
  }, [product]);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Order Summary</h2>
      <Table>
        <tbody>
          {product.map((value) => {
            return (
              <tr key={value.id}>
                <Tb>{value.Name}</Tb>
                <Tb>{value.quantity}</Tb>
                <Tb>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      addToCard(value.id);
                    }}
                  >
                    <AddIcon />
                  </Button>
                  <Button
                    size="small"
                    style={{ backgroundColor: "#e75480" }}
                    variant="contained"
                    value={value.id}
                    onClick={() => {
                      removeFromCard(value.id);
                    }}
                  >
                    <RemoveIcon />
                  </Button>
                </Tb>
              </tr>
            );
          })}

          <tr>
            <Tb>Total (INR): {totalAmount}</Tb>
            <Tb></Tb>
            <Tb></Tb>
          </tr>
        </tbody>
      </Table>
      <ButtonContainer>
        <Button
          size="small"
          color="primary"
          variant="contained"
          style={{ marginRight: "10px" }}
          component={Link}
          to="/checkout"
          onClick={handleClose}
        >
          SAVE AND CHECKOUT
        </Button>
        <Button size="small" color="primary" onClick={handleClose}>
          CANCEL
        </Button>
      </ButtonContainer>
    </div>
  );

  return (
    <div>
      <CusButton
        size="small"
        color="primary"
        variant="contained"
        onClick={handleOpen}
      >
        order
      </CusButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
