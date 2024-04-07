import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

function ImageGallery({ responseList }) {
  return (
    <ul className={s.list}>
      {responseList.map((item) => {
        return (
          <li key={item.id}>
            <ImageCard item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;
