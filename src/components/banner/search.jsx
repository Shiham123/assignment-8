import { useState } from 'react';

const Search = (props) => {
  const [searchText, setSearchText] = useState('');
  const { searchCategory } = props;

  const handleSearchValue = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchButtonClick = () => {
    searchCategory(searchText);
  };

  return (
    <div className="flex justify-center my-8">
      <input
        type="text"
        placeholder="Type category..."
        className="py-2 px-6 w-1/3 border-[2px] border-[#FF444A] focus:outline-none text-xl md:text-2xl lg:text-3xl font-normal text-[#0b0b0b66] rounded-lg"
        value={searchText}
        onChange={handleSearchValue}
      />
      <button
        className="py-2 px-6 bg-[#FF444A] text-white -ml-4 rounded-r-lg"
        onClick={handleSearchButtonClick}
      >
        Search Category
      </button>
    </div>
  );
};

export default Search;
