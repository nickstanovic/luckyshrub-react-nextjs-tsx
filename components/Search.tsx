'use client'

import {ChangeEvent, FC, useState} from 'react'

interface SearchProps {
    onSearch?: (searchText: string) => void;
}

const Search: FC<SearchProps> = ({onSearch}) => {
    const [searchText, setSearchText] = useState('')

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
        if (onSearch) {
            onSearch(event.target.value)
        }
    }

    return (
        <input
            type="text"
            placeholder="Search for products"
            value={searchText}
            onChange={handleSearch}
        />
    )
}

export default Search

