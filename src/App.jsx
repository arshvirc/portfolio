import Header from './components/header/Header';
import Main from './components/main/Main';

import './App.css';

function App() {
  return (
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    <div>
      {/* <Nav /> */}
      {/* <div> */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 bg-[#]">
        <div className='lg:flex lg:justify-between lg:gap-8'>
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
