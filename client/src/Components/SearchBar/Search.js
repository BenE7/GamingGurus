import React from "react";


 const Search =(props) => {
   
    return (
      <div>
    
      <div className="row">
      <div className="col s6">
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">textsms</i>
            <input name={props.name}  onChange={props.changeOnInput}  {...props}type="text" id="autocomplete-input" className="autocomplete"/>
            <label htmlFor="autocomplete-input">Autocomplete</label>
            <button onClick={props.handleSubmit} className="btn waves-effect waves-light" type="submit" name="action">Submit
  <i className="material-icons right">send</i>
</button>
          </div>
        </div>
        
  
      
      </div>
    </div>
      </div>
    )
};
export default Search;