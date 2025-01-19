import { useMutation } from "@tanstack/react-query";
import "./App.css";
import Button from "./components/Button";

function App() {
  const helloMutation = useMutation({
    mutationKey: ["todos"],
    mutationFn: async () => {
      const response = await fetch("/api/hello");
      return response.json();
    },
  });

  return (
    <div className="flex flex-col gap-y-5">
      {helloMutation.data && <p>{helloMutation.data.message}</p>}
      <h1 className="text-3xl font-bold underline">
        <Button
          className="btn btn-primary"
          isLoading={helloMutation.isPending}
          onClick={() => helloMutation.mutate()}
        >
          Click
        </Button>
      </h1>
    </div>
  );
}

export default App;
