import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const { inputSearch } = form.elements;
    if (inputSearch.value === "") {
      toast.error("Please enter the text for image search.");
      return;
    }
    onSubmit(inputSearch.value);
    form.reset();
  };
  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.search}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="inputSearch"
        />
        <button type="submit" className={s.btn}>
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
}

export default SearchBar;
