import { render } from "@testing-library/react";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useToast } from "@chakra-ui/react";

import styled from "styled-components";
import download from "../../assets/images/x_download_icon.png";

import "../../css/InputFile.css";

const Label = styled.label``;
const FileWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;

  div {
  }
`;
const fileTypes = ["JPEG", "PNG", "GIF"];

const InputFIle = ({ title, onChange }) => {
  const toast = useToast();

  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const handleChange = (file) => {
    //check that the img exist
    if (!file || file.length === 0) return;
    if (file[0].size > 3000000) {
      return toast({
        position: "bottom",
        title: "File too large",
        description: "Upload files lesser than 3mb",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      setFile(file[0]);
      setPreviewUrl(URL.createObjectURL(file[0]));
      onChange(file[0]);
      console.log(file[0], "files in inputs");
    }
  };

  console.log(file, "files in inputs");

  // const reader = new FileReader();
  // reader.onloadend = (e) => {
  //   previewUrl = e.target.result;
  // };
  // reader.readAsDataURL(previewUrl);
  //   Z
  console.log(previewUrl);

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
          <img src={previewUrl} />

          <button className="edit_thumbnail" onClick={() => handleChange()}>
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
        <FileUploader
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          children={
            <FileContainer className="">
              <div className="thumb_wrapper">
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

export default InputFIle;
