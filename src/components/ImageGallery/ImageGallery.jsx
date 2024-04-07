import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

function ImageGallery({ responseList, onImageClick }) {
  return (
    <ul className={s.list}>
      {responseList.map((item) => {
        return (
          <li key={item.id}>
            <ImageCard item={item} onImageClick={onImageClick} />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;
