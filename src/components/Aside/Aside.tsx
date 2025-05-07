import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DescriptionIcon from "@mui/icons-material/Description";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import { Dashboard } from "../Dashboard/Dashboard";
import { Search } from "../Search/Search";
import { BookCard, BookType } from "../Book/Book";
import { useEffect, useState } from "react";
import { notifyError } from "../../helper/toast";
import axiosInstance from "../../services/axios";

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Main Page Renderer
function DemoPageContent({ pathname }: { pathname: string }) {
  const [books, setBooks] = useState<BookType[]>([]);

  const fetchAllBooks = async () => {
    try {
      const res = await axiosInstance.get("/book");
      setBooks(res.data);
    } catch (e: any) {
      notifyError(e.message);
    }
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);
  switch (pathname) {
    case "/addBook":
      return <Dashboard />;
    case "/find":
      return (
        <>
          <Search />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {books.map((book: BookType) => (
              <BookCard {...book} />
            ))}
          </div>
        </>
      );
    default:
      return (
        <Box sx={{ py: 4, textAlign: "center" }}>
          <Typography variant="h4">Page not found</Typography>
        </Box>
      );
  }
}

interface DemoProps {
  window?: () => Window;
}

export function Aside(props: DemoProps) {
  const { window } = props;
  const router = useDemoRouter("/addBook");
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={[
        {
          segment: "addBook",
          title: "Add book",
          icon: <DescriptionIcon />,
        },
        {
          segment: "find",
          title: "All books",
          icon: <DescriptionIcon />,
        },
      ]}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}
