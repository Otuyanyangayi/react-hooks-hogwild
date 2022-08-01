import React, { useState } from "react";

function AddNewHog(props){
  const [userInput, setUserInput] = useState({
    name: "",
    specialty: "",
    weight: "",
    "highest medal achieved": "",
    greased: true,
    image: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    // const hogsDisplay = [...props.hogData, userInput]
    props.addHog(userInput)
    // setUserInput("")
    // console.log(hogsDisplay)
  }

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUserInput({...userInput, [e.target.name]: value})
  }
  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name </label>
    <input name="name" type="text" placeholder="Enter name" onChange={handleChange}/>
    <label htmlFor="specialty">Specialty </label>
    <input name="specialty" type="text" placeholder="Enter Specialty" onChange={handleChange}/>
    <label htmlFor="specialty">Greased </label>
    <input
          name="greased"
          type="checkbox"
          checked={userInput.greased}
          onChange={handleChange} />
    <label htmlFor="weight">Weight </label>
    <input name="weight" type="text" placeholder="Enter Weight" onChange={handleChange}/>
    <label htmlFor="medal">Highest medal </label>
    <input name="highest medal achieved" type="text" placeholder="Enter highest Medal" onChange={handleChange}/>
    <label htmlFor="image">image </label>
    <input name="image" type="text" placeholder="Enter image url" onChange={handleChange}/>
    <input type="submit" value="Add Hog" />
  </form>
  )
}

export default AddNewHog