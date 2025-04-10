import type { Route } from "./+types/support";
import SupportPng from "~/assets/support.png";
import { NvButton } from "@nova-design-system/nova-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Support | Nova Demo" },
    { name: "description", content: "Contact us for support" },
  ];
}

export default function Home() {
  return (
    <>
      <div className="bg-background flex flex-col items-center h-full justify-center p-6 gap-16">
        <h1>Still have a question?</h1>
        <img src={SupportPng} alt="Support" width="400px" />
        <NvButton>Contact us</NvButton>
      </div>
    </>
  );
}
