import { Tabs, Tablink, Tab, TabContent } from 'components/tabs';
import { TodoContent } from 'components/todoContent';
import './taskList.scss';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const date = new Date();

export const TaskList = () => (
  <Tabs selectedIndex={date.getDay() - 1}>

    {
      days.map(day => (
        <Tab key={day}>
          <Tablink title={day} />
          <TabContent>
            <TodoContent />
          </TabContent>
        </Tab>
      ))
    }
  </Tabs>
);
