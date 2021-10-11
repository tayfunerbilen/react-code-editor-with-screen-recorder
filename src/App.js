import {EditorProvider} from 'context'
import CodeBar from 'components/CodeBar'
import Preview from 'components/Preview'
import Header from 'components/Header'
import styles from './App.module.css'

function App() {
	return (
		<EditorProvider>
			<CodeBar/>
			<main className={styles.main}>
				<Header/>
				<Preview/>
			</main>
		</EditorProvider>
	);
}

export default App;
