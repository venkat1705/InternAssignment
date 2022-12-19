import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import data from "./data";
import CurrencyInput from "react-currency-input-field";

function App() {
  const [rows, setRows] = useState(3);
  const [selected, setSelected] = useState(0);
  const [debit, setDebit] = useState(0);
  const [credit, setCredit] = useState(0);

  let rupee = Intl.NumberFormat("en-IN");
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <div className="bg-white-300 mx-4 space-y-2 text-center mt-[30px]">
            <table className="table-auto border-separate ">
              <thead className="bg-gray-200 rounded-md">
                <tr>
                  <th className="font-epilouge font-semibold  w-[800px] rounded-md ">
                    Accounts
                  </th>
                  <th className="font-epilouge font-semibold  w-[800px] h-14 rounded-md">
                    Debit Amount
                  </th>
                  <th className="font-epilouge font-semibold  w-[800px] h-14 rounded-md">
                    Credit Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(rows)].map((_, i) => (
                  <tr key={i}>
                    <td className="border-2 border-gray-300 rounded-md h-12 ">
                      <select
                        className="w-full text-gray-400 border-none outline-none font-epilogue font-semibold h-full"
                        onClick={(e) => setSelected(e.target.value)}
                      >
                        <option
                          value="1"
                          className="text-black font-epilogue font-semibold"
                        >
                          Select Account
                        </option>
                        <option
                          value={item.Acc1.AccNo}
                          className="text-black font-epilogue font-semibold"
                        >
                          {item.Acc1.AccNo}
                        </option>
                        <option
                          value={item.Acc2.AccNo}
                          className="text-black font-epilogue font-semibold"
                        >
                          {item.Acc2.AccNo}
                        </option>
                      </select>
                    </td>
                    <td className="border-2 border-gray-300 rounded-md h-12 ">
                      <CurrencyInput
                        intlConfig={{ locale: "en-IN", currency: "INR" }}
                        className="w-full border-none outline-none indent-[20px] h-full"
                        onValueChange={(value) => setDebit(value)}
                      />
                    </td>
                    <td className="border-2 border-gray-300 rounded-md h-12 ">
                      <CurrencyInput
                        intlConfig={{ locale: "en-IN", currency: "INR" }}
                        className="w-full border-none outline-none indent-[20px] h-full"
                        onValueChange={(value) => setCredit(value)}
                      />
                    </td>
                    <td>
                      <button onClick={() => setRows(rows - 1)}>
                        <RiDeleteBin5Line size={25} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center space-x-2 mt-4 mx-4 justify-between -ml-[90px] mr-[140px] sm:mr-[90px]">
            <Link
              onClick={() => setRows(rows + 1)}
              className="text-blue-700 font-epilogue font-semibold flex items-center space-x-2 ml-[100px]"
            >
              <AiOutlinePlus size={25} />
              Add Row
            </Link>
            <p className="font-epilogue font-semibold">
              Total:
              {item.Acc1.AccNo === selected
                ? rupee.format(item.Acc1.balance)
                : item.Acc2.AccNo === selected &&
                  rupee.format(item.Acc2.balance)}
            </p>
            <p className="font-epilogue font-semibold">
              debit:
              {item.Acc1.AccNo === selected
                ? rupee.format(debit)
                : item.Acc2.AccNo === selected && rupee.format(debit)}
            </p>
            <p className="font-epilogue font-semibold ">
              credit:
              {item.Acc1.AccNo === selected
                ? rupee.format(credit)
                : item.Acc2.AccNo === selected && rupee.format(credit)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
