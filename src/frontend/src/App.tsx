import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DataInitializer from "./components/DataInitializer";
import Gallery from "./pages/Gallery";
import "./index.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DataInitializer />
      <Gallery />
    </QueryClientProvider>
  );
}
