import React from "react";
import useStore from "../stores";
import { observer } from "mobx-react";
import { Upload, message, Spin, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { getPreviewImage, copyToClip } from "../util/common-utils";

const StyledResult = styled.div`
  margin-top: 30px;
  border: 1px dashed #ccc;
  padding: 20px;
`;

const StyledTitle = styled.h1`
  margin: 20px 0;
  text-align: center;
`;

const StyledImage = styled.img`
  max-width: 300px;
`;

const StyledUploaderContainer = styled.div`
  margin: 5px 30px;
`;

const UploaderComponent = observer(() => {
  const { Dragger } = Upload;
  const { ImageStore, UserStore } = useStore();

  const beforeUploadProps = {
    beforeUpload: (file) => {
      ImageStore.setFile(file);
      ImageStore.setFileName(file.name);
      if (UserStore.loggedinUser === null) {
        message.warning("You have to login to upload");
        return false;
      }
      if (file.size > 1024 * 1024 * 1000) {
        message.warning("max file size is 1GB");
        return false;
      }
      ImageStore.uploadFile()
        .then((serverFile) => {
          message.success("upload success");
        })
        .catch((e) => {
          message.error("upload failed");
        });
      // return false;
    },
    showUploadList: false,
  };

  return (
    <Spin spinning={ImageStore.isUploading}>
      <StyledUploaderContainer>
        <Dragger {...beforeUploadProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single upload. Strictly prohibit from uploading
            company data or other band files
          </p>
        </Dragger>
        <div>
          {ImageStore.serverFile ? (
            <StyledResult>
              <StyledTitle>Result</StyledTitle>
              <dl>
                <dt>Your link is:</dt>
                <dd>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={ImageStore.serverFile.attributes.url.attributes.url}
                  >
                    Click to open
                  </a>
                  <span> |</span>
                  <Button
                    type="link"
                    style={{ color: "black" }}
                    onClick={() => {
                      copyToClip(
                        ImageStore.serverFile.attributes.url.attributes.url
                      );
                    }}
                  >
                    Click to copy
                  </Button>
                </dd>
                <dt>FileName</dt>
                <dd>{ImageStore.fileName}</dd>
                <dt>Preview</dt>
                <dd>
                  <StyledImage
                    alt="preview"
                    src={getPreviewImage(ImageStore.serverFile.attributes.url)}
                  />
                </dd>
              </dl>
            </StyledResult>
          ) : null}
        </div>
      </StyledUploaderContainer>
    </Spin>
  );
});

export default UploaderComponent;
