type SearchProps = {
  onChange: (value: string) => void
}

const Search = ({
  onChange
} : SearchProps) => {
  return (
    <input className="border border-b rounded-md p-3" placeholder="Search" onChange={(e) => {onChange(e.target.value)}} />
  )
}

export default Search;