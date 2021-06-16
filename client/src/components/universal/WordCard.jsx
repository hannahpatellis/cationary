import React from 'react';
import { Card, Label } from 'semantic-ui-react';
const styleWordClass = {
    fontSize: '.75em',
    fontStyle: 'italic',
    paddingLeft: '5px',
    color: 'rgba(0,0,0,.6)'
}
const WordCard = () => (
  
<div class="ui card">
  <div class="content">
    <div class="header">Word <span style={styleWordClass}>n.</span></div>
  </div>
  <div class="content">
    <div class="description">description</div>
  </div>
  <div class="extra content">
    <Label as='a' image>
      <img src='/images/avatar/small/joe.jpg' />
      Joe
    </Label>
  </div>
</div>


)

export default WordCard;
