
import './globals.css';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import Header from './components/Header';
import NavigationContextProvider from './context/navigationContext';
import BackToTop from './components/BackToTop';
import siteMetadata from './utils/siteMetadata';



export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      
      <NavigationContextProvider>
    
        <body className={`grid border-2 border-red-800`}>
          <Header />
          <main className=''>
          {children}
          </main>
          <Footer />
          <SideBar/>
          <BackToTop />
        </body>
      </NavigationContextProvider>
      
    </html>
  )
}
