import { ArrowDownwardOutlined } from "@mui/icons-material";

const Header = () => {
return (
  <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/background1.jpg')" }}>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-800">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex flex-col text-slate-200 text-center gap-4">
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
            <a href='/'>Arshvir Chaudhary</a>
          </h1>
          <h2 className='mtext-lg font-medium tracking-tight sm:text-xl'>
            Software Developer
          </h2>
          <p className='leading-normal max-w-xs sm:max-w-md'>
            I like building cool ideas. The more complicated, the better I find them.
          </p>
        </div>
        <div className="absolute bottom-24 w-full flex justify-center">
          <a href="#experience">
          <button className="flex text-white py-2 px-4 rounded-2xl items-center gap-4 border-slate-200 border">
            Continue <ArrowDownwardOutlined />
          </button>
          </a>
        </div>
      </div>
    </div>
  </div>
);
};

export default Header