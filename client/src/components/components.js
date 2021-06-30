import styled from "styled-components";
import { device } from "../assets/screens";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;

  @media ${device.tablet} {
    width: 97%;
  }
`;

export const Button = styled.p`
  cursor: pointer;
  background-color: ${(props) => (props.primary ? "blue" : "red")};
  color: white;
  border-radius: 12px;
  margin: 10px auto;
  padding: 5px 12px;
  font-size: 17px;
  text-align: center;
`;

// Home page styles
export const ProfileImage = styled.img`
  height: 130px;
  width: 130px;
  border-radius: 100%;
  margin-right: 10px;
  margin-left: 8px;
  border: 2px solid white;

  @media ${device.tablet} {
    height: 90px;
    width: 90px;
  }
`;

// student components
export const StudentInfoContainer = styled.div`
  display: flex;
  background-color: #1b337f;
  border-radius: 12px;
  width: 98.6%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 8px;
  color: white;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);

  @media ${device.tablet} {
    flex-direction: row;
    width: 96%;
  }
`;
export const LargeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 50px;
  }

  @media ${device.tablet} {
    h1 {
      font-size: 38px;
    }
  }
`;
export const MinInfo = styled.section`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: white;
  border-radius: 12px;
  width: 28%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  justify-content: space-evenly;
  margin-top: 15px;

  > p {
    margin-top: 2px;
    margin-bottom: 2px;
  }

  @media ${device.tablet} {
    height: inherit;
    width: 100%;
  }
`;
export const CoursesContainer = styled.section`
  margin-top: 30px;
  padding: 8px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  margin-bottom: 15px;
  background-color: white;
`;
export const Table = styled.table`
  width: 100%;
  text-align: left;
  border-spacing: 9px;

  > tr {
    border-bottom: 3px solid grey;
  }
`;
export const ClassMateImg = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 18px;
  border: 2px solid #1b337f;
`;
export const MyClass = styled.div`
  display: flex;
  background-color: rgba(27, 50, 127, 0.25);
  padding: 15px 8px;
  border-radius: 12px;
  font-weight: bold;
  margin-top: 1px;
  margin-bottom: 4px;
`;

// news components
export const NewsCard = styled.div`
  display: flex;
  margin-bottom: 5px;
  border-radius: 12px;
  width: 38vw;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  cursor: pointer;

  @media ${device.tablet} {
    width: 90vw;
  }
`;
export const NewsDetails = styled.div`
  display: flex;
  position: absolute;
  background-color: #0000007f;
  width: inherit;
  height: 220px;
  z-index: 1;
  border-radius: 12px;
  flex-direction: column;
  color: white;

  .reporter {
    margin: 10px;
    font-weight: bold;
  }

  .title {
    font-weight: bold;
    margin: 10px auto auto 10px;
    font-size: 21px;
  }

  .timestamp {
    margin: 10px 10px 10px auto;
  }
`;

// classmates components
export const MateCard = styled.div`
  display: flex;
  padding: 5px;
  margin-bottom: 5px;
  background-color: #fafafa;
  border-radius: 12px;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e0e0e0;

  @media ${device.tablet} {
    width: 95vw;
  }
`;

// login componentes
export const TextFieldCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  flex-wrap: wrap;

  > input {
    border: 1px solid grey;
    background-color: #eeeeee;
    border-radius: 12px;
    height: 35px;
    padding: 0 12px;
    width: 400px;
    font-size: 17px;

    @media ${device.tablet} {
      width: 85vw;
    }
  }

  > select {
    border: 1px solid grey;
    background-color: #eeeeee;
    border-radius: 12px;
    height: 35px;
    padding: 0 12px;
    width: 425px;
    font-size: 17px;

    @media ${device.tablet} {
      width: 88vw;
    }
  }
`;
export const ExamP = styled.p`
  color: red;
  margin-bottom: 50px;
  margin-top: 20px;
  width: 370px;
  text-align: justify;

  @media ${device.tablet} {
    width: 90vw;
  }
`;

// profile components
export const FieldsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;

  @media ${device.tablet} {
  }
`;
export const PaymentContainer = styled.section`
  margin-top: 30px;
  padding: 8px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  margin-bottom: 15px;
  background-color: white;

  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`;
