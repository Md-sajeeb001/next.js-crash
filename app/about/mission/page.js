import Button from "@/app/components/button";
import React from "react";
import group from "@/public/group.png";
import Image from "next/image";

export const metadata = {
  title: "mission",
  description: "this is mission page",
};

export default function Mission() {
  return (
    <div>
      <h1>mission page</h1>
      <div className="py-6">
        <Image placeholder="blur" src={group} alt="group" quality={100}></Image>
      </div>
      <Button></Button>
    </div>
  );
}
