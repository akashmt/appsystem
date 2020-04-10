import { createGlobalStyle  }  from 'styled-components';

export const Headers = createGlobalStyle `
	h1, h2, h3, h4, h5, h6 { 
		margin: 0rem 0rem 1rem 0rem;
		padding: 0rem 0rem 0rem 0rem;
	}
	h1 { font-size: 2.5rem; }
	h2 { font-size: 2.0rem; }
	h3 { font-size: 1.6rem; }
	h4 { font-size: 1.3rem; }
	h5 { font-size: 1.1rem; }
	h6 { font-size: 1.0rem; }
`

export const Content = createGlobalStyle `
	p { 
		margin: 0rem 0rem 1rem 0rem;
		&:first-of-type { }
		&:last-of-type { 
			margin: 0rem 0rem 0rem 0rem;
		}
		&.lead {
			font-weight: bold;
			font-size: 1.2rem;
		}
	}

	i 			{ font-style: normal; } /* Icons, not Italics in html5 */

	small 	{ }
	strong 	{ }
	b 			{ }
	em 			{ }
	
	s 			{ } /* Strikethrough */
	mark 		{ }
	del 		{ } /* Deleted Text */
	ins 		{ } /* Inserted Text */
	abbr 		{ }
	address { }
	dfn 		{ } /* Defining instance of a term */
`