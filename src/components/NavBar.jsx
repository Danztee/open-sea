import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Button from "./UI/Button";

const links = [
  {
    id: 1,
    to: "#",
    name: "About us",
  },

  {
    id: 2,
    to: "#",
    name: "products",
  },

  {
    id: 3,
    to: "#",
    name: "FAQs",
  },

  {
    id: 4,
    to: "#",
    name: "Contact",
  },
];

const NavBar = () => {
  return (
    <Wrapper className="navbar navbar-expand-lg">
      <div className="container">
        <Link to="#" className="navbar-brand">
          <img src={logo} alt="logo" />
          <span>Open sea</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex w-50" role="search">
            <div
              className="input-search d-flex"
              style={{ alignItems: "center" }}
            >
              <input type="text" placeholder="Search" />
              <div className="icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>
          </form>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-ul">
            {links.map((link) => {
              const { id, to, name } = link;
              return (
                <li className="nav-item" key={id}>
                  <Link to={to} className="nav-link">
                    {name}
                  </Link>
                </li>
              );
            })}
            <li>
              <Button title="Buy now" />
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.nav`
  .navbar-brand {
    margin-right: 5rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .input-search {
    position: relative;

    input {
      outline: none;
      padding: 0 0.5rem;
      padding-right: 1.8rem;

      border-color: #fff;
      border-width: 1px;
      border-radius: 13px;

      width: 16rem;
      height: 2.3rem;

      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 100%
      );
      box-shadow: 0px 4px 24px -1px rgba(184, 66, 208, 0.25);
      backdrop-filter: blur(25px);

      &::placeholder {
        color: #f1d8f3 !important;
        font-size: 18px;
      }
    }

    .icon-container {
      position: absolute;
      margin-left: 14.4rem;

      svg {
        cursor: pointer;
      }
    }
  }

  .nav-ul {
    width: 100%;
    justify-content: space-between;
  }

  .nav-link:hover {
    background: #f1d8f3;
    color: #49184e !important;
  }
`;
