import { TextField } from "@mui/material";
import { useState } from "react";
import { notifyError } from "../../helper/toast";
import axiosInstance from "../../services/axios";

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
  const [value, setValue] = useState("");
  const [books, setBook] = useState<BookType[]>([]);

  const handleChange = (e: any) => {
    setValue(e.target.value);
    handleSearch();
  };

  const handleSearch = async () => {
    try {
      const res = await axiosInstance.get("/book/search", {
        params: { q: value },
      });
      res.data.forEach((v: any) => {
        if (v !== null) {
          setBook(books);
        }
      });
    } catch (error: any) {
      notifyError(error.message);
    }
  };

  console.log(books)
  return (
    <div style={{ width: "100%", textAlign: "center", padding: "20px 0" }}>
      <TextField
        sx={{
          width: "50%",
        }}
        label="Name"
        variant="outlined"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
