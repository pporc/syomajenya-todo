import { EditedItem } from 'components/editedItem';
import { GeoLocation } from 'components/geoLocation';
import { Todos } from 'components/todos';

const fn = text => console.log(text);

export const Home = () => (
  <div>
    <EditedItem onloose={fn} />
    <br />
    <Todos />
    <GeoLocation />
  </div>
);
