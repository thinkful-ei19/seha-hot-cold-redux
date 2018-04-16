import React from 'react';
import store from '../store'

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
  
  }
    render(){
      return(
      <div>
        <Header/>
        <main role="main">
          <GuessSection />
          <StatusSection />
          <InfoSection />
        </main>
      </div>
    );
  }
}
