import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchList } from "../src/articles-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { Oval } from "react-loader-spinner";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [responseList, setResponseList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);

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
    async function fetch() {
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

    fetch();
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

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error ? (
        <ErrorMessage />
      ) : (
        responseList.length > 0 && <ImageGallery responseList={responseList} />
      )}
      {loading && <Oval wrapperClass="loader" color="#4e75ff" />}
      {loadMore && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
    </>
  );
}

export default App;
