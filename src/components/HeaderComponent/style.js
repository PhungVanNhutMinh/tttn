import { Row } from "antd"
import styled from "styled-components"

export const WrapperHeader = styled(Row)`
    padding: 10px 0;
    width: 1270px;
    background-color: rgba(26, 125, 255, 1); 
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
`;
export const WrapperTextHeader = styled.span`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    tetx-align: left;
`;
export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;    
    color: #fff;
    gap: 8px;
    font-size: 12px;
`;
export const WrapperTextHeaderSmall = styled.span`
    font-size: 18px;
    color: #fff;
    white-space: nowrap;
`;
export const WrapperContentPopup = styled.p`
  cursor: pointer;
  &:hover {
    color: rgb(26, 148, 255);
  }
`;
