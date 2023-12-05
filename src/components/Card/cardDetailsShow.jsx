import Swal from 'sweetalert2';

const CardDetailsShow = (props) => {
  const { donation } = props;
  const { id, category, image, description, amount, fontColor } = donation;

  const buttonBgColor = {
    backgroundColor: fontColor,
  };

  const handleButton = () => {
    const donationArray = [];
    const donationItem = JSON.parse(localStorage.getItem('donation'));

    if (!donationItem) {
      donationArray.push(donation);
      localStorage.setItem('donation', JSON.stringify(donationArray));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Card donated',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const isExit = donationItem.find((item) => item.id == id);

      if (!isExit) {
        donationArray.push(...donationItem, donation);
        localStorage.setItem('donation', JSON.stringify(donationArray));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Card donated',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: 'Already donated this card',
        });
      }
    }
  };

  return (
    <div className="max-w-[1640px] mx-auto h-[70vh]">
      <div className="m-auto text-center w-11/12 relative mt-4">
        <div className="min-w-full">
          <img
            src={image}
            alt=""
            className="w-full h-[60vh] object-cover rounded-lg m-auto text-center"
          />
        </div>
        <div className="bg-[#0b0b0b80] absolute min-w-full h-[100px] bottom-0 rounded-b-lg z-0"></div>
        <button
          onClick={handleButton}
          style={buttonBgColor}
          className="px-6 py-2 rounded-lg absolute bottom-6 left-10 z-10 text-white"
        >
          Donate ${amount}
        </button>
      </div>

      {/*  */}

      <h1 className="text-[40px] font-bold text-[#0B0B0B] capitalize my-8 px-8">
        {category}
      </h1>
      <p className="text-[16px] font-normal leading-[30px] text-[#0b0b0bb3] px-8">
        {description}
      </p>
    </div>
  );
};

export default CardDetailsShow;
