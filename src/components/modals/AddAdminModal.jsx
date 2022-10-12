import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

const ButtonCancel = styled.button`
  width: 88px;
  height: 36px;
  background: #f7f9f8;
  border-radius: 8px;
  border: 0.5px solid #e5e4e4;
  color: rgba(50, 50, 93, 0.8);
  font-weight: 500;
  font-size: 14px;
`;
const ButtonInvite = styled.button`
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

const InputContainer = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: rgba(50, 50, 93, 0.7);

  input:focus {
    box-shadow: unset;
    outline-offset: #034626 !important;
  }
`;

export default ({ onHide, show }) => {
  return (
    <>
      <Modal
        size="md"
        show={show}
        onHide={onHide}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
      >
        <Modal.Body>
          <div className="p-2 d-flex flex-column ">
            <Heading className="py-3">Add a new admin</Heading>
            <InputContainer className="">
              <input
                type="email"
                className=" form-control mb-4 py-2"
                name="password"
                id="password"
                placeholder="Enter email address"
              />
            </InputContainer>
            <div className="d-flex flex-row justify-content-end">
              <span className="d-flex flex-row justify-between p-1 gap-4 py-2">
                <ButtonCancel>Cancel</ButtonCancel>{" "}
                <ButtonInvite>Invite</ButtonInvite>
              </span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
