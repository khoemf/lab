import React, { Fragment } from 'react'

export default function Test20240727() {

  const showCreateItem = true;
  const showEditItem = false;
  const showDeleteItem = true;

  return (
    <>
    {showCreateItem && <Fragment><input type="button" name="createItem" value="Create Item"></input><br/><br/></Fragment>}
    
    {showEditItem && <span><input type="button" name="editItem" value="Edit Item"></input><br/><br/></span>}
    
    {showDeleteItem && <span><input type="button" name="deleteItem" value="Delete Item"></input><br/><br/></span>}

    <br/>
    End of showing button(s)

    </>
  )
}
