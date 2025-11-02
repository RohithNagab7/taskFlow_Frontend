import styled from "styled-components";
import type { FlexRowDivProps } from "./GlobalUtils";
import { Link } from "react-router-dom";

export const LayoutWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%:
height: 100%;
justify-content: center;
align-items: center;
gap: 12px;
`;

export const MainContentWrapper = styled.div`
display: flex;
flex-direction: row;
gap: 24px;
padding: 24px;
justify-content: space-between;
align-items: flex-start;
width: 95%;
`

export const FlexRowDiv = styled.div<FlexRowDivProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.$justifycontent || "center"};
  align-items: ${(props) => props.$alignitems || "flex-start"};
  width: ${(props) => props.$width || "100%"};
  gap: ${(props) => props.$gap || ""};
`;

export const ColumnFlexDiv = styled.div<FlexRowDivProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.$justifycontent || "space-between"};
  align-items: ${(props) => props.$alignitems || "flex-start"};
  gap: ${(props) => props.$gap || "4px"};
  width: 100%;
`;

export const LoginFormWrapper = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const PrimaryText = styled.p`
  font-weight: 500;
  font-size: 14px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 12px;
  outline: none;
  font-size: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: #fe6c02;
  }

  &:focus {
    border-color: #fe6c02;
    box-shadow: 0 0 0 2px rgba(254, 108, 2, 0.15);
  }

  &::placeholder {
    color: #9ca3af; /* subtle gray placeholder */
  }

  &:disabled {
    background-color: #f3f4f6;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  border-radius: 12px;
  border: 1px solid #fe6c02;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const SubmitButton = styled.button`
  margin-top: 16px;
  padding: 10px 0;
  background-color: #fe6c02;
  color: white;
  border: none;
  border-radius: 12px;
  width: 60%;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ff812e;
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const HeadingText = styled.p`
  color: #fe6c02;
  font-size: 26px;
  font-weight: 800;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 95%;
  border-bottom: 1px solid #fe6c02;
`;
export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: #ff7f32; /* orange hover */
    }
  }
`;

export const StyledLink = styled(Link)<{ active?: number }>`
  text-decoration: none;
  color: ${({ active }) => (active ? "#ff7f32" : "#333333")};
  font-weight: 500;
  border-bottom: ${({ active }) => (active ? "2px solid #ff7f32" : "none")};
  padding-bottom: 4px;
  transition: all 0.2s ease;

  &:hover {
    color: #ff7f32;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff8f0;
  border: 1px solid #f5c27f;
  border-radius: 8px;
  padding: 14px 18px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const Name = styled.h4`
  color: #fe6c02;
  margin: 0;
`;

export const Info = styled.p`
  color: #444;
  font-size: 0.9rem;
  margin: 0;
`;

export const DeleteButton = styled.button`
  background: #fe6c02;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
`;

export const AgentListWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px 10px 10px 10px;
  border: 1px solid #fe6c02;
  border-radius: 6px;


  
  /* Scroll settings */
  max-height: 70vh;
  overflow-y: auto;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e86a33; /* orange accent */
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #d65a28;
  }

  &::-webkit-scrollbar-track {
    background-color: #f7f7f7;
    border-radius: 6px;
  }
`;
export const DistributedListWrapper = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 10px 10px 10px 10px;
  border: 1px solid #fe6c02;
  border-radius: 6px;

  /* Scroll settings */
  max-height: 70vh;
  overflow-y: auto;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e86a33; /* orange accent */
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #d65a28;
  }

  &::-webkit-scrollbar-track {
    background-color: #f7f7f7;
    border-radius: 6px;
  }
`;

export const FormSection = styled.div<{fileupload?: boolean}>`
  width: ${(props) => props.fileupload ? "30%" : "60%"};
`;

export const TaskHeader = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #fe6c02;
  margin: 12px 0 8px 0;
  border-bottom: 2px solid #fe6c02;
  padding-bottom: 4px;
  width: fit-content;
`;

/* 🟧 Task list container (scrollable) */
export const TaskListContainer = styled.div`
  max-height: 220px; /* adjust as needed */
  overflow-y: auto;
  margin-top: 6px;
  padding-right: 4px;

  /* Smooth scroll styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #fe6c02;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #f5f5f5;
  }
`;

/* 🟧 Individual task block */
export const TaskBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px 0;
`;

/* 🟧 Divider line between tasks */
export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 6px 0;
`;
