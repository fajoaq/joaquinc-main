import { useState, Fragment } from "react";
import Image from "next/image";

// NextJS Support for .avif format
// starts in v. 12

const ImgWithFallback = ({
  className,
  alt = "Provide an image alternative text",
  src = "",
  fallback,
  type = "image/avif",
  fallbackType = "image/webp",
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

  const enhanceOnLoad = (e) => {
    onLoad();
  };

  const enhanceOnLoadComplete = (e) => {
    //console.log(e);
    onLoadingComplete();
  };

  return (
    <Fragment>
      <Image
        className={`${className ? className : ""} img-with-fallback`}
        alt={alt}
        src={error ? fallback : src}
        type={error ? fallbackType : type}
        width={layout === "fill" ? null : width || 100}
        height={layout === "fill" ? null : height || 100}
        layout={layout}
        objectFit={objectFit}
        quality={quality}
        priority={priority}
        onLoad={enhanceOnLoad}
        onLoadingComplete={enhanceOnLoadComplete}
        onError={handleError}
        lazyBoundary={lazyBoundary}
        lazyRoot={lazyRoot ? lazyRoot.current : null}
        {...rest}
      />
    </Fragment>
  );
};

export { ImgWithFallback };
