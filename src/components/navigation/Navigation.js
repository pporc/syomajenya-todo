import { NavLink } from 'react-router-dom';
import './navigation.scss';

export const Navigation = props => (
  <nav className="main-nav">
    <ul>
      {
        props.list.map(item => (
          <li key={item.name}>
            <NavLink
              to={`/${item.name.toLowerCase()}`}
              activeClassName="active"
            >
              <i className={item.icon} style={{ marginRight: '10px' }} />
              {item.name}
            </NavLink>
          </li>
        ))
      }
    </ul>
  </nav>
);

Navigation.propTypes = { list: PropTypes.array.isRequired };
