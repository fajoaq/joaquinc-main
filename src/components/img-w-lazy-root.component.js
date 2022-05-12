import { useState } from "react";
import Image from "next/image";

// ===============================
// NextJS Support for .avif format
// starts in v. 12 https://nextjs.org/docs/api-reference/next/image

const ImgWithLazyRoot = ({
  className,
  alt = "Provide an image alternative text",
  src = "",
  type = "image/webp",
  width,
  height,
  layout = "fill",
  objectFit = "cover",
  priority,
  quality = 76,
  onLoad = () => {},
  onLoadingComplete = () => {},
  lazyBoundary,
  lazyRoot,
  ...rest
}) => {
  const [error, setError] = useState(false);

  const handleError = (e) => {
    setError(true);
  };

  // We can use the event object to throttle calls to onLoad
  const enhanceOnLoad = (e) => {
    onLoad(e);
  };
  // We can use this function to set height/width, for example
  const enhanceOnLoadComplete = (e) => {
    onLoadingComplete(e);
  };

  return (
    <Image
      className={`${className ? className : ""} img-with-fallback`}
      alt={alt}
      src={src}
      type={type}
      width={layout === "fill" ? null : width || 100}
      height={layout === "fill" ? null : height || 100}
      layout={layout}
      objectFit={objectFit}
      quality={quality}
      priority={priority}
      onLoad={enhanceOnLoad}
      onLoadingComplete={enhanceOnLoadComplete}
      onErrorCapture={handleError}
      lazyBoundary={lazyBoundary}
      lazyRoot={lazyRoot ? lazyRoot.current : null}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkqOutBwADHQGMRFCS/wAAAABJRU5ErkJggg=="
      {...rest}
    />
  );
};

export { ImgWithLazyRoot };
