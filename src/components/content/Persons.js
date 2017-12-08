export const Persons = ({ users, clickHandler }) => (
  <ul className="persons">{users.map(user => (
    <li
      key={user.id}
      onClick={() => clickHandler(user)}
    >
      {user.name}
    </li>
  ))}
  </ul>
);

Persons.propTypes = {
  users: PropTypes.array,
  clickHandler: PropTypes.func.isRequired
};

Persons.defaultProps = { users: [] };
