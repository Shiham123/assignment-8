import PerCard from './card';

const CardComponent = (props) => {
  const { filteredData } = props;

  return (
    <div className="max-w-[1640px] mx-auto mt-[25rem] flex flex-col justify-center items-center ml-12 md:grid md:grid-cols-2 md:ml-12 lg:grid lg:grid-cols-4 gap-4">
      {filteredData && Array.isArray(filteredData)
        ? filteredData.map((item, index) => {
            return <PerCard key={index} donation={item} />;
          })
        : ''}
    </div>
  );
};

export default CardComponent;
