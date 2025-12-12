import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';

import Dropdown from '../components/Dropdown';
import ArtCard from '../components/Card';
import ArtSearch from '../components/ArtSearch';

import { removeArt, editArt } from '../store/slices/artSlice';

const GalleryPage = () => {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState(null);

  const searchTerm = useSelector((state) => state.art.searchTerm);
  const artData = useSelector((state) => state.art.data);

  // DELETE ARTWORK 
  const handleDeleteArt = async (id) => {
    await axios.delete(`http://localhost:3001/artData/${id}`);
    dispatch(removeArt(id));
  };

  // EDIT ARTWORK 
  const handleEditArt = async (id, updates) => {
    const response = await axios.put(
      `http://localhost:3001/artData/${id}`,
      updates
    );

    dispatch(
      editArt({
        id,
        updates: response.data,
      })
    );
  };

  const SORT_OPTIONS = [
    { label: 'Name', value: 'name' },
    { label: 'Price', value: 'price' },
  ];

  // filter by category
  const filteredArtworks = artData.filter((item) =>
    (item.category || "").toLowerCase().includes(searchTerm || "")
  );

  // sort AFTER filtering
  const sortedArtworks = [...filteredArtworks].sort((a, b) => {
    if (sortBy?.value === 'name') return a.title.localeCompare(b.title);
    if (sortBy?.value === 'price') return a.price - b.price;
    return 0;
  });

  return (
    <div className="p-6 text-gray-800 relative">
      <div className="flex justify-between items-center mb-6 relative">
        <h1 className="text-2xl font-bold">Explore Our Collection</h1>

        <div className="flex items-center space-x-6">
          {/* SEARCH BAR */}
          <ArtSearch />

          {/* SORT DROPDOWN */}
          <div className="flex items-center space-x-2">
            <span className="font-medium">Sort by:</span>
            <Dropdown
              options={SORT_OPTIONS}
              value={sortBy}
              onChange={setSortBy}
            />
          </div>
        </div>
      </div>

      <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-4">
        {sortedArtworks.map((piece) => (
          <div key={piece.id} className="flex-shrink-0">
            <ArtCard
              art={piece}
              onDelete={handleDeleteArt}
              onEdit={handleEditArt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;