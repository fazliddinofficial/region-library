import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DescriptionIcon from "@mui/icons-material/Description";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import { Dashboard } from "../Dashboard/Dashboard";

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

// Fake AllBooks Component (replace this with your actual import)
function AllBooks() {
  const books = [
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "Clean Code", author: "Robert C. Martin" },
    { title: "Atomic Habits", author: "James Clear" },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        All Books
      </Typography>
      {books.map((book, index) => (
        <Box key={index} sx={{ mb: 1 }}>
          <Typography variant="h6">{book.title}</Typography>
          <Typography variant="body2">by {book.author}</Typography>
        </Box>
      ))}
    </Box>
  );
}

// Main Page Renderer
function DemoPageContent({ pathname }: { pathname: string }) {
  switch (pathname) {
    case "/addBook":
      return <Dashboard />;
    case "/about":
      return (
        <Box sx={{ py: 4, textAlign: "center" }}>
          <Typography variant="h4">About Us</Typography>
        </Box>
      );
    case "/books":
      return <AllBooks />;
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
  const router = useDemoRouter("/home");
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
          segment: "about",
          title: "About Us",
          icon: <DescriptionIcon />,
        },
        {
          segment: "books",
          title: "All Books",
          icon: <LibraryBooksIcon />,
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
