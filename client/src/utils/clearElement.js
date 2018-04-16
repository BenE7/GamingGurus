const ClearElement = (elementID) =>
{
  if (elementID.length>0) {  
    return document.getElementById(elementID).innerHTML = "";
  }

}
export default ClearElement