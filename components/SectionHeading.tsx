type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      <p className="text-sm font-bold uppercase tracking-wide text-ideaal-orange">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-bold leading-tight text-ideaal-ink md:text-4xl ${
          align === "left" ? "orange-rule" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-7 text-base leading-7 text-slate-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
