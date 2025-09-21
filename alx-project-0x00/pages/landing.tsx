import Card from "@/components/Card";
import Button from "../components/Button";
import { ButtonProps } from "../interfaces/index.js";

const Landing: React.FC<ButtonProps> = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex flex-col items-center gap-8 p-10">
        <h1 className="text-2xl font-bold">Landing Page Buttons</h1>

        <div className="flex gap-4">
          <Button title="Small - sm" styles="text-sm px-2 py-1 rounded-sm" />
          <Button title="Small - md" styles="text-sm px-2 py-1 rounded-md" />
          <Button title="Small - lg" styles="text-sm px-2 py-1 rounded-lg" />
          <Button
            title="Small - full"
            styles="text-sm px-2 py-1 rounded-full"
          />
        </div>

        <div className="flex gap-4">
          <Button title="Medium - sm" styles="text-base px-4 py-2 rounded-sm" />
          <Button title="Medium - md" styles="text-base px-4 py-2 rounded-md" />
          <Button title="Medium - lg" styles="text-base px-4 py-2 rounded-lg" />
          <Button
            title="Medium - full"
            styles="text-base px-4 py-2 rounded-full"
          />
        </div>

        <div className="flex gap-4">
          <Button title="Large - sm" styles="text-lg px-6 py-3 rounded-sm" />
          <Button title="Large - md" styles="text-lg px-6 py-3 rounded-md" />
          <Button title="Large - lg" styles="text-lg px-6 py-3 rounded-lg" />
          <Button
            title="Large - full"
            styles="text-lg px-6 py-3 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Landing;
