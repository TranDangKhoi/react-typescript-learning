import React from "react";
import Reminder from "../models/reminder";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

const ReminderList = ({ items, onRemoveReminder }: ReminderListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <>
          <li key={item.id}>{item.title}</li>
          <button onClick={() => onRemoveReminder(item.id)}>Delete</button>
        </>
      ))}
    </ul>
  );
};

export default ReminderList;
