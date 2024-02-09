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
                <input 
                    type="text"    
                    placeholder='Search for a city'
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Search;
