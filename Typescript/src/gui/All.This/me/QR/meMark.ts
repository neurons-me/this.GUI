// The .me mark: a leading period, then "m", then "e" — matching the actual
// brand mark (".me", ".who?", ".GUI" all lead with the dot; this must not
// read as "me." with a trailing period). Rendered by PixelWordmark.tsx at
// a fixed small pixel size — deliberately NOT fed into QR.tsx's
// embedBitmap mechanism. Legible text needs more module width than a
// small, still-scannable embed region ever has (a real "m"/"e" letterform
// doesn't survive quantizing down to ~5-13 QR modules, regardless of how
// it's drawn), and QR.tsx's embedMode has no way to clear a blank area
// without also drawing the bitmap back in (confirmed live — both
// "positive-overlay" and "negative-space" run the same overlay-drawing
// path). So QRme/CleakerCard don't touch the QR's embed props at all: they
// paint a small opaque backing patch over the (otherwise complete,
// undisturbed) QR and place this wordmark on top — the same technique real
// QR-with-logo codes use in practice (WeChat, payment QRs, etc.), relying
// on ECC=H to tolerate that small a patch rather than trying to make the
// QR draw its own logo. One-column gaps between glyphs — two columns (tried
// once) rendered as an unnaturally large floating gap between "m" and "e"
// once actually seen at scale, not as deliberate letter-spacing.
//
// "m" and "e" specifically drawn to read as lowercase, not blocky capitals:
// "m" has two humps meeting with a gap at the very top-center (a flat solid
// top bar reads as a capital M or Cyrillic Ш instead), and "e" is a real
// closed loop with an opening at the bottom-right (a full symmetric block
// reads as capital E) — the actual brand mark is ".me", never ".ME".
export const ME_WORDMARK_EMBED_BITMAP: string[] = [
  '0000000000000',
  '0001101100110',
  '0001010101001',
  '0001010101111',
  '0001010101000',
  '1101010100111',
  '1100000000000',
];
