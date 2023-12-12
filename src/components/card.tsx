"use client";

import { Star } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface CardProps {
  framework: string;
  title: string;
  desc: string;
  icon: JSX.Element;
  stars: number;
  className?: string;
  link?: string;
}
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export default function CardWorks({
  framework,
  title,
  icon,
  desc,
  stars,
  className,
  link,
}: CardProps) {
  return (
    <motion.main

    >
      <a href={link} target="_blank">
        <Card
          className={cn(
            "bg-[#0e0e0f] hover:bg-black h-40 rounded-none flex justify-center flex-col hover:scale-105 transition cursor-pointer",
            className
          )}
        >
          <CardHeader>
            <CardTitle className="text-xs flex gap-2 items-center font-medium tracking-[0.13rem]">
              {icon}
              {framework}
            </CardTitle>
            <CardTitle className="xl:text-base md:text-base text-sm font-normal">{title}</CardTitle>
            <CardDescription className="text-xs">{desc}</CardDescription>
            <CardDescription className="flex gap-2 items-center ">
              <Star width={15} />
              {stars}
            </CardDescription>
          </CardHeader>
        </Card>
      </a>
    </motion.main >
  );
}
