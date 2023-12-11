import './App.css';
// import Nav from './component/navbar/Nav'
import Header from './component/header/Header';
import Main from './component/main/Main';

function App() {
  return (
    <div>
      {/* <Nav /> */}
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
