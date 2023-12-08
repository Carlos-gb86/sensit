import { Carousel } from "@material-tailwind/react";

export function CarouselTail({ imageUrls }) {
  return (
    <Carousel className="rounded-xl" dots={true}>
      {imageUrls.map((url, idx) => (
        <img
          key={idx}
          src={url}
          alt={`Slide ${idx + 1}`}
          className="h-full w-full object-cover"
        />
      ))}
    </Carousel>
  );
}