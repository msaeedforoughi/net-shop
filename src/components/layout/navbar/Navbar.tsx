import { Link } from "react-router-dom";
import Container from "../../layoutComponents/container/Container";
import Button from "../../layoutComponents/button/Button";
import { useShoppingCartContext } from "../../../contexts/ShoppingCartContext";
import { useLoginContext } from "../../../contexts/LoginContext";
import { RiLogoutBoxLine, RiLoginBoxLine } from "react-icons/ri";
import { BsBasket3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { navigationLinks } from "../../../constants/navigationLinks";

function Navbar() {
  const { cartQty } = useShoppingCartContext();
  const { handleLogout, isLogin } = useLoginContext();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center shadow w-full h-14 bg-slate-900 text-gray-300">
      <Container>
        <div className="md:flex flex-row-reverse items-center justify-between">
          <div
            onClick={() => setOpen(!open)}
            className="absolute md:hidden left-8 top-4 cursor-pointer "
          >
            {open ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
          </div>

          <ul
            className={`flex md:flex-row-reverse flex-col items-center md:justify-start justify-center absolute md:static md:z-auto z-[3000] left-0 md:w-full w-full bg-slate-900 ${
              open
                ? "top-12 border-t-2 md:border-t-0  border-gray-600 mt-1.5"
                : "top-[-490px]"
            } `}
          >
            {navigationLinks.map((link, index) => (
              <li
                key={index}
                className="ml-4 my-1 md:mt-4 mt-2 mb-4  over:text-blue-500 hover:underline active:text-slate-600"
              >
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-center items-center">
            <Button onClick={handleLogout}>
              {isLogin ? (
                <RiLogoutBoxLine size={24} />
              ) : (
                <RiLoginBoxLine size={24} />
              )}
            </Button>

            {isLogin ? (
              <Link className="relative" to="/cart">
                <button className="mt-1">
                  <BsBasket3 size={23} />{" "}
                </button>

                {cartQty !== 0 ? (
                  <span
                    className="absolute w-5 h-5 bg-red-400 flex justify-center 
                            items-center rounded-full text-white -top-1 -right-3"
                  >
                    {cartQty}
                  </span>
                ) : (
                  ""
                )}
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
