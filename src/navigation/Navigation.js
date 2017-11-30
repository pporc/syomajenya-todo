import './navigation.scss';

export const Navigation = props => (
	<nav className="main-nav">
		<ul>
			{
				props.list.map( item => (
					<li key={item}>
						<a href={`/${item.toLowerCase()}`}>{item}</a>
					</li>
				))
			}
		</ul>	
	</nav>
);