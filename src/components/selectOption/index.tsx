type SelectOptionType = {
  label: string;
  option: any[] | any;
  type?: 'newsAPIAuthor' | 'Guardian' | 'NewYork';
  onSelect: (value: any) => void;
  className?: string;
  selected?: string;
}

const SelectOption = ({
  label,
  option,
  type,
  onSelect,
  className,
  selected
}: SelectOptionType) => {
  const renderOption = () => {
    switch (type) {
      case 'newsAPIAuthor':
        return option.map((value: any, index: number) => value.author && (<option className="max-w-xs text-ellipsis" key={index} value={value?.author}>{value?.author}</option>))
      default:
        return option.map((value: any, index: number) => <option className="max-w-xs text-ellipsis" key={index} value={value?.value}>{value?.value}</option>)
    }
  }
  return (
    <div className={className}>
      <p>{label}</p>
      <select value={selected} className="border border-black px-2 rounded-sm max-w-xs w-full" onChange={(e) => { onSelect(e.target.value) }}>
        {option && (renderOption())}
      </select>
    </div>
  )
}

export default SelectOption;