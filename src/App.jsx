import { useEffect, useState } from 'react';
import Linkedin from './components/linkedin';
import GitHub from './components/github';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrency';

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("PKR");
  const [to, setTo] = useState("USD");
  const [convertAmount, setConvertAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  useEffect(() => {
    if (!currencyInfo || !currencyInfo[to]) {
      setConvertAmount(0);
      return;
    }
    setConvertAmount((amount * currencyInfo[to]).toFixed(2));
  }, [amount, from, to, currencyInfo]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertAmount);
    setConvertAmount(amount);
  };

  return (
    <div className="main bg-gradient-to-l to-purple-700 from-black w-screen h-screen">
      <div className="container w-[90%] sm:w-[80%] mx-auto h-full overflow-hidden">
        <div className="child flex items-center justify-between h-full flex-wrap-reverse md:flex-nowrap overflow-hidden">
          <div className="text w-full lg:w-[48%] mb-8 lg:mb-0 text-center md:text-left">
            <h1 className='text-5xl text-white mb-2 font-bold'>CURRENCY CONVERTER</h1>
            <p className='font-bold text-purple-300'>Convert Any Currency Into Other With Live Market Rate</p>
            <div className="profile mt-10">
              <p className='text-white mb-5'>This is my 4th project in my React Learning Series</p>
              <a href="https://github.com/khuzaima324" target='_blank' className='inline-flex items-center gap-x-2 text-xs text-purple-300 hover:text-purple-400'>
                <GitHub /> Follow Me On GitHub
              </a>
              <br />
              <a href="https://www.linkedin.com/in/khuzaima-iqbal" target='_blank' className='inline-flex items-center gap-x-2 text-xs text-purple-300 hover:text-purple-400'>
                <Linkedin /> Follow Me On LinkedIn
              </a>
            </div>
          </div>

          <div className="app w-full md:w-[50%] mt-10 md:mt-0">
            <div className="main-box px-2 py-3 sm:p-5 rounded-xl border-white shadow-purple-800 shadow-2xl border-2 flex flex-wrap gap-7 relative bg-white/10 backdrop-blur">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
              < InputBox
                label="To"
                amount={convertAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
              <button
                onClick={swap}
                className='font-bold text-purple-700 shadow-purple-500 shadow-md bg-white border-2 border-black py-1.5 px-4 rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              >
                Swap
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
