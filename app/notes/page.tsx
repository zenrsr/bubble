import Notes from "@/components/component/Notes";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <>
      <Notes />
      <div className="fixed bottom-4 right-4">
        <Button className="border-[2px]" variant={"ghost"}>
          Save
        </Button>
      </div>
    </>
  );
};

export default page;
