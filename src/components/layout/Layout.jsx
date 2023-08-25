import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ pageClassName, children }) {
  return (
    <div className={pageClassName}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}