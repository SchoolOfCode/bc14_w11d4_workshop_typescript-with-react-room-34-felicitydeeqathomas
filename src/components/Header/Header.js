import logo from "../../soc-logo.svg";

export function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <h1>Todo List</h1>
    </header>
  );
}
