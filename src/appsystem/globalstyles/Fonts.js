import { createGlobalStyle  }  from 'styled-components';
import { FONTBASE, FONTFAMILY } from '../consts'

export const Fonts = createGlobalStyle `

	html, body {
		font-family: ${FONTFAMILY};
		font-size: ${FONTBASE};
		-webkit-font-smoothing: antialiasing;
		-moz-osx-font-smoothing: grayscale;
		h1 {  }
		h2 {  }
		h3 {  }
		h4 {  }
		h5 {  }
		h6 {  }
	}

`