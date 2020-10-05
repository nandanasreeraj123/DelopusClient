import React from "react";
import "./reg.css";
import Dropdown from "react-bootstrap/Dropdown";

export default function RegForm() {
  return (
    <div className="outer">
      <div className="padd1">
        <div className="flexing">
          <div>
            <h1>The Title</h1>
          </div>
          <div className="date">
            <p style={{ marginBottom: "0%" }}>Hosted by : Delopus</p>
            <p style={{ fontWeight: "bold" }}>2 Oct 2020 - 4 Dec 2020</p>
          </div>
        </div>
        <div className="steps">
          <div style={{ backgroundColor: "orange", color: "white",marginBottom:"2%"}}>
            Registration<p>(step 1)</p>
          </div>
          <div
            style={{ backgroundColor: " rgb(255, 241, 215)", color: "orange",marginBottom:"2%" }}
          >
            Payment<p>(step 2)</p>
          </div>
          <div
            style={{ backgroundColor: " rgb(255, 241, 215)", color: "orange",marginBottom:"2%" }}
          >
            Confirmation<p>(step 3)</p>
          </div>
        </div>
        <div className="padd2">
          <div className="he">Registration</div>
          <div style={{ fontWeight: "bold" }}>
            Note : In case you want to participate individually just fill in
            team member 1.
          </div>
          <div className="outer-input-form">
            <div className="flexing">
              <div className="leftcomponent">
                <div className="items">
                  <p style={{ fontSize: "120%" }}>Member 1</p>
                  <div>
                    <p style={{ color: "black" }}>Name</p>
                    <input placeholder="Full Name" className="wi-input"></input>
                  </div>
                </div>
                <div className="items">
                  <div>
                    <p style={{ color: "black" }}>Delopus Id</p>
                    <input className="wi-input"></input>
                  </div>
                </div>
                <div className="items">
                  <div>
                    <p style={{ color: "black" }}>Type of account</p>
                    <div className="flexing wi">
                      <div>
                        <div className="in-margin">
                          <input type="checkbox"></input> Student
                        </div>
                        <div className="in-margin">
                          <input type="checkbox"></input> Professional
                          Architect/Designer
                        </div>
                        <div className="in-margin">
                          <input type="checkbox"></input> Others
                        </div>
                      </div>
                      <div>
                        <div className="in-margin">
                          <input type="checkbox"></input> Firm/Organisation
                        </div>
                        <div className="in-margin">
                          <input type="checkbox"></input> Product/Service
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items">
                  <div>
                    <input placeholder="Email Id" className="wi-input"></input>
                  </div>
                </div>
                <div className="items">
                  <div>
                    {/* <input
                      placeholder="Select Country"
                      className="wi-input"
                    ></input> */}
                    <Dropdown>
                      <Dropdown.Toggle
                        style={{ backgroundColor: "white" }}
                        variant="warning"
                        id="dropdown-basic"
                        className="dropbutton"
                      >
                        <input
                          placeholder="Select Country"
                          className="wi-input dropinput"
                        ></input>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropmenu">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="items">
                  <div>
                    {/* <input
                      placeholder="Select state"
                      className="wi-input"
                    ></input> */}
                    <Dropdown>
                      <Dropdown.Toggle
                        style={{ backgroundColor: "white" }}
                        variant="warning"
                        id="dropdown-basic"
                        className="dropbutton"
                      >
                        <input
                          placeholder="Select State"
                          className="wi-input dropinput"
                        ></input>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropmenu">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="items">
                  <div>
                    <input
                      placeholder="Enter City"
                      className="wi-input"
                    ></input>
                  </div>
                </div>
                <div className="items">
                  <div>
                    <input placeholder="Contact" className="wi-input"></input>
                  </div>
                </div>
              </div>
              <div className="leftcomponent">
                <div className="items">
                  <p style={{ fontSize: "120%" }}>Member 2</p>
                  <div>
                    <p style={{ color: "black" }}>Name</p>
                    <input placeholder="Full Name" className="wi-input"></input>
                  </div>
                </div>
                <div className="items">
                  <div>
                    <p style={{ color: "black" }}>Delopus Id</p>
                    <input className="wi-input"></input>
                  </div>
                </div>
                <div className="items">
                  <div>
                    <input placeholder="Email Id" className="wi-input"></input>
                  </div>
                </div>
                <div className="items">
                  <div>
                    <input placeholder="Contact" className="wi-input"></input>
                  </div>
                </div>
                <div className="items">
                  <p style={{ fontSize: "120%" }}>Member 3</p>
                  <div>
                    <p style={{ color: "black" }}>Name</p>
                    <input placeholder="Full Name" className="wi-input"></input>
                  </div>
                </div>
                <div className="items">
                  <div>
                    <p style={{ color: "black" }}>Delopus Id</p>
                    <input className="wi-input"></input>
                  </div>
                </div>
                <div className="items">
                  <div>
                    <input placeholder="Email Id" className="wi-input"></input>
                  </div>
                </div>
                <div className="items">
                  <div>
                    <input placeholder="Contact" className="wi-input"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="mb">
            <div className="mb">
              <p>Where did you hear about us ?</p>
              <input placeholder="From a Friend" className="wi-input2"></input>
            </div>
            <div className="mb">
              <p>Enter Promocode</p>
              <div className="flexing wi-input3">
                <input
                  placeholder="Enter Promocode"
                  className="wi-input4"
                ></input>
                <button className="button-apply">Apply</button>
              </div>
            </div>
            <div>
              <input type="checkbox"></input> I agree to the terms and
              conditions.
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="button-submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
