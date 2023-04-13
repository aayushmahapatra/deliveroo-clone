import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "qwoxusny",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlfor = (source: any) => builder.image(source);

// RUN THIS to add exception for localhost 3080 CORS policy
// sanity cors add http://localhost:3000

export default client;
