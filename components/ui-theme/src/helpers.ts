import { Font } from './vars.css';

type FamiliesOf<Families, Output> =
  Families extends Record<infer Family, unknown>
    ? {
        [Key in Family]: Families[Key] extends Record<infer Variant, unknown>
          ? Record<Variant, Output>
          : never;
      }
    : never;

export function transformFonts<Fonts extends Record<string, Record<string, Font>>, Output>(
  fonts: Fonts,
  transformer: (font: Font) => Output,
): FamiliesOf<Fonts, Output> {
  const familiesOutput: Record<string, Record<string, Output>> = {};

  for (const [family, variants] of Object.entries(fonts)) {
    const variantsOutput: Record<string, Output> = {};

    for (const [variant, font] of Object.entries(variants)) {
      variantsOutput[variant] = transformer(font);
    }

    familiesOutput[family] = variantsOutput;
  }

  return familiesOutput as FamiliesOf<Fonts, Output>;
}
