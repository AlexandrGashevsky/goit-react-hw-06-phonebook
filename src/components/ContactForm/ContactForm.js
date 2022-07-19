import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/actions";
import contactFormSryles from "./ContactForm.module.css";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { contacts } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onAddContacts = (name, phone) => dispatch(addContact(name, phone));

  const handleSubmit = (e) => {
    e.preventDefault();
    const isAdded = (name) =>
      contacts.items.map((contact) => contact.name).includes(name);

    if (isAdded(name)) {
      return alert(`${name} is already in contacts`);
    } else {
      onAddContacts(name, number);
    }

    setName("");
    setNumber("");
  };

  return (
    <form className={contactFormSryles.form} onSubmit={handleSubmit}>
      <label className={contactFormSryles.labelForm}>
        Name
        <input
          className={contactFormSryles.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className={contactFormSryles.labelForm}>
        Number
        <input
          className={contactFormSryles.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <button className={contactFormSryles.buttonForm} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;
