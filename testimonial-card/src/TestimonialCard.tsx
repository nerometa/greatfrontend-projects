type TestimonialCardProps = {
  description: string;
  name: string;
  username: string;
  image: string;
};

function TestimonialCard({
  description,
  name,
  username,
  image,
}: TestimonialCardProps) {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <article
        aria-label="testimonial"
        className="p-6 bg-white shadow space-y-4 rounded-lg max-w-[340px] mx-auto"
      >
        <div className="flex items-center gap-4">
          <img
            loading="lazy"
            src={`src/assets/${image}`}
            alt={`${name} profile image`}
            className="size-12"
          />
          <div>
            <p className="font-semibold text-lg">{name}</p>
            <p className="text-sm text-neutral-600">@{username}</p>
          </div>
        </div>

        <blockquote>
          <p className="text-neutral-600">{description}</p>
        </blockquote>
      </article>
    </div>
  );
}

export default TestimonialCard;
