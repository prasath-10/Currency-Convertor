import { useId } from "react";

function InputBox({
  label,
  amount,
  onamountchange,
  oncurrencychange,
  currencyoptions = [],
  selectedcurrency = "usd",
  amountdisabled = false,
  currencydisabled = false,
  className = "",
}) {
  const id = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex gap-2 ${className}`}>
      {/* Amount input */}
      <div className="w-1/2">
        <label htmlFor={id} className="text-black/50 mb-2 inline-block">
          {label}
        </label>

        <input
          id={id}
          type="number"
          className="outline-none w-full bg-transparent py-1.5 border-b border-gray-300"
          placeholder="Amount"
          disabled={amountdisabled}
          value={amount}
          onChange={(e) =>
            onamountchange && onamountchange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency select */}
      <div className="w-1/2 flex flex-col items-end">
        <label className="text-black/50 mb-2">Currency</label>

        <select
          className="w-full rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedcurrency}
          onChange={(e) =>
            oncurrencychange && oncurrencychange(e.target.value)
          }
          disabled={currencydisabled}
        >
          {currencyoptions.length === 0 ? (
            <option>Loading...</option>
          ) : (
            currencyoptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))
          )}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
