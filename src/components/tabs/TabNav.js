import './tab.scss';

export const TabNav = ({ children, select }) => (
  <nav className="nav-tab">
    <ul>
      {children.map((el, index) =>
        (
          <li key={index}>
            {
              React.cloneElement(el, { select, index })
            }
          </li>
        ))}
    </ul>
  </nav>
);

// TabNav.propTypes = {
//   click: PropTypes.func.isRequired,
//   list: PropTypes.array.isRequired
// };
