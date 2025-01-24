import { BsCart2, BsFillPatchCheckFill } from "react-icons/bs";
import { BiDish } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { postOrderApi, putOrderApi } from "../api";

const Cart = ({ add, del, cartProducts, tableId, reset, elId }) => {
  const [showList, setShowList] = useState(false);
  const [show, setShow] = useState(false);
  const [order, setOrder] = useState({});
  const [drinks, setDrinks] = useState([{}]);
  const [foods, setFoods] = useState([{}]);
  const navigate = useNavigate();

  const handlePost = async (order, id, orderId) => {
    orderId === undefined
      ? postOrderApi(order, id)
      : putOrderApi(order, orderId);
  
  };
  /*Find all list food  in cart and prepare a arry with id to insert in order body */
    const listfood = () => {
      let foodlist = [];
      cartProducts.map((el) => {
        if (
          el.type.toLowerCase() !== "rosso" &&
          el.type.toLowerCase() !== "bianco" &&
          el.type.toLowerCase() !== "analcolico"
        ) {

            for (let index = 0; index < el.quantity; index++) {
              foodlist.push({ id: el.id });
            }
       
       
        }
      });
      return foodlist;
    };

  /*Find all list food  in cart and prepare a arry with id to insert in order body */
  const listDrink = () => {
      let drinkList = [];
    cartProducts.map((el) => {
         if (
           el.type.toLowerCase() === "rosso" ||
           el.type.toLowerCase() === "bianco" ||
           el.type.toLowerCase() === "analcolico"
         ) {
         for (let index = 0; index < el.quantity; index++) {
          drinkList.push({ id: el.id });
         }
          
         }
   
    });
    return drinkList;
  };
  /**  function that create a body of Object ready to pass to the Rest service post */
  const createOrder = () => {
   
    console.log("Sono lista fooooooddddssss",foods);
    console.log("Sono lista fooooooddddssss", drinks);
    
    const order = {
      localDate: new Date(),
      seats: 2,
      food_id: listfood(),
      drink_id: listDrink(),
      table_id: parseInt(tableId),
      payed: false,
    };
    setOrder(order);
    handlePost(order, tableId, elId);
  };

  const updateOrder = () => {
    const order = {
      food_id: listfood(),
      drink_id: listDrink(),
      seats: 2,
      payed: false,
    };
    setOrder(order);
    handlePost(order, tableId, elId);
  };

  /**Function of callback of ofcanvas of cart */
  const handleClose = () => {
    setShow(false);
    setShowList(!showList);
  };
  const handleShow = () => {
    setShow(true);
    setShowList(!showList);
  };
  /**function  calcolate the total price of all  article  of the card */
  function calculateTotal() {
    let total = 0;
    for (let item of cartProducts) {
      total += item.price.toFixed(2) * item.quantity;
    }
    return total.toFixed(2);
  }
  console.log("Sono Cart", cartProducts);
  let content = <></>;
  if (showList) {
    content = (
      <ul>
        {cartProducts.map((el) => {
          return (
            <li key={el.id}>
              <div className="row ">
                <div className="col-6 text-light ">{el.description}</div>
                <div className="col-6 text-end  text-light ">
                  {el.price.toFixed(2)} &euro;
                  <button className="btnCart " onClick={() => del(el)}>
                    -
                  </button>
                  {el.quantity}
                  <button className="btnCart" onClick={() => add(el)}>
                    +
                  </button>
                </div>
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <div className=" row d-flex justify-content-center">
      <button className="btn cart mb-3" onClick={handleShow}>
        <BiDish size={"52px"} />

        <span className="badge bg-secondary">{cartProducts.length}</span>
      </button>
      <Offcanvas className="alert bg-black " show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className=" text-info ">
            Le Portate Da Ordinare
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{content}</Offcanvas.Body>
        <div className="text-end text-light">
          Total <BsCart2 />: {calculateTotal()} &euro;
          <button className="btn cart mb-3" onClick={handleShow}>
            <BsFillPatchCheckFill
              className="text-light"
              size={"40px"}
              onClick={() => {
                elId === undefined ? createOrder() : updateOrder();
                reset();
                localStorage.removeItem("OrderID");
                navigate("/table");
              }}
            />

            <span className="badge bg-secondary"></span>
          </button>
          <hr />
        </div>
      </Offcanvas>
    </div>
  );
};

export default Cart;
