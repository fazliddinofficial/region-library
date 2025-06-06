import { Box, Button, debounce, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { notifyError } from "../../helper/toast";
import axiosInstance from "../../services/axios";
import { BookCard } from "../BookCard/Book";

export type BookType = {
  _id: string;
  name?: string;
  bookNumber?: number;
  bookType?: string;
  author?: string;
  languageType?: string;
  createdYear?: number;
  madeBy?: string;
  isbn?: string;
  bookPage?: number;
  digitizationDate?: string;
  digitizationBy?: string;
};
export function Search() {
  const [value, setValue] = useState<string>("");
  const [books, setBooks] = useState<BookType[]>([]);

  const handleSearch = async (searchTerm: string) => {
    try {
      if (searchTerm === "") {
        const res = await axiosInstance.get("/book");
        const validBooks = res.data.filter(
          (book: BookType | null) => book !== null
        );
        setBooks(validBooks);
        return;
      }

      const res = await axiosInstance.get("/book/search", {
        params: { q: searchTerm },
      });

      const validBooks = res.data.filter(
        (book: BookType | null) => book !== null
      );
      setBooks(validBooks);
    } catch (error: any) {
      notifyError(error.message);
    }
  };

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((query) => handleSearch(query), 300),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedSearch(newValue);
  };

  return (
    <Box paddingTop={3}>
      <div style={{ width: "100%", textAlign: "center" }}>
        <TextField
          sx={{ width: "50%" }}
          label="Name"
          variant="outlined"
          value={value}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSearch(value)}
          style={{ padding: "14px", margin: "0 20px" }}>
          Search
        </Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard
              key={book._id}
              book={book}
              refetch={() => handleSearch(value)}
            />
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>No books found</p>
        )}
      </div>
    </Box>
  );
}
