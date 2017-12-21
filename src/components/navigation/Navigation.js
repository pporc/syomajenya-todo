import './navigation.scss';

export const Navigation = props => (
  <nav className="main-nav">
    <ul>
      {
        props.list.map(item => (
          <li key={item.name}>
            <a href={`/${item.name.toLowerCase()}`}>
              <i className={item.icon} />
              {item.name}
            </a>
          </li>
        ))
      }
    </ul>
  </nav>
);

Navigation.propTypes = { list: PropTypes.array.isRequired };
