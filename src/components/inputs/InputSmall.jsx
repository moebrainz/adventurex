import React, { useState, useEffect, useRef } from "react";
import { FileUploader } from "react-drag-drop-files";

import styled from "styled-components";
import download from "../../assets/images/x_download_icon.png";
import add from "../../assets/images/x_add_icon.png";
import "../../css/InputFile.css";

const resizebase64 = require("resize-base64");
//import sharp from "sharp";

const Label = styled.label``;
const FileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 136px;
  height: 98px;
  position: relative;
  /* height: auto; */

  input {
    opacity: 0;
    /* position: absolute; */
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
const InputWrapper = styled.input``;
const imageMimeType = /image\/(png|jpg|jpeg)/i;

const ImagePreview = ({
  imgSrc,
  handleChange,
  inputRef,

  setEditIndex,
}) => (
  <FileContainer className="">
    <div className="thumbnailsm">
      <img src={imgSrc.src} />

      <button
        className="edit_thumbnailsm"
        onClick={() => {
          setEditIndex(imgSrc.index);
          inputRef?.current?.click();
        }}
      >
        {" "}
        Edit
      </button>
    </div>
  </FileContainer>
);

const ImageUploader = ({ download }) => {
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

const InputSmall = ({ title, onChange }) => {
  const [file, setFile] = useState(null);
  let [fileDataURL, setFileDataURL] = useState([]);
  //state for handling multiple image input
  const [editIndex, setEditIndex] = React.useState(null);
  const inputRef = useRef();

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType) || file.length === 0) {
      alert("Image mime type is not valid");
      return;
    }
  };

  const handleImageUpdate = (e) => {
    const file = e.target.files[0];
    const imgresize = resizebase64(file, 500, 500);
    console.log(imgresize, "fff");
    if (!file || file.length === 0) return;
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      const { result } = e.target;
      if (result) {
        let imgData = {
          index: new Date().getTime(),
          src: result,
        };
        if (editIndex !== null) {
          // console.log(editIndex, "edits");
          // imgData.index = editIndex;
          const imgIndex = fileDataURL.findIndex((e) => e.index === editIndex);
          fileDataURL.splice(imgIndex, 1, imgData);
          setFileDataURL([...fileDataURL]);
        } else {
          setFileDataURL([...fileDataURL, imgData]);

          console.log(fileDataURL, "this");
        }
        // console.log(fileDataURL);
        // setFile(result);

        //resize image

        onChange(imgresize);
      }
    };
    fileReader.readAsDataURL(file);
    // console.log(file, "file");
    //pass the result to onchange as a props to be used
  };

  return (
    <>
      <Label className="mb-2">{title}</Label>
      <div className="d-flex flex-row flex-wrap">
        {fileDataURL?.map((e, i) => (
          <div className="row" key={i}>
            <div className="pe-4">
              <FileWrapper className="mb-4">
                <FileContainer className="">
                  {/* <div className=""> */}
                  <ImagePreview
                    imgSrc={e}
                    handleChange={handleChange}
                    inputRef={inputRef}
                    chngState={fileDataURL}
                    setEditIndex={setEditIndex}
                  />{" "}
                  {/* </div> */}
                </FileContainer>
              </FileWrapper>
            </div>
          </div>
        ))}

        <div className="pe-3">
          <FileWrapper className="mb-4">
            {/* <Label>{title}</Label> */}
            <InputWrapper
              type="file"
              name="file"
              id="image"
              accept=".png, .jpg, .jpeg"
              onChange={handleImageUpdate}
              ref={inputRef}
            />
            <FileContainer
              className="p-4"
              onClick={() => {
                setEditIndex(null);
                inputRef?.current?.click();
                // console.log(editIndex);
              }}
            >
              <div className="add_icon">
                <img src={add} />
                <p>Add more</p>
                {/* {!previewUrl ? imageUploader() : imagePreview()} */}
              </div>
            </FileContainer>

            {/* <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p> */}
          </FileWrapper>
        </div>
      </div>
    </>
  );
};

export default InputSmall;
