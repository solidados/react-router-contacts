import { updateContact } from "../../../contacts.js";
import { redirect } from "react-router-dom";

async function action ({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(updates);

  await updateContact(params.contactId, updates);

  return redirect(`/contacts/${params.contactId}`);
}

export { action as editAction };
