import {useContext, createContext, useState} from 'react';

const EditorContext = createContext()

const EditorProvider = ({ children }) => {

	const [html, setHtml] = useState('')
	const [css, setCss] = useState('')
	const [js, setJs] = useState('')

	const value = {
		html,
		css,
		js,
		setHtml,
		setCss,
		setJs
	}

	return (
		<EditorContext.Provider value={value}>
			{children}
		</EditorContext.Provider>
	)
}

export {
	EditorProvider,
	EditorContext,
	useContext
}