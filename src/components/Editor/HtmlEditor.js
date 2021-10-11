import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";
import {EditorContext, useContext} from 'context';

function HtmlEditor() {

	const {html, setHtml} = useContext(EditorContext)

	return (
		<AceEditor
			placeholder="Write your HTML codes here!"
			mode="html"
			theme="monokai"
			name="editor_html"
			fontSize={16}
			value={html}
			height={'100%'}
			width={'100%'}
			onChange={val => setHtml(val)}
			showPrintMargin={false}
			showGutter={false}
			highlightActiveLine={true}
			setOptions={{
				enableBasicAutocompletion: true,
				enableLiveAutocompletion: false,
				enableSnippets: true,
				showLineNumbers: false,
				tabSize: 2,
			}}/>
	)
}

export default HtmlEditor