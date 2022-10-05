import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import styled from "styled-components";
import download from "../../assets/images/x_download_icon.png";
import add from "../../assets/images/x_add_icon.png";

import "../../css/InputFile.css";

const Label = styled.label``;
const FileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 136px;
  height: 98px;
  /* height: auto; */

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
  border-radius: 8px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  /* flex-direction: column; */
  cursor: pointer;
  height: 98px;

  div {
  }
`;
const fileTypes = ["JPEG", "PNG", "GIF"];

const InputFilesm = ({ title }) => {
  //state for handling multiple image input
  const [updateImage, setUpdateImage] = React.useState([]);

  const handleImageUpdate = (file) => {
    if (!file || file.length === 0) return;
    setFile(file[0]);

    setUpdateImage([...updateImage, URL.createObjectURL(file[0])]);
  };

  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const handleChange = (file) => {
    //check that the img exist
    if (!file || file.length === 0) return;
    setFile(file[0]);
    setPreviewUrl(URL.createObjectURL(file[0]));
  };

  const imageUploader = () => {
    return (
      <div className="file_wrap">
        <div className="upload_container my-2">
          <img src={download} alt="" />
        </div>
        <div className="">
          <p className="mb-0"> Browse</p>
        </div>
      </div>
    );
  };

  const imagePreview = (imgSrc) => {
    return (
      <>
        <FileUploader
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          children={
            <div className="thumbnailsm">
              <img src={imgSrc} />

              <button
                className="edit_thumbnailsm"
                onClick={() => handleChange()}
              >
                {" "}
                Edit
              </button>
            </div>
          }
        />
      </>
    );
  };

  return (
    <>
      <Label className="mb-2">{title}</Label>
      <div className="d-flex flex-row flex-wrap">
        {updateImage.map((item, index) => (
          <div className="row">
            <div className="pe-3">
              <FileWrapper className="mb-4">
                <FileContainer className="p-3">
                  <div className="" key={index}>
                    {/* {pill.value} */}
                    {console.log(item, "njcjk")}
                    {!item ? imageUploader() : imagePreview(item)}
                  </div>
                </FileContainer>

                {/* <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p> */}
              </FileWrapper>
            </div>
          </div>
        ))}

        <div className="pe-3">
          <FileWrapper className="mb-4">
            {/* <Label>{title}</Label> */}
            <FileUploader
              multiple={true}
              handleChange={handleImageUpdate}
              name="file"
              types={fileTypes}
              children={
                <FileContainer className="p-4">
                  <div className="add_icon">
                    <img src={add} />
                    <p>Add more</p>
                    {/* {!previewUrl ? imageUploader() : imagePreview()} */}
                  </div>
                </FileContainer>
              }
            />

            {/* <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p> */}
          </FileWrapper>
        </div>
      </div>
    </>
  );
};

export default InputFilesm;
