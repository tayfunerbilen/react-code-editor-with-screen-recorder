import {EditorContext, useContext} from 'context';
import styles from "components/Preview.module.css"
import {useMemo} from 'react';

function Preview() {

	const {html, css, js} = useContext(EditorContext)

	const srcDoc = useMemo(() => {
		if (!html && !css && !js) return false
		return `<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
	      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<style>
	${css}
	</style>
</head>
<body>
	${html}
	<script>
	${js}
	</script>
</body>
</html>`
	}, [html, css, js])

	return (
		<div className={styles.content}>
			{!srcDoc && <div className={styles.previewLoading}>./prototurk</div>}
			{srcDoc && <iframe className={styles.preview} srcDoc={srcDoc} />}
		</div>
	)
}

export default Preview