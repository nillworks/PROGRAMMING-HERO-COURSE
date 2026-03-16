const Nav = () => {
  return (
    <frames>
      <div className="containers flex items-center justify-between">
        {/* logo  */}
        <div>
          <h2 className="text-lg font-medium">SR</h2>
        </div>

        {/* Navigation Menu */}
        <div>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Footer</a>
            </li>
          </ul>
        </div>

        {/* Login Button */}
        <div>
          <button className="btn btn-soft btn-primary">Login</button>
        </div>
      </div>
    </frames>
  );
};

export default Nav;
