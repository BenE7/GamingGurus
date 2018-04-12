import React from "react";
import "./Search.css"


 const Search =(props) => {
   
    return (
      <div>
    
      <div class="row">
      <div class="col s6">
        <div class="row">
          <div class="input-field col s6">
            <input name={props.name}  onChange={props.changeOnInput}  {...props}type="text" id="autocomplete-input" class="autocomplete"/>
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