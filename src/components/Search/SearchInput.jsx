
import TextField from '@material-ui/core/TextField'
import React from 'react'

function SearchFormInput() {
  
  return (
    <form noValidate autoComplete="off" className="form-container">
      <TextField
        variant="outlined"
        id="custom-styled-outlined-input"
        label={'Search here'}
        InputLabelProps={{ shrink: false, size:'small'}}
      />
    </form>
  )
}

export default SearchFormInput