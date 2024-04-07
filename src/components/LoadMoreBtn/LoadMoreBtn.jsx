import s from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ handleLoadMore }) {
  return (
    <div>
      <button onClick={handleLoadMore} className={s.btn}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
