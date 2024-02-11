import React, {useState} from 'react';
import './styles/Search.css';

interface IProps{
    onSubmit: (arg: string) => void;
}

function Search(props: IProps) {

    const {onSubmit} = props;
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(searchTerm);
    }

    return (
        <div className='Search'>
            <form onSubmit={handleSubmit}>
                <div className='SearchBar'>
                    <input 
                        type="search"    
                        placeholder='Search for a city'
                        className='Input'
                        onChange={(e) => setSearchTerm(e.target.value)} />
                    <input type="submit" className='Submit' value='Search'/>
                </div>

            </form>
        </div>
    )
}

export default Search;
