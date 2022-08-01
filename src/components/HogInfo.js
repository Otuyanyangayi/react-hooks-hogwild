import React from "react";

function HogInfo({hog}) {
  return (
    <>
      <h4 className="hoggyText">{hog.name}'s information</h4>
      <ul>
        <li>Name: {hog.name}</li>
        <li>Specialty: {hog.specialty}</li>
        <li>Weight: {hog.weight} Kilograms</li>
        <li>IsGreased: {hog.greased ? "Yes" : "No"}</li>
        <li>Highest Medal: {hog["highest medal achieved"]}</li>
      </ul>
    </>
  )
}

export default HogInfo;