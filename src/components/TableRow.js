const TableRow = ({ currencies, text }) => {
  return (
    <tr>
      <td>{text} Currency:</td>
      <td>
        <input type="number" name="currency-amount-2" value={""} />
      </td>
      <td>
        <select
          value={""}
          name="currency-option-2"
          className="currency-options"
        >
          {currencies.map((currency) => (
            <option>{currency}</option>
          ))}
        </select>
      </td>
    </tr>
  );
};
export default TableRow;
