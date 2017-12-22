import { Button } from 'components/button';
import { Link } from 'react-router-dom';
import './notFound.scss';

export const NotFound = (props) => {
  const path = props.pathname.slice(1);
  return (
    <div className="notFound">
      <h1>Requested page <span className="pathname">{path}</span> not found</h1>
      <Link to="/tasks">
        <Button value="Go to the task list" styles="salmon" type="button" />
      </Link>
    </div>
  );
};
