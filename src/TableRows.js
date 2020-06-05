import React from "react";
import moment from "moment"; // imported the moment js
const TableRows = props => {
  const changeHandler = () => {
    props.setClickedRow(props.element.id);
  };
  const a = moment(props.element.checkOutDate); // using moment js function to pass in checkout date
  const b = moment(props.element.checkInDate); // using moment js function to pass in checkout date
  const differenceOfDays = a.diff(b, "days"); // calculates the differenceOfDays
  return (
    <tr
      onClick={changeHandler}
      className={props.isClicked ? "clickedRow" : "unclicked"}
    >
      {/*assigns key called index to table row*/}
      {/*retrieves the data for the table using array element by accessing object properties*/}
      <th scope="row">{props.element.id}</th>
      <td>{props.element.title}</td>
      <td>{props.element.firstName}</td>
      <td>{props.element.surname}</td>
      <td>{props.element.email}</td>
      <td>{props.element.roomId}</td>
      <td>{props.element.checkInDate}</td>
      <td>{props.element.checkOutDate}</td>
      <td>{differenceOfDays}</td>
    </tr>
  );
};

export default TableRows;
