import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between; 
`;

export const Heading = styled.h1`
  margin: 0;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  margin-rigth: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;


export const MainWrapper = styled.main`
  padding-inline: 20px;
  margin-top: 20px;
`;

export const SectionHeading = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  background-color: #365486;
  font-size: 19px;
  color: white;
  padding: 16px;
  text-align: left;
  height: 35px; 
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #ddd;

    td {
      background-color: #C3E2C2;
      color: white;
    }
  }
`;

export const TableData = styled.td`
  padding: 16px;
  width: 20%;
  height: 30px; 
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const ModalWrapper = styled.div`
  padding: 10px;
`;

export const ModalHeading = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const FieldWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const SelectField = styled.select`
  width: calc(100% - 16px); 
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline-none;
`;

export const InputField = styled.input`
  width: calc(100% - 20px); 
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline-none;
`;


export const ButtonDiv = styled.div`
 display: flex;
`
export const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  margin-left: auto;
`;

export const ResultParagraph = styled.p`
  margin-top: 15px;
  font-size: 16px;
  color: #333;
`;

export const EmptyStateContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 80%;
padding-top: 10%;
margin: auto;
`
