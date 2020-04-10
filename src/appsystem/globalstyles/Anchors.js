import { createGlobalStyle  }  from 'styled-components';

export const Anchor = createGlobalStyle `
	a {
		color: blue;
		text-decoration: none;
		a:active  { }
		&:visited { color: blue; }
		&:hover,
		&:focus,
		&:active  { color: red;  }
		&:hover,
		a:active  { outline: 0; }
		&:hover   { }
		&:focus   { outline: thin dotted; }
		.alt {
			
		}
	}
`