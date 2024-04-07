import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchList } from "../src/articles-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { Oval } from "react-loader-spinner";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";
import "./App.css";

Modal.setAppElement("#root");

function App() {
  const [search, setSearch] = useState("");
  const [responseList, setResponseList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const onSubmit = (value) => {
    setResponseList([]);
    setPage(1);
    setSearch(value);
  };

  useEffect(() => {
    setLoadMore(false);
    if (search === "") {
      return;
    }
    async function fetchData() {
      try {
        setLoading(true);
        const data = await fetchList(search, page);
        setResponseList((prev) => {
          return [...prev, ...data.data.results];
        });
        setTotalPage(data.data.total_pages);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [search, page]);

  useEffect(() => {
    if (page > 0 && page < totalPage) {
      return setLoadMore(true);
    } else {
      setLoadMore(false);
    }
  }, [page, totalPage, search]);

  const handleLoadMore = () => {
    if (page < totalPage) {
      setPage((prev) => prev + 1);
    }
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error ? (
        <ErrorMessage />
      ) : (
        responseList.length > 0 && (
          <ImageGallery responseList={responseList} onImageClick={openModal} />
        )
      )}
      {loading && <Oval wrapperClass="loader" color="#4e75ff" />}
      {loadMore && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      <Modal
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(27, 27, 27, 0.75)",
          },
          content: {
            position: "absolute",
            top: "70px",
            left: "100px",
            right: "100px",
            bottom: "70px",
            border: "none",
            background: "#fff",
            overflow: "hidden",
            borderRadius: "4px",
            outline: "none",
            padding: "0px",
          },
        }}
      >
        {selectedImage && <ImageModal imageUrl={selectedImage} />}
      </Modal>
    </>
  );
}

export default App;
