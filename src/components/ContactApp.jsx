import React, { useEffect, useState } from "react";
import alphabets from "../utils/alphabet";
import classes from "./index.module.scss";
import Dialog from "./Dialog";
import Tabs from "./Tabs";
import Tab from "./Tab";
import Card from "./Card";
import { alphabetSeparator } from "../utils/alphabetSeparator";
import { getRequestMethod } from "../services/httpService";
export default function ContactApp() {
  const [contacts, setContacts] = useState({});
  const [selected, setSelected] = useState("A");
  const [selectedContact, setSelectedContact] = useState(null);
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRequestMethod("https://randomuser.me/api/?results=400")
      .then((response) => {
        const sortedContactsWithFirstLetter = alphabetSeparator(
          response.data.results
        );
        setContacts(sortedContactsWithFirstLetter);
      })
      .catch(() => console.log("Error"))
      .finally(() => setIsLoading(false));
  }, []);

  const onChangeTabs = (value) => {
    setSelected(value?.toUpperCase());
    setSelectedContact(null);
  };

  const renderTabs = alphabets?.map((letter) => (
    <Tabs
      key={letter}
      isSelected={selected === letter}
      isDisabled={!contacts?.[letter]?.length}
      onChange={onChangeTabs}
      selected={selected}
      label={letter}
      count={contacts?.[letter]?.length}
      hasCounter={true}
    />
  ));

  const handleOpenContact = (e, current) => {
    const { x, y, height } = e?.target?.getBoundingClientRect();
    setAnchorPoint({ x, y: y + height });
    setSelectedContact(current);
  };

  const renderContactBySelectedTab = contacts?.[selected]?.map((current) => {
    const { first, last } = current?.name;
    return (
      <div
        onClick={(e) => handleOpenContact(e, current)}
        className={classes.row}
      >
        {first}, {last?.toUpperCase()}
      </div>
    );
  });

  const handleCloseDialog = () => setSelectedContact(null);

  return (
    <div data-testid="contactApp" className={classes.contact_app_container}>
      {isLoading ? (
        <div className={classes.loading}>Loading ...</div>
      ) : (
        <>
          <h3>Contact List</h3>
          <Tab>{renderTabs}</Tab>
          <div className={classes.content}>{renderContactBySelectedTab}</div>
          {selectedContact && (
            <Dialog onClose={handleCloseDialog} anchorPoint={anchorPoint}>
              <Card selectedContact={selectedContact} />
            </Dialog>
          )}
        </>
      )}
    </div>
  );
}
