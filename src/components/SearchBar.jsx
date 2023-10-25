import react from 'react'

const SearchBar = () => {
    return (
        <div>
        <label> HELLO
            <Input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            /></label>
            
        </div>
    )
}

export default SearchBar;