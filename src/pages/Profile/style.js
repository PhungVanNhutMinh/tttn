import { Upload } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled.h1`
  color: #000;
  font-size: 18px;
  margin: 4px 0;
`;

export const WrapperContentProfile = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  width: 600px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 10px; 
  gap: 30px; 
`;

export const WrapperLabel = styled.label`
  color: #000;
  font-size: 12px;
  line-height: 30px;
  font-weight: 600;
  width: 60px;
  text-align: left;
`;

export const WrapperInput = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const WrapperUploadFile = styled(Upload)`
  &.ant-upload.ant-upload-select.ant-upload-select-picture-card {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  & .ant-upload-list-item-info {
    display: none;
  }
`;


//quay lại trang chủ frofile
export const WrapperBackButton = styled.div`
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    color: #666;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px; /* Cách phần header ra */
    width: fit-content;
    transition: all 0.3s ease;

    &:hover {
        color: rgb(26, 148, 255);
        transform: translateX(-5px);
    }
`;
