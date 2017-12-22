import { Tabs, Tablink, Tab, TabContent } from 'components/tabs';
import { TodoContent } from 'components/todoContent';
import './taskList.scss';

const date = new Date();

const getWeek = () => {
  const days = [];
  const dt = new Date();
  const day = dt.getDay() === 0 ? 6 : dt.getDay() - 1;
  const dayNumber = dt.getDate();
  const thisMonday = dayNumber - day;
  const formatter = new Intl.DateTimeFormat('en', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  for (let i = 0; i <= 6; i++) {
    dt.setDate(thisMonday + i, dt.getMonth() + 1, dt.getFullYear());
    const date = formatter.format(dt).split(', ');
    days.push({
      day: date[0],
      date: date[1]
    });
  }

  return days;
};

export const TaskList = () => (
  <Tabs selectedIndex={date.getDay() === 0 ? 6 : date.getDay() - 1}>
    {
      getWeek().map(el => (
        <Tab key={el.day}>
          <Tablink title={el.day} date={el.date} />
          <TabContent>
            <TodoContent />
          </TabContent>
        </Tab>
      ))
    }
  </Tabs>
);
