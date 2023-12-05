import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardDetailsShow from './cardDetailsShow';

const CardDetails = () => {
  const [donation, setDonation] = useState({});
  const { id } = useParams();
  const donationData = useLoaderData();

  useEffect(() => {
    const findData = donationData.find((item) => item.id == id);
    setDonation(findData);
  }, [id, donationData]);

  return (
    <div>
      <CardDetailsShow donation={donation} />
    </div>
  );
};

export default CardDetails;
