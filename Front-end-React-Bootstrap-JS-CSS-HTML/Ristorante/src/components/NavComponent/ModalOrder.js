import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { BsClipboardCheck } from "react-icons/bs";

export const ModalOrder = ({ getOrder, show, handleShow, handleClose }) => {
  console.log("ORDINE SINGOLO PAGATO ID", getOrder.id);
  const flag = false;

  function calcoloTotale() {
    let total = 0;
    for (let item of getOrder.drink_id) {
      total += item.price;
    }
    for (let item of getOrder.food_id) {
      total += item.price;
    }
    const iva = (total + getOrder.seats * 2) * 0.1;
    return total + getOrder.seats * 2 + iva;
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <BsClipboardCheck className="text-light" size={"10px"} />
      </Button>
      <Modal show={show} onHide={handleClose} className=" d-flex text-center">
        <Modal.Header closeButton>
          <Modal.Title>Riepilogo Ordine Selezionato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div> Id Ordine {getOrder.id}</div>
          <hr />
          <div> Registrato il: {getOrder.localDate}</div>
          <hr />

          <div> Coperti: {getOrder.seats}</div>
          <hr />
          <div>
            Riepilogo Ordinazioni
            <div>
              Food:
              {getOrder.food_id.map((element) => {
                return (
                  <>
                    <div key={element.id}>
                      {element.name} {element.price.toFixed(2)} &euro;
                    </div>
                  </>
                );
              })}
            </div>
            <div>
              Drink:
              {getOrder.drink_id.map((element) => {
                return (
                  <>
                    <div key={element.id}>
                      {element.name} Prezo:
                      {element.price.toFixed(2)} &euro;
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <hr />
          <div>Coperti: {getOrder.seats}x 2.00 &euro;</div>
          <div>Iva: 10%</div>
          <hr />
          <div>Stato saldo: {getOrder.payed ? "Pagato" : "Non Pagato"}</div>
          <hr />
          <div>Totale: {calcoloTotale().toFixed(2)}&euro;</div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              handleClose();
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
