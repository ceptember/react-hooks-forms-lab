import React from "react";
import { v4 as uuid } from "uuid"; //Assignment came with this imported here

// Test failed - says it expects onItemFormSubmit to be called with the new item object
// I think that means I have to create the new item in ItemForm component and pass it up to ShoppingList 

//put an empty new item in the state of the parent
//pass it to the child as a prop
//Also pass the function as a prop
// Create the new item in the child component
// But how to pass it back up to the parent? Can it go as an argument in the callback?  


function ItemForm(props) {

  const newItem = {
    id: uuid(), 
    name: props.newName,
    category: props.newCategory,
  };


  return (
    <form className="NewItem" onSubmit ={(event) => props.onItemFormSubmit(event, newItem)} >
      <label>
        Name:
        <input type="text" name="name" value={props.newName} onChange={props.onNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={props.newCategory} onChange={props.onCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
