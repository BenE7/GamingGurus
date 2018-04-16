import React, { Component } from "react";
import "./Bio.css";
import Faves from "../Faves";

class Bio extends Component {
  render() {
     return (
<div className="row">
  <div id="Bio" className="col s12">
  <div id="bio-wrapper" className="col s7">
    <h3 id="bio-head">My Accolades and Achievements</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet sem sit amet tortor accumsan lacinia sit amet vel massa. Vestibulum ultrices, libero vitae rutrum hendrerit, orci tortor bibendum nunc, at blandit diam risus et sem. Vivamus non mattis enim, vel lobortis sem. Vestibulum lobortis tincidunt lectus ut rutrum. Nullam egestas placerat mauris, quis venenatis sapien consequat a. Phasellus pellentesque tortor eros, pellentesque elementum enim accumsan eget. Sed tincidunt at mauris vel cursus. Nunc imperdiet elit non finibus tempor. Nullam vel ex in risus dapibus gravida. Etiam porta felis eget orci interdum fermentum. Praesent mattis eget nisi sit amet sodales. Sed neque nisl, bibendum ac porta eget, mollis at ante.</p>
    <ul>
      <li><span role="img" aria-label="trophy emoji">🏆</span> In hac habitasse platea dictumst</li>
      <li><span role="img" aria-label="trophy emoji">🏆</span> Vivamus scelerisque rutrum sem, pharetra facilisis tellus ullamcorper vitae</li>
      <li><span role="img" aria-label="trophy emoji">🏆</span> Duis auctor egestas nisl</li>
      <li><span role="img" aria-label="trophy emoji">🏆</span> Duis cursus rutrum tortor et tempor</li>
    </ul>
  </div>
  <div className="col s5">
  <Faves/>
  </div>
  </div>
</div>
     )}};
export default Bio;