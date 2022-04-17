import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Navbar.css";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth)
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
    <div className="container">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link to="/" className="logo">NIX-Photography</Link>
        <form className="navbar-nav ms-auto">
        <Link to="/" className="menubar">Home</Link>
        <Link to="/packages" className="menubar">Packages</Link>
        <Link to="/blogs" className="menubar">Blogs</Link>
        <Link to="/about" className="menubar">About</Link>
        {
          user ? <Link to="/" className="menubar" onClick={handleSignOut}>SignOut</Link>
          :
          <Link to="/login" className="menubar">Login</Link>
        }
        </form>
      </div>
    </div>
  </nav>
    </div>
  );
};

export default Navbar;
