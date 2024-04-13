type SelectOptionType = {
  label: string;
  option: any[];
  onSelect: (value: any) => void;
}

const SelectOption = ({
  label,
  option,
  onSelect
}: SelectOptionType) => {

  return (
    <div>
      <p>{label}</p>
      <select className="border border-black px-2 rounded-sm" onChange={(e) => {onSelect(e.target.value)}}>
        {option.map((option, index) => <option key={index} value={option?.value}>{option?.value}</option>)}
      </select>
    </div>
  )
}

export default SelectOption;