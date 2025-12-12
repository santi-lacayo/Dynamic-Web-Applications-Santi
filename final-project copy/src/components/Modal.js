import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';

const Modal = (props) => {
  const { title, children, onClose, actionBar, crazy, transparent } = props;

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  // FULLSCREEN, HIGH-ZINDEX OVERLAY
  const overlayClass = transparent
    ? 'fixed inset-0 bg-black bg-opacity-80 z-[9999]'
    : 'fixed inset-0 bg-gray-300 bg-opacity-50 z-[9999]';

  // MODAL CONTENT ABOVE OVERLAY
  const windowClass = cx(
    'fixed inset-0 flex items-center justify-center z-[10000]',
    {
      'inset-40 p-10 bg-white rounded-lg': !transparent,
      'p-0 bg-transparent': transparent,
      'rounded-lg': crazy,
    }
  );

  return ReactDOM.createPortal(
    <>
      {/* overlay — click closes modal */}
      <div onClick={onClose} className={overlayClass}></div>

      {/* modal content */}
      <div className={windowClass}>
        <div className="relative flex flex-col justify-center items-center h-full text-center pointer-events-auto">
          {!transparent && title && <h2 className="text-2xl mb-4">{title}</h2>}

          {children}

          {!transparent && (
            <div className="flex justify-end mt-6">{actionBar}</div>
          )}
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;