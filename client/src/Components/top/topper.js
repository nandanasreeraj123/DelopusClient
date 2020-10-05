import React from "react";
import "./topper.css";
import Dropdown from "react-bootstrap/Dropdown";

export default function Tops() {
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: "url(images/home.png)",
      }}
    >
      <div className="text">
        <h1>Find the mastercraftsman for your dream home!</h1>
        <h3 style={{ color: "rgb(190, 190, 190)" }}>
          Search by location or type of project
        </h3>
      </div>
      <div className="flexing bg">
        <div className="flexing wi-40">
          {/* <input placeholder="Type"></input> */}
          <Dropdown style={{ opacity: "100%" }}>
            <Dropdown.Toggle
              variant="warning"
              id="dropdown-basic"
              className="dropbutton"
              style={{ backgroundColor: "white" }}
            >
              <input placeholder="Type"></input>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <input placeholder="Location"></input> */}
          <Dropdown>
            <Dropdown.Toggle
              variant="warning"
              id="dropdown-basic"
              className="dropbutton"
              style={{ backgroundColor: "white" }}
            >
              <input placeholder="Location"></input>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="flexing wi-40">
          {/* <input placeholder="Project Type"></input> */}
          <Dropdown>
            <Dropdown.Toggle
              variant="warning"
              id="dropdown-basic"
              className="dropbutton"
              style={{ backgroundColor: "white" }}
            >
              <input placeholder="Project Type"></input>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <input placeholder="Project Style"></input> */}
          <Dropdown>
            <Dropdown.Toggle
              variant="warning"
              id="dropdown-basic"
              className="dropbutton"
              style={{ backgroundColor: "white" }}
            >
              <input placeholder="Project Style"></input>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="search">
          <button>Search</button>
        </div>
      </div>
      <p className="bottom">Billhart Houses,Billhart Architects</p>
    </div>
  );
}
