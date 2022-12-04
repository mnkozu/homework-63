import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {ContactApi, ContactType} from "../../types";
import Spinner from "../../components/Spinner/Spinner";

const Contacts = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchContacts = useCallback(async () => {
    try {
      setLoading(true);
      const contactsResponse = await axiosApi.get<ContactApi>('myBlog/contacts/socialMedia.json');
      const contacts = Object.keys(contactsResponse.data).map(key => {
        const contact = contactsResponse.data[key];
        contact.id = key;
        return contact;
      });
      setContacts(contacts);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchContacts();
  }, [fetchContacts]);

  return (
    <div className="p-2">
      <div className="card p-4">
        <h4 className="card-title">Be always in touch with us.</h4>
        <p className="card-text">Subscribe to our social networks to keep up to date with everything new.
          We promise you that we will entertain you, you will not be bored.
        </p>
        <div className="d-flex flex-row justify-content-center">
          {loading ? <Spinner/> : contacts.map(contact => (
            <div className="py-3 text-center m-3" key={contact.id}>
              <a href={contact.link} style={{textDecoration: "none"}} className="text-danger">
                <img
                  src={contact.icon}
                  alt={contact.name}
                  style={{background:'no-repeat center center / cover'}}
                  width="40px" height="40px"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;