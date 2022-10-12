import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import styled from "styled-components";
import download from "../../assets/images/x_download_icon.png";
import editImage from "../../assets/images/x_edit_icon.png";

import "../../css/InputFile.css";

const Label = styled.label``;
const FileWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 120px;
  border-radius: 50%;

  input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
  width: 120px;
  height: 120px;
  vertical-align: middle;
  text-align: center;
  border-radius: 50%;
  position: relative;
  cursor: pointer;

  div {
  }
`;
const fileTypes = ["JPEG", "PNG", "GIF"];

const InputImage = ({ title }) => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const handleChange = (file) => {
    //check that the img exist
    if (!file || file.length === 0) return;
    setFile(file);
    setPreviewUrl(URL.createObjectURL(file[0]));
  };

  console.log(previewUrl);

  const imageUploader = () => {
    return (
      <div className="file_wrap_profile">
        <div className="upload_pcontainer my-2">
          <img src={download} alt="" />
        </div>
        <div className="">
          <p className="text-center subheading_p">{`Supports JPG, JPEG & PNG`}</p>
        </div>
      </div>
    );
  };

  const imagePreview = () => {
    return (
      <>
        <div className="thumbnail_p">
          <img src={previewUrl} alt="profile-img" />

          <div className="edit_profile">
            <img
              src={editImage}
              alt="edit-profile"
              onClick={() => handleChange()}
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <FileWrapper className="mb-4">
        <Label>{title}</Label>
        <FileUploader
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          children={
            <FileContainer className="">
              <div className="">
                {!previewUrl ? imageUploader() : imagePreview()}
              </div>
            </FileContainer>
          }
        />

        {/* <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p> */}
      </FileWrapper>
    </>
  );
};

export default InputImage;
