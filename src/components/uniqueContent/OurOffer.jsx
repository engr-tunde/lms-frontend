const OurOffers = ({ image, title, details }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="rounded-md flex items-center p-3 bg-white">
        <img src={`${image}`} alt="" />
      </div>
      <div>
        <h3 className="text-[22px] font-medium text-custom-title ">{title}</h3>
        <p className="text-[18px] font-thin w-[80%] text-custom-text">
          {details}
        </p>
      </div>
    </div>
  );
};
export default OurOffers;
