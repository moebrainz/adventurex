import styled from "styled-components";
import { useEffect, useState } from "react";
import download from "../../assets/images/x_download_icon.png";

import "../../css/InputFile.css";

const Label = styled.label``;
const FileWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    cursor: pointer;
  }

  p {
    font-weight: 500;
    font-size: 12px;
  }
`;
const FileContainer = styled.div`
  background: rgba(250, 251, 251, 0.8);
  border: 0.8px dashed rgba(50, 50, 93, 0.3);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;

  div {
  }
`;

const InputWrapper = styled.input``;
const imageMimeType = /image\/(png|jpg|jpeg)/i;

function TestInput({ title }) {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  console.log(fileDataURL);

  const imageUploader = () => {
    return (
      <div className="file_wrap">
        <div className="upload_container my-2">
          <img src={download} alt="" />
        </div>
        <div className="">
          <p className="mb-0">Drop Your image here or browse</p>
          <p className="text-center subheading">{`Supports JPG, JPEG & PNG`}</p>
        </div>
      </div>
    );
  };

  const imagePreview = () => {
    return (
      <>
        <div className="thumbnail">
          <img src={fileDataURL} />

          <button className="edit_thumbnail" onClick={() => changeHandler()}>
            {" "}
            Edit
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <FileWrapper className="mb-4">
        <Label>{title}</Label>
        <FileContainer className="">
          <InputWrapper
            type="file"
            id="image"
            accept=".png, .jpg, .jpeg"
            onChange={changeHandler}
          />

          <div className="">
            {!fileDataURL ? imageUploader() : imagePreview()}
          </div>
        </FileContainer>
      </FileWrapper>
    </>
  );
}
export default TestInput;
