import { createGlobalStyle  }  from 'styled-components';

export const AppGrid = createGlobalStyle `
	.App {
		margin: 0rem auto 0rem auto;
		padding: .5rem 0rem 0rem 0rem;
		height: 100vh;
		background-color: pink;
		.App-container {
			display: grid;
			grid-template-columns: 200px auto;
			grid-template-rows: auto auto auto auto;
			grid-template-areas: 
				"appheader appheader"
				"appmainnav appmainnav"
				"appsidebar appmain"
				"appfooter appfooter";

			header.App-header 	{ grid-area: appheader; }
			nav.App-mainnav 		{ grid-area: appmainnav; }
			main.App-main  			{ grid-area: appmain; }
			aside.App-sidebar  	{ grid-area: appsidebar; }
			footer.App-footer  	{ grid-area: appfooter; }

			width: 1200px;
			margin: 0rem auto 0rem auto;
			padding: 0rem 0rem 0rem 0rem;
			background-color: hotpink;
			.App-header,	
			.App-mainnav,
			.App-main,
			.App-sidebar,
			.App-footer { padding: 1rem; }

			.App-header 	{ background-color: #232323; color: white; }
			.App-mainnav 	{  }
			.App-main  		{  }
			.App-sidebar  {  }
			.App-footer  	{  }
		}
	}
`