import s from "./ImageCard.module.css";

function ImageCard({ item }) {
  return (
    <div className={s.imgWrap}>
      <img src={item.urls.regular} alt={item.alt_description} />
    </div>
  );
}

export default ImageCard;
