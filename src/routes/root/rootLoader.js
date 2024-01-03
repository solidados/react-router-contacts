import { getContacts } from "../../contacts.js";

async function loader ({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  const contacts = await getContacts(q);
  return { contacts, q };
}

export { loader as rootLoader };
