//this.GUI/src/stories/Molecules/AvatarWithName/AvatarWithName.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AvatarWithName.css';

const defaultAvatar = (
  <svg
    className="avatar__default-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M14.5 9a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
    <path d="M12 14c-3.03 0-5.47 1.21-6 3h12c-.53-1.79-2.97-3-6-3z"></path>
  </svg>
);

export const AvatarWithName = ({ imageSrc, name, namePosition, size, onClick }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div
        className={`avatar-with-name avatar-with-name--${namePosition} avatar-with-name--${size}`}
        onClick={handleModalToggle}
      >
        <div className="avatar-with-name__avatar">
          {imageSrc ? (
            <img src={imageSrc} alt={name} />
          ) : (
            defaultAvatar /* Display the default avatar if no imageSrc is provided */
          )}
        </div>
        <div className="avatar-with-name__name">{name}</div>
      </div>

      {showModal && (
        <div className="avatar-modal" onClick={handleModalToggle}>
          <div className="avatar-modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="avatar-modal__close" onClick={handleModalToggle}>
              &times;
            </button>
            <div className="avatar-modal__avatar-container">
              <div className="avatar-modal__avatar">
                {imageSrc ? (
                  <img src={imageSrc} alt={name} />
                ) : (
                  defaultAvatar /* Use the default avatar in the modal if no imageSrc is provided */
                )}
              </div>
            </div>
            <div className="avatar-modal__name">{name}</div>
          </div>
        </div>
      )}
    </>
  );
};

AvatarWithName.propTypes = {
  imageSrc: PropTypes.string, // Image URL for the avatar
  name: PropTypes.string.isRequired, // The name to display
  namePosition: PropTypes.oneOf(['below', 'side']), // Position of the name relative to the avatar
  size: PropTypes.oneOf(['small', 'medium', 'large']), // Size of the avatar
  onClick: PropTypes.func, // Function to execute on click
};

AvatarWithName.defaultProps = {
  namePosition: 'below',
  size: 'medium',
};