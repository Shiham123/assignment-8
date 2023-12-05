import { useEffect, useState } from 'react';
import './banner.scss';
import Search from './search';
import CardComponent from '../Card/cards';
import { useLoaderData } from 'react-router-dom';

const Banner = () => {
  const loadData = useLoaderData();

  const [allData, setAllData] = useState(loadData);
  const [filteredData, setFilteredData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSearch = (inputValue) => {
    setInputValue(inputValue);

    if (inputValue) {
      const value = inputValue.toLowerCase();
      const categoryData = allData.filter((item) =>
        item.category.toLowerCase().includes(value)
      );
      setFilteredData(categoryData);
    } else {
      setFilteredData([]);
    }
  };

  useEffect(() => {
    fetch('/donation.json')
      .then((response) => response.json())
      .then((data) => {
        setAllData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="max-w-[1640px] mx-auto h-[70vh] banner rounded-lg">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] text-center pt-[18rem]">
        I Grow By Helping People In Need
      </h1>
      <Search
        searchCategory={(value) => {
          handleSearch(value);
        }}
      />
      {inputValue ? (
        <CardComponent filteredData={filteredData} />
      ) : (
        <CardComponent filteredData={allData} />
      )}
    </div>
  );
};

export default Banner;
