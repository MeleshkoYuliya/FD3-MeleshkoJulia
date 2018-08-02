"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import VotesBlock from './components/VotesBlock';

let questionText='Чем чаще празднует Лицей <br> Свою святую годовщину,<br> Тем робче старый круг друзей <br> В семью стесняется едину,<br>Тем реже он; тем праздник наш';

ReactDOM.render(
  <VotesBlock 
    question={questionText}
  />
  , document.getElementById('container') 
);

