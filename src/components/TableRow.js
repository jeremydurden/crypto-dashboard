const TableRow = ({
  currencies,
  text,
  value,
  handleChangeCurrency,
  handleChangeAmout,
  name,
  amount,
  disabled,
}) => {
  return (
    <tr>
      <td>{text} Currency:</td>
      <td>
        <input
          disabled={disabled}
          type="number"
          name="currency-amount-2"
          value={amount}
          onChange={handleChangeAmout}
        />
      </td>
      <td>
        <select
          onChange={handleChangeCurrency}
          value={value}
          name={name}
          className="currency-options"
        >
          {currencies.map((currency, _id) => (
            <option key={_id}>{currency}</option>
          ))}
        </select>
      </td>
    </tr>
  );
};
export default TableRow;
