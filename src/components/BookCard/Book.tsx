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
};

export function BookCard(props: BookType) {
  const handleDelete = async (id: string) => {
    try {
      const data = await axiosInstance.delete(`/book/${id}`);
      if (data.data == true) {
        notifyInfo("Book has been deleted successfully!");
      }
    } catch (error: any) {
      notifyError(error.response.data.message);
    }
  };
  return (
    <Card sx={{ maxWidth: 345, margin: "20px", flex: "0 0 auto" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <strong>{props.name}</strong>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Muallif: <b>{props.author}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Inventar raqam: <b>{props.inventarNumber}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Alifbo: <b>{props.languageType}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Yozilgan yil: <b>{props.createdYear}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Nashr yili: <b>{props.createdYear}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Nashriyot: <b>{props.madeBy}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          ISBN: <b>{props.isbn}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Sahifasi: <b>{props.bookPage}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Raqamlashtirilgan sana: <b>{props.digitizationDate}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Raqamlashtirgan hodim: <b>{props.digitizationBy}</b>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button
          size="small"
          variant="outlined"
          startIcon={<DeleteIcon />}
          color="error"
          onClick={() => handleDelete(props._id)}
          type="submit"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
