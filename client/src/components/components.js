import styled from "styled-components";
import { device } from "../assets/screens";

// navigation bar styles
export const NavContainer = styled.nav`
  background-color: white;
  height: 45px;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 0px 10px 0px #bbb6b6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 200;

  > a {
    text-decoration: none;

    @media ${device.tablet} {
      display: none;
    }
  }

  > .nav_btn {
  }

  > .nav_btn_active {
    background-color: #1b337f;
    color: white;
    padding: 8px;
    border-radius: 8px 8px 0 0;
  }
`;
export const SideNavBtn = styled.p`
  margin-right: 5px;
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`;
export const ProfileImageSmall = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media ${device.tablet} {
    display: none;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;

  @media ${device.tablet} {
    width: 97%;
  }
`;

export const Button = styled.p`
  cursor: pointer;
  background-color: ${(props) => (props.primary ? "#1b337f" : "red")};
  color: white;
  border-radius: 12px;
  margin: 10px auto;
  padding: 5px 12px;
  font-size: 17px;
  text-align: center;
  font-weight: bold;
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

  @media ${device.mobile} {
    height: 50px;
    width: 55px;
    margin-right: 3px;
    margin-left: 0px;
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

  @media ${device.mobile} {
    padding: 4px;
    width: 98%;
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
    width: 85vw;
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
  width: 100%;
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

// news styles
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
export const NewsHeader = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 85%;
  border-radius: 20px;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);

  @media ${device.tablet} {
    width: 92vw;
  }
`;

export const NewsBody = styled.section`
  width: 85%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  margin-bottom: 75px;
  white-space: pre-wrap;

  > p {
    margin-top: 20px;
  }

  @media ${device.tablet} {
    width: 92vw;
  }
`;
export const Newsmeta = styled.div`
  margin: 12px;

  > p {
    margin-top: 6px;
  }
`;
export const NewsForm = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    width: 92vw;
  }

  > input {
    margin: 5px 0px 10px 0px;
    border-radius: 12pxtype= "submit" value= "POST";
    border: 1px solid grey;
    height: 30px;
    border-radius: 12px;
    padding: 2px 10px;
  }

  > textarea {
    margin: 5px 0px 10px 0px;
    border-radius: 12px;
    border: 1px solid grey;
    padding: 8px;
  }
`;

// book styles
export const BooksContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
export const BookCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 8px;
  margin: 5px;
  display: flex;
  width: 300px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
`;
export const BookImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-top: auto;
  margin-bottom: auto;
`;
export const BookMeta = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1px;
  margin-left: 4px;
`;
