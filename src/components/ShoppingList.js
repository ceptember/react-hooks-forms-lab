import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
//import { v4 as uuid } from "uuid"; // I added this. Assignmnent came with uuid in ItemForm

function ShoppingList({ items }) {
  //State for the Filter component
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItem, setSearchedItem] = useState(""); 

  //State for the ItemForm component
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("Produce");
  const [itemsArr, setItemsArr] = useState(items);

  //Set new state for the Filter category  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  //Set new state for the Filter search  
  function handleSearchChange(event){
    setSearchedItem(event.target.value); 
  }

  //Set new state for the ItemForm new item name
  function handleNewName(event){
    setNewName(event.target.value);
    
  };

  //Set new state for the ItemForm new item category 
  function handleNewCategory(event){
    setNewCategory(event.target.value);
  };

  //Sumbit new item from ItemForm
  function handleNewItemSubmit(event, submittedItem){
    event.preventDefault(); 
    setItemsArr([...itemsArr, submittedItem])
    setNewName("");
    setNewCategory("Produce")
  }


  // Items for the list 
  const itemsToDisplay = itemsArr.filter((item) => {
    if (selectedCategory === "All" && searchedItem === "") 
      {return true}
    else if (searchedItem){
      return item.name.includes(searchedItem); 
    }  
    else {
      return item.category === selectedCategory;
    }  
  });


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {handleNewItemSubmit} 
                onNameChange = {handleNewName} 
                onCategoryChange ={handleNewCategory} 
                newName={newName} 
                newCategory={newCategory}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchedItem}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
