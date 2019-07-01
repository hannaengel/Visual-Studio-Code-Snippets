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

	"fetch": {
        "prefix": "fetch",
        "body": [
			"fetch('${1:URL HERE')",
			"	.then(res=>res.json())",
			"	.then(data => console.log(data));"
        ],
        "description": "fetch GET"
	}


	"handleClick": {
        "prefix": "handleClick",
        "body": [
			"handleClick = event => {",
			"	console.log(event)",
			"}"
        ],
        "description": "handleClick function with event access"
	}



	  "handleMapArrayForElements": {
        "prefix": "map props",
        "body": [
			"{this.props.${1:INSERT PROP ARRAY HERE}.map((${2:INSERT SINGLE INSTANCE HERE}, index) => {",
			"	return <${3:COMPONENT HERE} key={index} ${4:NAME THE PROP}={${5: INSERT SINGLE INSTANCE HERE}}/>",
			" })}"
        ],
        "description": "pass down array of instances to single component one at a time"
	}

	"functionalComponent": {
        "prefix": "functional component",
        "body": [
			"import React from 'react'",
			"",
			"const ${1:INSERT FUNCTION NAME} = props => {",
			"	return (",
			"		<div>{props.${2:INSERT PROP VAL HERE}}</div>",
			"	)",
			"}",
			"",
			"export default ${3:INSERT FUNCTION NAME}"
		
        ],
        "description": "react component template"
    }

}

