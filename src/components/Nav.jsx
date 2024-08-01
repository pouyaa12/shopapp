function Nav() {
  return (
    <div className="bg-gradient-to-r from-sky-300 to-emerald-500">
      <nav className="flex items-center justify-between">
        <ul className="m-1 flex">
          <li className="text-xl font-bold p-3 hover:bg-slate-100 rounded-xl">
            <a href="#">HOME</a>
          </li>
          <li className="text-xl p-3 hover:bg-slate-300 rounded-xl">
            <a href="#">article</a>
          </li>
        </ul>
        <form role="search">
          <div>
            <input
              type="search"
              id="mySearch"
              className="h-9 mr-3 p-4 border-cyan-600 border-2 rounded-lg "
              placeholder="Search the site…"
              aria-label="Search through site content"
            />
            <button className="h-9 w-20 mr-7 bg-cyan-500 rounded-lg">Search</button>
          </div>
        </form>
      </nav>
      <hr />
    </div>
  );
}

export default Nav;
