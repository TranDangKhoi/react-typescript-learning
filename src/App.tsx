import { useEffect, useState } from "react";
import Reminder from "./models/reminder";
import ReminderList from "./components/ReminderList";
import reminderService from "./services/reminder";
function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  useEffect(() => {
    async function loadReminders() {
      const reminders = await reminderService.getReminders();
      setReminders(reminders);
    }
    loadReminders();
  }, []);
  return (
    <>
      <ReminderList items={reminders}></ReminderList>
    </>
  );
}

function displayReview(
  totalReviews: number,
  name: string,
  premiumUser: boolean
) {
  return <></>;
}
export default App;
