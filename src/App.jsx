import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <div className=''>
      <div 
        className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute'
        style={{background: 'radial-gradient(600px at 1264px 298px, rgba(31.4, 78.4, 47.1, 0.15), transparent 80%)'}}
      >
      </div>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 1g:px-24 lg:py-0'>
        <a href='#content' className='absolute left-0 top-0 block -translate-x-full rounded px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0'>Skip to Content</a>
        <div className='lg:flex lg:justify-between lg:gap-4 text-white'>
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
