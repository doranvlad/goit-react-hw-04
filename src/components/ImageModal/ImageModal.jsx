import s from "./ImageModal.module.css";

const ImageModal = ({ imageUrl }) => {
  return (
    <div className={s.content}>
      <img src={imageUrl.urls.regular} alt={imageUrl.alt_description} />
    </div>
  );
};

export default ImageModal;
