import { Carousel } from "@material-tailwind/react";

export function CarouselTail({ imageUrls }) {
  return (
    <Carousel className="rounded-xl">
      {imageUrls.map((url, idx) => (
        <img
          key={idx}
          src={url}
          alt={`Slide ${idx + 1}`}
          className="object-cover w-full h-full"
        />
      ))}
    </Carousel>
  );
}
