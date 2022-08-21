import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + "-Famaclues" : "Famaclues"}</title>
      </Head>
      <div className="flex min-h-screen flex-col justify-between ">
        {/* head */}
        <header className="sticky top-0 z-99">
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">Famaclues</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>

        {/* main section of website in between */}
        <main className="container m-auto mt-4 px-4">{children}</main>

        {/* footer at bottom of website */}
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2022 Famaclues</p>
        </footer>
      </div>
    </>
  );
}
