import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";

class AppointmentDay extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="AppointmentContainer">
        <p class="Para">
          <h2 className="span3 margin_10">APPOINTMENT OF THE DAY :</h2>
        </p>
        <div class="PContainer1 margin_10">
          {this.props.patients.map((patient) => (
            <div class="Patientcard">
              <div class="PatientNameTime ">
                <span id="PatientName">Patient Name: {patient.username}</span>  <span>Time: {patient.start_time} </span>
              </div>
              <div class="Patientprofilebutton">
                <Link to={"/patientdashboard?id=" + patient.patient}>
                  <Button
                    variant="contained"
                    color="secondary"
                    id="TButton"
                    className="defred"
                    onclick
                  >
                    View Profile
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AppointmentDay;
