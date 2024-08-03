import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/login");
  };
  const [isOpen, setIsOpen] = useState(false);
  // change the language
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handelLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <div className="navbar py-5">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <svg
            width="50.23555490448547"
            height="184.5200042724609"
            viewBox="0 0 350 356.3428904962784"
            class="looka-1j8o68f"
          >
            <defs id="SvgjsDefs1013"></defs>
            <g
              id="SvgjsG1014"
              featurekey="mugSzh-0"
              transform="matrix(2.3333333333333335,0,0,2.3333333333333335,58.33333333333333,-2.3333333333333335)"
              fill="#4793e6"
            >
              <circle
                xmlns="http://www.w3.org/2000/svg"
                cx="64"
                cy="30"
                r="4"
              ></circle>
              <circle
                xmlns="http://www.w3.org/2000/svg"
                cx="36"
                cy="30"
                r="4"
              ></circle>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M55,64c0-3.3,2.7-6,6-6v10c0,10.5,8.5,19,19,19V10c0,0-10-9-30.1-9C29.9,1,20,10,20,10v47c0,23.2,18.8,42,42,42h18v-6  c-13.8,0-25-11.2-25-25V64z M49.9,51C35.1,51,26,43,26,38V14c23,0,23,25,24,28c1-3,1-28,24-28v24C74,42.1,64.8,51,49.9,51z"
              ></path>
            </g>
            <g
              id="SvgjsG1015"
              featurekey="PPkF4s-0"
              transform="matrix(4.119585361836759,0,0,4.119585361836759,-5.685027779691013,229.96751609976332)"
              fill="#ffffff"
            >
              <path d="M1.38 20 l0 -15.12 l2.96 0 l0 5.26 q0.46 -0.6 1.33 -0.99 t2.01 -0.39 q1.7 0 2.95 0.76 t1.91 2.07 t0.66 2.91 t-0.66 2.91 t-1.91 2.07 t-2.95 0.76 q-1.1 0 -2.03 -0.41 t-1.31 -0.93 l0 1.1 l-2.96 0 z M5.03 16.77 q0.81 0.83 2.21 0.83 q1.36 0 2.19 -0.88 t0.83 -2.22 q0 -1.38 -0.81 -2.25 t-2.21 -0.87 q-1.38 0 -2.2 0.87 t-0.82 2.25 q0 1.44 0.81 2.27 z M18.09 19.49 q-1.37 -0.77 -2.17 -2.09 t-0.8 -2.88 q0 -1.54 0.8 -2.86 t2.17 -2.09 t2.99 -0.77 t3 0.77 t2.19 2.09 t0.81 2.86 q0 1.56 -0.81 2.88 t-2.19 2.09 t-3 0.77 t-2.99 -0.77 z M19.56 11.83 q-0.7 0.41 -1.1 1.12 t-0.4 1.57 q0 0.9 0.39 1.61 t1.08 1.12 t1.55 0.41 q0.84 0 1.53 -0.41 t1.09 -1.13 t0.4 -1.6 q0 -0.86 -0.4 -1.57 t-1.09 -1.12 t-1.53 -0.41 q-0.82 0 -1.52 0.41 z M31.97 19.49 q-1.37 -0.77 -2.17 -2.09 t-0.8 -2.88 q0 -1.54 0.8 -2.86 t2.17 -2.09 t2.99 -0.77 t3 0.77 t2.19 2.09 t0.81 2.86 q0 1.56 -0.81 2.88 t-2.19 2.09 t-3 0.77 t-2.99 -0.77 z M33.44 11.83 q-0.7 0.41 -1.1 1.12 t-0.4 1.57 q0 0.9 0.39 1.61 t1.08 1.12 t1.55 0.41 q0.84 0 1.53 -0.41 t1.09 -1.13 t0.4 -1.6 q0 -0.86 -0.4 -1.57 t-1.09 -1.12 t-1.53 -0.41 q-0.82 0 -1.52 0.41 z M46.42 4.880000000000001 l0 8.8 l3.74 -4.62 l3.66 0 l-4.42 5.12 l4.6 5.82 l-3.62 0 l-2.88 -3.6 l-1.08 1.24 l0 2.36 l-3 0 l0 -15.12 l3 0 z M58.580000000000005 7.369999999999999 q-0.48 0.47 -1.16 0.47 q-0.7 0 -1.19 -0.47 t-0.49 -1.15 q0 -0.66 0.49 -1.13 t1.19 -0.47 q0.68 0 1.16 0.47 t0.48 1.13 q0 0.68 -0.48 1.15 z M55.92000000000001 9.02 l3 0 l0 10.98 l-3 0 l0 -10.98 z M71.09 10.02 q1.03 1.22 1.03 3.48 l0 6.5 l-3.06 0 l0 -6.5 q0 -2.22 -2.12 -2.22 q-0.82 0 -1.48 0.65 t-0.62 2.25 l0 5.82 l-2.98 0 l0 -11 l2.98 0 l0 0.98 q0.54 -0.54 1.36 -0.86 t1.58 -0.32 q2.28 0 3.31 1.22 z M84.87 22.77 q-1.47 1.37 -4.09 1.37 q-3.14 0 -5.26 -1.66 l1.46 -2.12 q0.68 0.54 1.61 0.88 t1.97 0.34 q2.82 0 2.82 -2.56 l0 -0.18 q-1.2 0.98 -3.08 0.98 q-1.74 0 -3.06 -0.73 t-2.02 -1.99 t-0.7 -2.78 q0 -1.54 0.7 -2.79 t2.01 -1.99 t3.07 -0.74 q1.88 0 3.08 0.98 l0 -0.78 l2.96 0 l0 10.02 q0 2.38 -1.47 3.75 z M82.01 16.91 q0.69 -0.39 1.09 -1.08 t0.4 -1.51 q0 -0.84 -0.4 -1.52 t-1.09 -1.07 t-1.53 -0.39 q-1.36 0 -2.19 0.85 t-0.83 2.13 q0 1.32 0.81 2.15 t2.21 0.83 q0.84 0 1.53 -0.39 z"></path>
            </g>
            <g
              id="SvgjsG1016"
              featurekey="uwAHB0-0"
              transform="matrix(1.1655011388516112,0,0,1.1655011388516112,33.764568859507804,332.61328659789416)"
              fill="#39e991"
            >
              <path d="M5.98 5.48 q2.46 0 3.86 1.78 l-1.14 0.82 q-1.04 -1.4 -2.76 -1.4 q-1.4 0 -2.27 0.72 t-0.91 1.96 q0 1.08 0.66 1.75 t2.3 1.13 q2.16 0.64 2.88 1.13 t1.09 1.21 t0.37 1.8 q0 1.72 -1.23 2.83 t-3.17 1.15 q-3.06 0 -4.6 -2.14 l1.26 -0.84 q1.06 1.76 3.24 1.78 q1.42 0 2.3 -0.79 t0.88 -1.99 q0 -0.7 -0.25 -1.15 t-0.76 -0.78 t-1.3 -0.6 t-1.85 -0.63 q-1.6 -0.52 -2.37 -1.46 t-0.77 -2.4 q0 -1.72 1.29 -2.8 t3.25 -1.08 z M25.048000000000002 5.84 l0 12.96 l6.6 0 l0 1.2 l-7.92 0 l0 -14.16 l1.32 0 z M44.79600000000001 12.92 q0 2.7 1.66 4.45 t4.34 1.79 q2.7 0 4.34 -1.77 t1.66 -4.47 q0 -2.74 -1.64 -4.47 t-4.38 -1.77 q-2.68 0 -4.32 1.76 t-1.66 4.48 z M50.79600000000001 5.48 q2.16 0 3.82 0.95 t2.57 2.66 t0.93 3.83 q0 3.26 -2.06 5.33 t-5.26 2.11 q-3.22 0 -5.24 -2.09 t-2.08 -5.35 q0.02 -3.26 2.04 -5.32 t5.28 -2.12 z M78.144 5.48 q3.2 -0.02 5.1 1.96 l-0.96 1 q-0.6 -0.74 -1.77 -1.25 t-2.37 -0.51 q-2.66 0 -4.32 1.76 t-1.68 4.48 q0 2.7 1.64 4.44 t4.38 1.8 q2.6 0 3.94 -0.84 l0 -4.76 l-3.4 0 l0 -1.2 l4.72 0 l0 6.72 q-2.3 1.28 -5.28 1.28 q-3.2 0 -5.23 -2.09 t-2.09 -5.35 q0.02 -3.28 2.06 -5.34 t5.26 -2.1 z M99.632 15.04 l6.5 0 l-3.2 -7.76 z M103.67200000000001 5.84 l5.96 14.16 l-1.48 0 l-1.54 -3.76 l-7.5 0 l-1.6 3.76 l-1.38 0 l6.18 -14.16 l1.36 0 z M124.04 5.84 l8.62 12.4 l0.04 0 l0 -12.4 l1.32 0 l0 14.16 l-1.7 0 l-8.62 -12.4 l-0.04 0 l0 12.4 l-1.32 0 l0 -14.16 l1.7 0 z M173.73600000000002 5.84 l0 1.2 l-4.84 0 l0 12.96 l-1.32 0 l0 -12.96 l-4.84 0 l0 -1.2 l11 0 z M195.244 5.84 l0 1.2 l-7.34 0 l0 5.04 l6.88 0 l0 1.2 l-6.88 0 l0 5.52 l7.66 0 l0 1.2 l-8.98 0 l0 -14.16 l8.66 0 z M209.232 5.84 l4.08 5.76 l4.02 -5.76 l1.58 0 l-4.8 6.72 l5.26 7.44 l-1.64 0 l-4.48 -6.4 l-4.48 6.4 l-1.58 0 l5.32 -7.44 l-4.84 -6.72 l1.56 0 z M241.3 5.84 l0 1.2 l-4.84 0 l0 12.96 l-1.32 0 l0 -12.96 l-4.84 0 l0 -1.2 l11 0 z"></path>
            </g>
          </svg>
        </Link>

        {user && localStorage.getItem("user") ? (
          <div className="User">
            <Link to="/login" className="UserName">
              {user.username}{" "}
            </Link>
            <div className="dropdown">
              <FontAwesomeIcon icon={faCaretDown} onClick={handleToggle} />

              {isOpen && (
                <div className="relative inline-block text-left">
                  <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                  >
                    <div className="py-1" role="none">
                      <form>
                        <button
                          type="submit"
                          className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-3"
                          onClick={handelLogout}
                        >
                          Sign out
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {user.img ? (
              <div>
                <img src={user.img} alt="img" className="userImg" />
              </div>
            ) : (
              <div>
                <img
                  src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1716887604~exp=1716888204~hmac=b33f9712f33583686e956a2ada575a0b396d32fb572aee7c9aec2d908deda92a"
                  alt="img"
                  className="userImg"
                />
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-row-reverse">
            {/* <Link to="/registre">
              <button className="ml-5 bg-white border-none py-1 px-2 text-black text-lg font-sans transition-transform duration-300 hover:scale-105 focus:outline-none rounded-[10px]">
                Register
              </button>
            </Link> */}
            <button
              className="md:font-small ml-5 bg-[#ebebeb] border-none py-1 px-2 text-black text-m font-sans transition-transform duration-300  hover:scale-105 focus:outline-none rounded-[10px]"
              onClick={handelClick}
            >
              Login/Signup
            </button>

            <div className="flex gap-1 flex-row-reverse">
              <form className="md:w-[70px] cursor-pointer">
                <label htmlFor="countries" className="sr-only">
                  {t("language")}
                </label>
                <select
                  id="countries"
                  className="cursor-pointer bg-gray-50 border border-transparent-300 text-gray-900 text-[12px] rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleLanguageChange}
                  defaultValue={i18n.language}
                >
                  <option value="en">{t("english")}</option>
                  <option value="fr">{t("french")}</option>
                  <option value="ar">{t("arabic")}</option>
                  <option value="de">{t("deutschland")}</option>
                  <option value="ru">{t("russie")}</option>
                  <option value="zh">{t("chinese")}</option>
                </select>
              </form>
              <form className="md:w-[70px] cursor-pointer">
                <select
                  id="countries"
                  className="cursor-pointer bg-gray-50 border border-transparent-300 text-gray-900 text-[13px] rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Euro</option>
                  <option value="US">DT</option>
                  <option value="CA">FR</option>
                  {/* <option value="FR">France</option>
            <option value="DE">Germany</option> */}
                </select>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
