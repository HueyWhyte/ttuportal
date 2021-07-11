import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Container,
  ProfileImage,
  Table,
  TextFieldCon,
  FieldsContainer,
  PaymentContainer,
  Button,
} from "../components/components";
import { updateStudent } from "../redux/actions/auth";
import { getPayments } from "../redux/actions/payment";

class Profile extends Component {
  state = {
    fname: this.props.student.firstname,
    lname: this.props.student.lastname,
    oname: this.props.student.othername,
    gender: this.props.student.gender,
    religion: this.props.student.religion,
    home_address: this.props.student.home_address,
    mstatus: this.props.student.marital_status,
    title: this.props.student.title,
    dob: this.props.student.dob,
    email: this.props.student.email,
    phone: this.props.student.phone,
    image: this.props.student.image,
  };

  componentDidMount() {
    this.props.getPayments();
  }

  handleTextInput = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  update = () => {
    let {
      oname,
      gender,
      religion,
      home_address,
      mstatus,
      title,
      dob,
      email,
      phone,
    } = this.state;

    let data = {
      othername: oname,
      gender,
      religion,
      home_address,
      email,
      phone,
      title,
      dob,
      marital_status: mstatus,
    };

    this.props.updateStudent(data);
  };

  render() {
    let {
      fname,
      lname,
      oname,
      mstatus,
      email,
      phone,
      title,
      gender,
      religion,
      home_address,
      dob,
      image,
    } = this.state;
    let payments = this.props.payments;

    return (
      <Container style={{ alignItems: "center" }}>
        <ProfileImage style={{ margin: "10px auto" }} src={image} alt="" />

        <FieldsContainer>
          <TextFieldCon>
            <label htmlFor="fname">First Name</label>
            <input
              onChange={(e) => this.handleTextInput(e)}
              value={fname}
              type="text"
              name="fname"
              id="fname"
              disabled
            />
          </TextFieldCon>

          <TextFieldCon>
            <label htmlFor="lname">Last Name</label>
            <input
              onChange={(e) => this.handleTextInput(e)}
              value={lname}
              type="text"
              name="lname"
              id="lname"
              disabled
            />
          </TextFieldCon>

          <TextFieldCon>
            <label htmlFor="oname">Other Names</label>
            <input
              onChange={(e) => this.handleTextInput(e)}
              value={oname}
              type="text"
              name="oname"
              id="oname"
            />
          </TextFieldCon>

          <TextFieldCon>
            <label htmlFor="title">Title</label>
            <select
              onChange={(e) => this.handleTextInput(e)}
              value={title}
              name="title"
              id="title"
            >
              <option value=""></option>
              <option value="male">Mr.</option>
              <option value="Female">Ms.</option>
              <option value="Female">Mrs.</option>
            </select>
          </TextFieldCon>

          <TextFieldCon>
            <label htmlFor="gender">Gender</label>
            <select
              onChange={(e) => this.handleTextInput(e)}
              value={gender}
              name="gender"
              id="gender"
            >
              <option value=""></option>
              <option value="male">Male</option>
              <option value="Female">Female</option>
            </select>
          </TextFieldCon>

          <TextFieldCon>
            <label htmlFor="dob">DOB</label>
            <input
              onChange={(e) => this.handleTextInput(e)}
              value={dob}
              type="date"
              name="dob"
              id="dob"
            />
          </TextFieldCon>

          <TextFieldCon>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => this.handleTextInput(e)}
              value={email}
              type="email"
              name="email"
              id="email"
            />
          </TextFieldCon>

          <TextFieldCon>
            <label htmlFor="pnumber">Phone Number</label>
            <input
              onChange={(e) => this.handleTextInput(e)}
              value={phone}
              type="number"
              name="phone"
              id="pnumber"
              max="10"
            />
          </TextFieldCon>

          <TextFieldCon>
            <label htmlFor="status">Marital Status</label>
            <select
              onChange={(e) => this.handleTextInput(e)}
              value={mstatus}
              name="mstatus"
              id="status"
            >
              <option value=""></option>
              <option value="male">Single</option>
              <option value="Female">Married</option>
            </select>
          </TextFieldCon>

          <TextFieldCon>
            <label htmlFor="religion">Religious Domination</label>
            <select
              onChange={(e) => this.handleTextInput(e)}
              value={religion}
              name="religion"
              id="religion"
            >
              <option value=""></option>
              <option value="christian">Christian</option>
              <option value="muslim">Muslim</option>
              <option value="Bud">Buda</option>
            </select>
          </TextFieldCon>

          <TextFieldCon>
            <label htmlFor="haddr">Home Address</label>
            <input
              onChange={(e) => this.handleTextInput(e)}
              value={home_address}
              type="text"
              name="home_address"
              id="haddr"
              max="10"
            />
          </TextFieldCon>
        </FieldsContainer>

        <Button onClick={() => this.update()}>Update Profile</Button>

        <h1 style={{ textAlign: "center", marginBottom: 15, marginTop: 50 }}>
          Statement of Account
        </h1>

        <PaymentContainer>
          <Table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Date</th>
                <th>Level</th>
                {/* <th>Type</th> */}
                <th>Fees</th>
                <th>Paid</th>
                <th>Bal</th>
              </tr>
            </thead>
            {payments.map((pay) => (
              <tbody key={pay.id}>
                <tr>
                  <td>{pay.year}</td>
                  <td>{pay.timestamp}</td>
                  <td>{pay.level}</td>
                  {/* <td>{pay.type}</td> */}
                  <td>{pay.fees}</td>
                  <td>{pay.paid}</td>
                  <td>{(pay.fees - pay.paid).toFixed(2)}</td>
                </tr>
              </tbody>
            ))}
          </Table>
        </PaymentContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.auth.student,
    payments: state.payment.payments,
  };
};

export default connect(mapStateToProps, { updateStudent, getPayments })(
  Profile
);
