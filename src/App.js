import React, { Fragment } from 'react';
import styles from './app.module.css';
import Header from './components/header'
import Footer from './components/footer';

const App = () => {
  return (
    <Fragment>
      {/* <div className={styles.App}> */}

        <Header />
        <div className={styles.container}>

        </div>
        <Footer />
      {/* </div> */}
    </Fragment>
  );
}

export default App;
