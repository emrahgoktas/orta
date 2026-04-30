import { localBusinessSchema } from "@/lib/schema";

type SchemaMarkupProps = {
  extraSchema?: object;
};

export default function SchemaMarkup({ extraSchema }: SchemaMarkupProps) {
  const payload = extraSchema
    ? [localBusinessSchema, extraSchema]
    : localBusinessSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
