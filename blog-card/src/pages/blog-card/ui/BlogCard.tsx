import { BlogCardProps } from "../model";

export function BlogCard({
  description,
  image,
  title,
  url,
  imageAlt = `${title} thumbnail`,
}: BlogCardProps) {
  return (
    <article className="w-[340px] max-h-min rounded-lg overflow-hidden shadow bg-white">
      <img
        loading="lazy"
        decoding="async"
        fetchPriority="high"
        src={image}
        className="w-full h-[288px] object-cover"
        alt={imageAlt}
      />
      <section className="min-h-[216px] py-6 px-4 space-y-3 ">
        <div className="space-y-2">
          <span
            aria-label="badge"
            className="text-green-700 rounded-full bg-green-50 border text-sm border-green-200 max-w-max px-2 py-[2px]"
          >
            Interior
          </span>
          <h2 className="font-semibold text-neutral-900 text-lg">{title}</h2>
        </div>

        <div className="space-y-6">
          <p className="text-neutral-600 font-medium">{description}</p>
          <a
            href={url}
            role="button"
            className="bg-white rounded inline-flex items-center gap-[6px] font-medium text-indigo-700 hover:text-indigo-800 focus:text-indigo-800 focus:ring focus:border-blue-500"
          >
            <span>Read More</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="fill-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.4764 9.16658L9.00637 4.69657L10.1849 3.51807L16.6667 9.99992L10.1849 16.4817L9.00637 15.3032L13.4764 10.8332H3.33337V9.16658H13.4764Z" />
            </svg>
            <span className="sr-only">Read {title}</span>
          </a>
        </div>
      </section>
    </article>
  );
}
