import Link from 'next/link'
import { NEXT_PUBLIC_SITE_TITLE } from './server-constants'
import GoogleAnalytics from '../components/google-analytics'
import styles from '../styles/page.module.css'

const RootPage = () => (
  <>
    <GoogleAnalytics pageTitle={NEXT_PUBLIC_SITE_TITLE} />
    <div className={styles.container}>
      <div>
        <h2>こんにちは！</h2>
        <p>このページはNotionだったらブログが続くのではと目論むのまのNotionブログです</p>
        <p>日々の学びや感じたこと、良かったことをつらつら書いていきます</p>
      </div>
    </div>
  </>
)

export default RootPage
