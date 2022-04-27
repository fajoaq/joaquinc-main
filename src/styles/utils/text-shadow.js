const textShadow = (size = 0.09, color = `255,255,255`, alpha = 0.88) => `
text-shadow: 0 ${size}em rgba(${color},${alpha}),
    -${size}em 0 rgba(${color},${alpha}),
    0 -${size}em rgba(${color},${alpha}),
    -${size}em -${size}em rgba(${color},${alpha}),
    -${size}em ${size}em rgba(${color},${alpha}),
    ${size}em -${size}em rgba(${color},${alpha}),
    ${size}em ${size}em rgba(${color},${alpha});

`;

const textDropShadow = (size = 0.09, color = `255,255,255`, alpha = 1) => `
text-shadow: 0 ${size}em rgba(${color},${alpha * 0.1}),
    -${size}em 0 rgba(${color},${alpha * 0.2}),
    0 -${size}em rgba(${color},${alpha * 0.3}),
    -${size}em -${size}em rgba(${color},${alpha * 0.4}),
    -${size}em ${size}em rgba(${color},${alpha * 1.5}),
    ${size}em -${size}em rgba(${color},${alpha * 1.6}),
    ${size}em ${size}em rgba(${color},${alpha * 1.7});

`;

export { textShadow, textDropShadow };
