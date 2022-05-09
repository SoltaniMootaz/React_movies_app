import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

function GenreDropdown() {
    let list_genre=["Action","Adventure","Romance","Thriller","Horror","Sci-Fi"];
  
  return (
    <React.Fragment>
    <DropdownButton
      variant="outline-secondary"
      title="Genres"
      id="input-group-dropdown-1"
    >
       
      {
          list_genre.map((element)=> <Dropdown.Item href="#">{element}</Dropdown.Item>)
      }
      <Dropdown.Divider />
      <Dropdown.Item href="#">All</Dropdown.Item>
    </DropdownButton>
    </React.Fragment>
  )
}

export default GenreDropdown