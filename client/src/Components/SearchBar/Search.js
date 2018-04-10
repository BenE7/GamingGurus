import React from "react";


 const Search =(props) => {
   
    return (
      <div>
    
      <div class="row">
      <div class="col s6">
        <div class="row">
          <div class="input-field col s6">
            <i class="material-icons prefix">textsms</i>
            <input name={props.name}  onChange={props.changeOnInput}  {...props}type="text" id="autocomplete-input" class="autocomplete"/>
            <label for="autocomplete-input">Autocomplete</label>
            <button onClick={props.handleSubmit} class="btn waves-effect waves-light" type="submit" name="action">Submit
  <i class="material-icons right">send</i>
</button>
          </div>
        </div>
        
  
      
      </div>
    </div>
      </div>
    )
};
export default Search;