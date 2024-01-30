import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <div className="flex flex-col justify-center items-center gap-10">
        <button className="p-2 bg-orange-400 rounded-md">Click me</button>
        <Button variant="outline">Button</Button>
        <Button variant="outline" size="sm">
          sm button
        </Button>
        <Button variant="destructive" size="lg">
          large button
        </Button>
        <Button variant="myButton">My Button</Button>
      </div>
    </>
  );
}
