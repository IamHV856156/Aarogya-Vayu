import React,{useState} from 'react';

const SearchBar =({onSearch})=>{
    const [location, setlocation] = useState('');
    const  handleSubmit =(e)=>{
        e.preventDefault();
        if(location.trim()){
            onSearch(location.trim());
            setlocation('');
        }
    };
    return(
        <div className='p-4 bg-white shadow-md rounded-lg mt-4 max-w-xl mx-auto font-inter dark:bg-gray-800 transition-colors duration-300'>
            <form onSubmit={handleSubmit} className="flex space-x-2">
                <input type="text" placeholder="Enter city or area in india(e.g., Delhi,Mumbai)" value={location} onChange={(e)=>setlocation(e.target.value)} className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-inter dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:palceholder-gray-400 transition-colors duration-300"/>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-inter transition-colors duration-200 dark:bg-bule-700 dark:hover:bg-blue-800 dark:text-gray-100">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;