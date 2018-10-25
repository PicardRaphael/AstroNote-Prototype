/*
 * Package Import
 */
import React from 'react';

/*
* Local Import
*/
import Notes from 'src/containers/Notes';

/*
 * Scss Import
 */
import './home.scss';

/*
 * Component
 */
const Home = () => (
  <div className="home">
    <Notes />
  </div>
);

/*
 * Export
 */
export default Home;
