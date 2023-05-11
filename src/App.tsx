import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Create zod validation schema for the form
const formSchema = z.object({});

export default function App() {
  const form = useForm({ resolver: zodResolver(formSchema) });

  return <div className="App">{/* UI code goes here */}</div>;
}
