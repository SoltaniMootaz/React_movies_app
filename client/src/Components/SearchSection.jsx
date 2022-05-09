import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'

function SearchSection() {
  return (
    <React.Fragment>
        <InputGroup className="mb-3">
          <FormControl placeholder="Look for a movie" aria-label="search"/>
        <Button variant="outline-secondary" id="button-addon2">
             Search
        </Button>
  </InputGroup>
  
    </React.Fragment>
  )
}

export default SearchSection