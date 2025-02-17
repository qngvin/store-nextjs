import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-muted-foreground">HomePage</h1>
      <Button className="capitalize m-8 " variant="outline" size="lg">
        Click me
      </Button>
    </div>
  );
}
