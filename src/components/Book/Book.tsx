import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { notifyError, notifyInfo } from "../../helper/toast";
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

export function BookCard(props: BookType) {
  const handleDelete = async (id: string) => {
    try {
      const data = await axiosInstance.delete(`/book/${id}`);
      notifyInfo(data.data);
    } catch (error: any) {
      notifyError(error.message);
    }
  };
  return (
    <Card sx={{ maxWidth: 345, margin: "20px", flex: "0 0 auto" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg"
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <strong>{props.name}</strong>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Muallif: <b>{props.author}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Rukn: <b>{props.bookType}</b>
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
          Digitallashtirilgan hodim: <b>{props.digitizationBy}</b>
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
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
