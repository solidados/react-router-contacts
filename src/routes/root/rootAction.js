import { redirect } from "react-router-dom";
import { createContact } from "../../contacts.js";

async function action () {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export { action as rootAction };
