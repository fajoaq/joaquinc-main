const textBgPop = (
  brightness = 0.2,
  center = 50,
  colorRGB = `248,248,248`
) => ({
  background: `linear-gradient(
    transparent ,
    rgba(${colorRGB},${brightness}) ${center}%,
    transparent 
  )`,
});

export { textBgPop };
