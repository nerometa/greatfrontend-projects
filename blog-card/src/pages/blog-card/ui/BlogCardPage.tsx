import blogThumbnail from "@/shared/images/spacejoy-YqFz7UMm8qE-unsplash.webp";
import { Credits } from "@/shared/ui";
import { BlogCardProps } from "../model";
import { BlogCard } from "./BlogCard";

export function BlogCardPage() {
  const blogCardData: BlogCardProps = {
    description:
      "Curated vibrant colors for your living, make it pop & calm in the same time.",
    title: "Top 5 Living Room Inspirations",
    url: "#",
    image: blogThumbnail,
    imageAlt: "Spacejoy furniture and decorations thumbnail",
  };

  return (
    <div className="relative h-screen flex justify-center my-[120px]">
      <BlogCard {...blogCardData} />
      <Credits />
    </div>
  );
}
