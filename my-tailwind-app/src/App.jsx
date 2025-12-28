import { useState } from "react";
import usecurrencyinfo from "./hooks/usecurrencyinfo";
import { InputBox } from "./components";

function App() {
  const [amount, setamount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedamount, setconvertedamount] = useState(0);

 const { data: currencyinfo, loading } = usecurrencyinfo(from);
const options = Object.keys(currencyinfo);

  const swap = () => {
    setFrom(to);
    setto(from);
    setconvertedamount(amount);
    setamount(convertedamount);
  };

  const convert = () => {
  if (!currencyinfo[to]) return;
  const result = amount * currencyinfo[to];
  setconvertedamount(Number(result.toFixed(2))); 
};


  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg)",
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                currencyoptions={options}
                oncurrencychange={(currency) => setFrom(currency)}
                onamountchange={(amount) => setamount(amount)}
                selectedcurrency={from}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            <div className="w-full mb-1">
              <InputBox
                label="to"
                currencyoptions={options}
                amount={convertedamount}
                oncurrencychange={(currency) => setto(currency)}
                selectedcurrency={to}
                amountdisabled
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
