import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store';

const ArtSearch = () => {
// Gives access to Redux dispatch
  const dispatch = useDispatch();

  // Pull the current search term value from the Redux store
  const searchTerm = useSelector((state) => state.art.searchTerm);

  // Runs every time the user types in the search input
  const handleSearchChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="flex items-center space-x-3">
      <span className="font-medium">Search by Category:</span>
      {/* Controlled input tied to Redux state */}
      <input
        type="text"
        placeholder="e.g. Impressionism, Acrylic"
        className="border border-gray-400 rounded-lg px-3 py-2 bg-blue-800"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default ArtSearch;