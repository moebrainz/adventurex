import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

const ButtonNo = styled.button`
  width: 88px;
  height: 36px;
  background: #f7f9f8;
  border-radius: 8px;
  border: 0.5px solid #e5e4e4;
  color: rgba(50, 50, 93, 0.8);
  font-weight: 500;
  font-size: 14px;
`;
const ButtonYes = styled.button`
  width: 88px;
  height: 36px;
  background: #034626;
  border-radius: 8px;
  border: 0;
  color: white;
  font-weight: 500;
  font-size: 14px;
`;

const Heading = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`;

export default ({ onHide, show, onClick }) => {
  return (
    <>
      <Modal
        size="sm"
        show={show}
        onHide={onHide}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
      >
        <Modal.Body>
          <div className="p-2 d-flex flex-column align-items-center">
            <Heading className="">Do you want to delete this package?</Heading>
            <span className="d-flex flex-row justify-between p-1 gap-4 py-2">
              <ButtonYes onClick={onClick}>Yes</ButtonYes>{" "}
              <ButtonNo>No</ButtonNo>
            </span>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
