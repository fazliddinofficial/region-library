import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/axios";
import { notifyError, notifySuccess } from "../../helper/toast";

export const Dashboard = () => {
  const navigate = useNavigate();

  const goSomewhere = () => {
    navigate("/dashboard");
  };

  const [bookData, setBookData] = useState({
    name: "",
    bookNumber: "",
    bookType: "",
    languageType: "",
    createdYear: "",
    madeBy: "",
    isbn: "",
    bookPage: "",
    digitizationDate: "",
    digitizationBy: "",
  });

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/book", bookData);
      notifySuccess(res.data.message);
      if (res.status === 200 || res.status === 201) {
      } else if (res.status >= 400) {
        notifyError(res.data.message);
      }
    } catch (error: any) {
      notifyError(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        minHeight: "100vh",
        minWidth: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" margin={2}>
        Creating book form
      </Typography>
      <TextField
        label="Name"
        name="name"
        type="text"
        value={bookData.name}
        variant="outlined"
        onChange={(e) => setBookData({ ...bookData, name: e.target.value })}
        sx={{ width: 400, margin: 1 }}
      />

      <TextField
        label="Book number"
        name="bookName"
        type="number"
        value={bookData.bookNumber}
        variant="outlined"
        onChange={(e) =>
          setBookData({ ...bookData, bookNumber: e.target.value })
        }
        sx={{ width: 400, margin: 1 }}
      />

      <TextField
        label="Book type"
        name="bookType"
        type="text"
        value={bookData.bookType}
        variant="outlined"
        onChange={(e) => setBookData({ ...bookData, bookType: e.target.value })}
        sx={{ width: 400, margin: 1 }}
      />

      <TextField
        label="Language type"
        name="lanType"
        type="text"
        value={bookData.languageType}
        variant="outlined"
        onChange={(e) =>
          setBookData({ ...bookData, languageType: e.target.value })
        }
        sx={{ width: 400, margin: 1 }}
      />

      <TextField
        label="Created year"
        name="createdYear"
        type="number"
        value={bookData.createdYear}
        variant="outlined"
        onChange={(e) =>
          setBookData({ ...bookData, createdYear: e.target.value })
        }
        sx={{ width: 400, margin: 1 }}
      />

      <TextField
        label="Made by"
        name="madeBy"
        type="text"
        value={bookData.madeBy}
        variant="outlined"
        onChange={(e) => setBookData({ ...bookData, madeBy: e.target.value })}
        sx={{ width: 400, margin: 1 }}
      />

      <TextField
        label="ISBN"
        name="isbn"
        type="text"
        value={bookData.isbn}
        variant="outlined"
        onChange={(e) => setBookData({ ...bookData, isbn: e.target.value })}
        sx={{ width: 400, margin: 1 }}
      />

      <TextField
        label="Book page"
        name="bookPage"
        type="number"
        value={bookData.bookPage}
        variant="outlined"
        onChange={(e) => setBookData({ ...bookData, bookPage: e.target.value })}
        sx={{ width: 400, margin: 1 }}
      />

      <TextField
        label="Digitization date"
        name="digitizationDate"
        type="date"
        value={bookData.digitizationDate}
        variant="outlined"
        onChange={(e) =>
          setBookData({ ...bookData, digitizationDate: e.target.value })
        }
        sx={{ width: 400, margin: 1 }}
      />

      <TextField
        label="Digitization by"
        name="digitizationBy"
        type="text"
        value={bookData.digitizationBy}
        variant="outlined"
        onChange={(e) =>
          setBookData({ ...bookData, digitizationBy: e.target.value })
        }
        sx={{ width: 400, margin: 1 }}
      />

      <Button type="submit" variant="contained" sx={{ margin: "20px" }}>
        Submit
      </Button>
    </Box>
  );
};
