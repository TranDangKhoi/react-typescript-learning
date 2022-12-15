import { useEffect, useState } from "react";
import Reminder from "./models/reminder";
import ReminderList from "./components/ReminderList";
import reminderService from "./services/reminder";
function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const handleDeleteToDos = (id: number): void => {
    const newReminders = reminders.filter((item) => item.id !== id);
    setReminders(newReminders);
  };

  useEffect(() => {
    async function loadReminders() {
      const reminders = await reminderService.getReminders();
      setReminders(reminders);
    }
    loadReminders();
  }, []);
  return (
    <>
      <ReminderList
        items={reminders}
        onRemoveReminder={handleDeleteToDos}
      ></ReminderList>
    </>
  );
}
export default App;
