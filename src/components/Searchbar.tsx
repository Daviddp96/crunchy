import { useState, useEffect } from "react";

interface SearchbarProps {
    onSearch: (e: string) => void,
}

const SearchBar: React.FC<SearchbarProps> = ({onSearch}) => {
    const [inputValue, setInputValue] = useState<string>('');

    function handleInputValue(value : string) {
        setInputValue(value);
        onSearch(value);
    }

    const classes = "outline-none bg-transparent text-3xl tracking-wide p-4 border-b-4 rounded-sm border-slate-500 w-full";

    useEffect(() => {

    }, [inputValue]);

    return (
        <input className={classes} type="text" placeholder="Search..." value={inputValue} onChange={(e) => handleInputValue(e.target.value)}/>
    );
};

export default SearchBar;