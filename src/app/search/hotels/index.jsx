import HotelCard from './components/hotel-card';
import HotelCardSkeleton from './components/hotel-card-skeleton';
import PropTypes from 'prop-types';

const Hotels = ({ isLoading, data, error }) => {
  if (isLoading)
    return (
      <div className="space-y-4">
        <HotelCardSkeleton />
        <HotelCardSkeleton />
      </div>
    );

  return (
    <div className="space-y-4">
      <HotelCardSkeleton />
      {data.map((hotel) => (
        <HotelCard key={hotel.id} {...hotel} error={error} />
      ))}
    </div>
  );
};
Hotels.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
  error: PropTypes.any, // Add validation for the error prop
};

export default Hotels;
