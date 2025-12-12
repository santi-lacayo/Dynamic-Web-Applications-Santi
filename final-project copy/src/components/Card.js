import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeArt } from '../store';
import Modal from '../components/Modal';

const ArtCard = ({ art }) => {
  // Modal visibility states
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  // Redux dispatch for deleting art
  const dispatch = useDispatch();

  // Removes this artwork from Redux store
  const handleDelete = () => {
    dispatch(removeArt(art.id));
  };

  // Opens the “Buy Now” modal
  const handleBuyClick = () => setShowBuyModal(true);
  // Closes the “Buy Now” modal
  const handleCloseBuy = () => setShowBuyModal(false);

  // Opens the full-image modal when user clicks the artwork image
  const handleImageClick = () => setShowImageModal(true);
  // Closes the full-image modal 
  const handleCloseImage = () => setShowImageModal(false);

  // Button displayed at the bottom of the Buy modal
  const actionBar = (
    <button
      onClick={handleCloseBuy}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      Close
    </button>
  );

  return (
    <>
      <div
        className="relative w-[300px] h-[400px] text-center rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-blue-800 text-white"
      >
        {/* DELETE BUTTON */}
        <button
          onClick={handleDelete}
          className="absolute top-1 right-4 text-white/80 hover:text-red-400 text-2xl font-bold z-50"
        >
          ×
        </button>

        <img
          src={art.image}
          alt={art.title}
          className="w-full h-56 object-cover rounded-t-lg"
          onClick={handleImageClick}
        />

        <div className="p-4">
          <h3 className="font-sans text-lg font-semibold mb-1">{art.title}</h3>
          <p className="opacity-90 mb-2">by {art.artist}</p>
          <p className="opacity-90 font-medium mb-3">${art.price}</p>

          <button
            onClick={handleBuyClick}
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Buy Modal */}
      {showBuyModal && (
        <Modal title={`Purchase ${art.title}`} onClose={handleCloseBuy} actionBar={actionBar}>
          <p className="text-lg text-gray-700">
            Are you sure you want to buy <strong>{art.title}</strong> by {art.artist} for ${art.price}?
          </p>
        </Modal>
      )}

      {/* Image Modal */}
      {showImageModal && (
        <Modal onClose={handleCloseImage} transparent>
          <div className="flex flex-col items-center justify-center">
            <img
              src={art.image}
              alt={art.title}
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
            />
            <p className="mt-3 text-center text-gray-700">
              {art.title} by {art.artist}
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ArtCard;
