import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export type BookType = {
  name?: string;
  bookNumber?: number;
  bookType?: string;
  author?: string;
  languageType?: string;
  createdYear?: number;
  madeBy?: string;
  isbn?: string;
  bookpage?: number;
  digitizationDate?: string;
  digitizationBy?: string;
};

export function BookCard(props: BookType) {
  return (
    <Card sx={{ maxWidth: 345, margin: "20px", flex: "0 0 auto" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg"
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nomi: {props.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Muallif: {props.author}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Rukn: {props.bookType}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Alifbo: {props.languageType}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Yozilgan yil: {props.createdYear}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Nashr yili: {props.createdYear}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Nashriyot: {props.madeBy}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          ISBN: {props.isbn}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Sahifasi: {props.bookpage}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Raqamlashtirilgan sana: {props.digitizationDate}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Digitallashtirilgan hodim: {props.digitizationBy}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}
