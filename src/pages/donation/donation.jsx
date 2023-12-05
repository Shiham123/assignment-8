import { useEffect, useState } from 'react';
import ShowDonation from './showDonation';
import Swal from 'sweetalert2';

const Donation = () => {
  const [localData, setLocalData] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const donationItem = JSON.parse(localStorage.getItem('donation'));

    if (donationItem) {
      setLocalData(donationItem);
    } else {
      Swal.fire({ icon: 'error', title: 'No item donated' }).then(() => {
        window.location.href = '/';
      });
    }
  }, []);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div>
      <div className="max-w-[1640px] mx-auto my-8 flex flex-col lg:grid lg:grid-cols-2">
        {localData
          .slice(0, showMore ? localData.length : 4)
          .map((item, index) => (
            <ShowDonation key={index} donation={item} />
          ))}
      </div>
      {/* button */}
      {!showMore && localData.length > 4 && (
        <div className="m-auto text-center">
          <button
            onClick={handleShowMore}
            className="bg-[#009444] text-[16px] font-semibold text-white py-3 px-4 rounded-lg"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
};

export default Donation;
