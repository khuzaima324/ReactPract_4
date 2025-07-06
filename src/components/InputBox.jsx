import { Flag } from "lucide-react";
import React, { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = 'usd',
    className = "",
    currencyDisable = false,
    amountDisable = false
}) {
    const amountInputId = useId()
    return (
        <div className="from flex justify-between border-1 border-black px-4 py-3 rounded-l bg-purple-800 text-white w-full overflow-hidden">
            <div className="fromInput sm:w-auto w-[69%]">
                <label htmlFor={amountInputId} className='block text-xs'>{label}</label>
                <input type="number" id={amountInputId} disabled={amountDisable} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} placeholder='Enter Your Amount' className='outline-0 min-w-5 w-full' />
            </div>
            <select
                id="option"
                name="option"
                className="block rounded-md shadow-sm text-sm outline-0"
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
            >
                {currencyOption.map((currency) => (
                    <option key={currency} value={currency} className="bg-black">
                        {currency}
                    </option>
                ))}
            </select>

        </div>
    )
}

export default InputBox