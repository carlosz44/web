export async function request<T>({
  query,
  variables,
  preview,
}: {
  query: string;
  variables?: Record<string, unknown>;
  preview?: boolean;
}): Promise<T> {
  const endpoint = preview
    ? "https://graphql.datocms.com/preview"
    : "https://graphql.datocms.com/";

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DATOCMS_READONLY_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await response.json();

  if (json.errors) {
    throw new Error(
      json.errors.map((e: { message: string }) => e.message).join(", "),
    );
  }

  return json.data as T;
}
