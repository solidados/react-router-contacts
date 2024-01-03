import { updateContact } from "../../contacts.js";

async function action ({ request, params }) {
  let formData = await request.formData();

  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true"
  });
}

export { action as contactAction };
