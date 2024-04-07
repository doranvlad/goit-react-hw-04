import s from "./ImageModal.module.css";

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className={s.content}>
      <img src={imageUrl} alt="Large" />
    </div>
  );
};

export default ImageModal;
