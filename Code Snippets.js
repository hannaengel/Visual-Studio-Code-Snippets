{
    "component": {
        "prefix": "component",
        "body": [
			"import React, { Component } from 'react'",
			"//import other files here",
			"",
			"export default class ${1:COMPONENT NAME} extends Component {",
			"",
			"//state here",
			"	render() {",
			"		return( ",
			"			<div>",
			"				${2:CONTENT}",
			"			</div>",
			"		)",
			"	}",
			"}"
        ],
        "description": "react component template"
    }

	"state": {
        "prefix": "state",
        "body": [
			"constructor() {",
			"	super();",
			"	this.state = {",
			"		${1:state}: ${2:value}",
			"	};",
			"}"
        ],
        "description": "react template for initializing state"
	}

}

