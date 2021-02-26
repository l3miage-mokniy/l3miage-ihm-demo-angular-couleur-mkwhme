export interface ColorRGB {
 R: number; // entre 0 et 100
 G: number; // entre 0 et 100
 B: number; // entre 0 et 100
}

const reHexa = /^#(..)(..)(..)$/;

export function codeToRGB(colorCode: string ): ColorRGB {
  const [_str, sr, sg, sb] = reHexa.exec(colorCode);
  return {
    R: +`0x${sr}`*100/255,
    G: +`0x${sg}`*100/255,
    B: +`0x${sb}`*100/255
  };
}

export function RGBToCode(colorRGB: ColorRGB): string {
  const sr = numberToHexa2( colorRGB.R * 255 / 100 );
  const sg = numberToHexa2( colorRGB.G * 255 / 100 );
  const sb = numberToHexa2( colorRGB.B * 255 / 100 );
  return `#${sr}${sg}${sb}`;
}

function numberToHexa2(v: number): string {
  const s = Math.floor(v).toString(16);
  return s.length === 1 ? `0${s}` : s;
}

