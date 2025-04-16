import * as React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Ewert } from "next/font/google";

const ewert = Ewert({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container w-full">
        <div className="flex flex-col items-center justify-center min-h-screen gap-10">
          <h1
            className={`font-bold text-5xl text-[#113946] ${ewert.className}`}
          >
            Welcome To Music Station
          </h1>
          <Link href={"/introduction"}>
            <Button className="bg-teal-700" size="lg">
              Start <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
