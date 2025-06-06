import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axiosInstance from "../../services/axios";
import { notifyError } from "../../helper/toast";
import { BookType } from "../BookCard/Book";
import { Container } from "@mui/material";
import { DateFormatter } from "../DateFormatter/DateFormatter";

export function BasicTable() {
  const [books, setBooks] = useState<BookType[]>([]);

  const fetchBook = async () => {
    try {
      const { data } = await axiosInstance.get("book");
      setBooks(data);
    } catch (error: any) {
      notifyError(error.message);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ paddingTop: 3 }}>
      <TableContainer component={Paper}>
        {books.length ? (
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Kitob nomi</TableCell>
                <TableCell>Kitob raqami</TableCell>
                <TableCell>Inventar raqami</TableCell>
                <TableCell>Alifbo turi</TableCell>
                <TableCell>Nashr yili</TableCell>
                <TableCell>Nashriyot</TableCell>
                <TableCell>Muallif</TableCell>
                <TableCell>ISBN</TableCell>
                <TableCell>Sahifalar soni</TableCell>
                <TableCell>Raqamlashtirilgan sana</TableCell>
                <TableCell>Raqamlashtirgan hodim</TableCell>
                <TableCell>Yaratilgan sana</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((book, index) => (
                <TableRow
                  key={book._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {book.name}
                  </TableCell>
                  <TableCell align="right">{book.bookNumber}</TableCell>
                  <TableCell align="right">{book.inventarNumber}</TableCell>
                  <TableCell align="right">{book.languageType}</TableCell>
                  <TableCell align="right">{book.createdYear}</TableCell>
                  <TableCell align="right">{book.madeBy}</TableCell>
                  <TableCell align="right">{book.author}</TableCell>
                  <TableCell align="right">{book.isbn}</TableCell>
                  <TableCell align="right">{book.bookPage}</TableCell>
                  <TableCell align="right">
                    <DateFormatter date={book.digitizationDate} />
                  </TableCell>
                  <TableCell align="right">{book.digitizationBy}</TableCell>
                  <TableCell align="right">
                    <DateFormatter date={book.createdAt} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>No books found</p>
        )}
      </TableContainer>
    </Container>
  );
}
