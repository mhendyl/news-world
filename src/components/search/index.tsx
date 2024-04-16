type SearchProps = {
  onChange: (value: string) => void;
  className?: string;
}

const Search = ({
  onChange,
  className
} : SearchProps) => {
  return (
    <input className={`border border-black rounded-md p-3 ${className}`} placeholder="What you looking for?" onChange={(e) => {onChange(e.target.value)}} />
  )
}

export default Search;