import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { notifyError, notifyInfo } from "../../helper/toast";
import axiosInstance from "../../services/axios";

export type BookType = {
  _id: string;
  name?: string;
  bookNumber?: number;
  inventarNumber?: string;
  author?: string;
  languageType?: string;
  createdYear?: number;
  madeBy?: string;
  isbn?: string;
  bookPage?: number;
  digitizationDate?: string;
  digitizationBy?: string;
  createdAt?: string;
};

interface BookProps {
  book: BookType;
  refetch: () => void;
}

export function BookCard({ book, refetch }: BookProps) {
  const handleDelete = async (id: string) => {
    try {
      await axiosInstance.delete(`/book/${id}`);
      refetch();
      notifyInfo("Book has been deleted successfully!");
    } catch (error: any) {
      notifyError(error.response.data.message);
    }
  };
  return (
    <Card sx={{ maxWidth: 345, margin: "20px", flex: "0 0 auto" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <strong>{book.name}</strong>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Muallif: <b>{book.author}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Inventar raqam: <b>{book.inventarNumber}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Alifbo: <b>{book.languageType}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Yozilgan yil: <b>{book.createdYear}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Nashr yili: <b>{book.createdYear}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Nashriyot: <b>{book.madeBy}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          ISBN: <b>{book.isbn}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Sahifasi: <b>{book.bookPage}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Raqamlashtirilgan sana:{" "}
          <b>
            {book.digitizationDate
              ? new Date(book.digitizationDate).toLocaleDateString("en-GB")
              : new Date().toLocaleDateString("en-GB")}
          </b>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Raqamlashtirgan hodim: <b>{book.digitizationBy}</b>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button
          size="small"
          variant="outlined"
          startIcon={<DeleteIcon />}
          color="error"
          onClick={() => handleDelete(book._id)}
          type="submit">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
