import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions";
import contactListStyles from "./ContactList.module.css";

export default function ContactList() {
  const { contacts } = useSelector((state) => state);
  const dispatch = useDispatch();
  const onDelete = (id) => dispatch(deleteContact(id));
  const filteredContacts = (contacts) => {
    return contacts.items.filter((contact) =>
      contact.name.toLowerCase().includes(contacts.filter.toLowerCase())
    );
  };

  const filterContacts = filteredContacts(contacts);

  return (
    <ul className={contactListStyles.list}>
      {filterContacts.map((contact) => (
        <li className={contactListStyles.item} key={contact.id}>
          <p className={contactListStyles.name}>
            {contact.name}: {contact.number}
          </p>
          {
            <button
              className={contactListStyles.button}
              data-key={contact.id}
              type="button"
              name="delete"
              onClick={(e) => onDelete(contact.id)}
            >
              Delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
}
