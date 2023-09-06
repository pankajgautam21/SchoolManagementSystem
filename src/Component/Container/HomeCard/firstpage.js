import React from "react";
import Card from "./Card";
import {
  ExaminationIcon,
  Resulticon,
  TimeTable,
  HomeWork,
} from "../../../assests/icon";
import { Bellicon } from "../../../assests/icon";
import Navbar from "./Navbar";
export default function Firstpage() {
  return (
    <div>
      <Navbar />

      <div className="container h-100" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <Card icon={ExaminationIcon} path="/attendance" title="Attendance" color="#CBC3E3" />
          </div>
          <div className="col-md-6 col-lg-4">
          <Card icon={TimeTable} title="Time Table" path='/Timetable'color="#FFC0CB"></Card>
          </div>
          <div className="col-md-6 col-lg-4">
            <Card icon={HomeWork} title="Home-Work"  path="/work" color="skyblue"></Card>
          </div>
          <div className="col-md-6 col-lg-4">
            <Card icon={Resulticon} title="Result" path="/result" color="#FFDAB9"></Card>
          </div>
          <div className="col-md-6 col-lg-4">
            <Card icon={Bellicon} title="Notice Board" color="#87cefa"></Card>
          </div>
        </div>
      </div>
    </div>
  );
}
