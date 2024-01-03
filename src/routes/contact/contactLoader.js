import { getContact } from "../../contacts.js";

async function loader ({ params }) {
  const contact = await getContact(params.contactId);

  if (!contact) {
    throw new Response("", { status: 404, statusText: 'Not found' })
  }

  return { contact };
}

export { loader as contactLoader };
