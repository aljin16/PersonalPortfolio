export default function ProjectImage({
  name,
  alt,
  eager = false,
  sizes = "(max-width: 768px) 90vw, 580px",
}) {
  return (
    <img
      src={`/images/${name}-1440.webp`}
      srcSet={`/images/${name}-720.webp 720w, /images/${name}-1440.webp 1440w`}
      sizes={sizes}
      width="1440"
      height="1000"
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
    />
  );
}
