import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { BsFillPatchCheckFill, BsClipboardCheck } from "react-icons/bs";

export const ModalOrderDTO = ({
  dataDto,
  handleClose,
  updatePayDto,
  show,
  loadOrdersDTO,
}) => {
  console.log("ID DEL ORDINE DTO CHE DEVO FARE UPDATE DEL PAGAMENTO", dataDto);
  const flag = false;

  function calcoloTotale() {
    let total = 0;
    for (let item of dataDto.drink_id) {
      total += item.price;
    }
    for (let item of dataDto.food_id) {
      total += item.price;
    }
    const iva = (total + dataDto.seats * 2) * 0.1;
    return total + dataDto.seats * 2 + iva;
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} className=" d-flex text-center">
        <Modal.Header closeButton>
          <Modal.Title>Riepilogo Ordine Selezionato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Id Ordine {dataDto.id}
            <div>Tavolo:{dataDto.table_id}</div>
          </div>
          <hr />
          <div> Confermato il: {dataDto.localDateTime}</div>
          <hr />

          <div>
            Riepilogo Ordinazioni
            <div>
              Food:
              {dataDto.food_id.map((element) => {
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
              {dataDto.drink_id.map((element) => {
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
          <div>Coperti: {dataDto.seats}x 2.00 &euro;</div>
          <div>Iva: 10%</div>
          <hr />
          <div>Stato saldo: {dataDto.payed ? "Pagato" : "Non Pagato"}</div>
          <hr />
          <div>Totale: {calcoloTotale().toFixed(2)}&euro;</div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              updatePayDto(dataDto.id);
              loadOrdersDTO();
              handleClose();
            }}
          >
            Confirm Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
