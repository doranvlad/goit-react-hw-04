import s from "./ImageCard.module.css";

function ImageCard({ item, onImageClick }) {
  return (
    <div
      className={s.imgWrap}
      onClick={() => {
        // onImageClick(item.urls.regular);
        onImageClick(item);
      }}
    >
      <img src={item.urls.regular} alt={item.alt_description} />
    </div>
  );
}

export default ImageCard;
