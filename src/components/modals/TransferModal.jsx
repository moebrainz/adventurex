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
const ButtonTransfer = styled.button`
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 400;
    font-size: 14px;
    color: #404040;
  }

  &:last-child {
    justify-items: flex-end;
  }
`;

const InputContainer = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: rgba(50, 50, 93, 0.7);

  select {
    font-weight: inherit;
    font-size: inherit;
    color: inherit;
  }

  select:focus {
    box-shadow: unset;
    outline-offset: #034626 !important;
  }
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
        <Modal.Header>
          <div className="d-flex flex-column w-100 ">
            <Heading className="px-4 py-3">Transfer Heading to</Heading>
            <InputContainer className="px-4 ">
              <select
                className=" form-select mb-1 py-2"
                name="agerange"
                id="agerange"
                defaultValue="Admin"
              >
                <option value="5-9"> Admin</option>
                <option value="5-9">Other Admin</option>
              </select>
            </InputContainer>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="p-2 d-flex flex-column px-4">
            <Wrapper>
              <label htmlFor="aftertransfer" className="form-label">
                After Transfer
              </label>

              <InputContainer className="">
                <select
                  className=" form-select form-control mb-4 py-2"
                  name="aftertransfer"
                  id="aftertransfer"
                  defaultValue="Delete account"
                >
                  <option value="admin">Delete account</option>
                  <option value="admin">Make me an admin</option>
                </select>
              </InputContainer>
              <label htmlFor="password" className="form-label">
                Password
              </label>

              <InputContainer className="">
                <input
                  type="password"
                  className=" form-control mb-4 py-2"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </InputContainer>
              <label htmlFor="cpassword" className="form-label">
                Confirm password
              </label>

              <InputContainer className="">
                <input
                  type="password"
                  className=" form-control mb-4 py-2"
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm password "
                />
              </InputContainer>
              <div className="d-flex flex-row justify-content-end">
                <span
                  className="d-flex flex-row justify-between p-1 gap-4 py-2"
                  id="button-control"
                >
                  <ButtonCancel>Cancel</ButtonCancel>{" "}
                  <ButtonTransfer>Transfer</ButtonTransfer>
                </span>
              </div>
            </Wrapper>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
