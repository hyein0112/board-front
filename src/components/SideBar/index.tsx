import * as S from "./style";
import * as I from "../../assets";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <S.SideBar>
      <Link to={"/"}>
        <S.SideButton>
          {window.location.pathname === "/" ? (
            <>
              <I.ActiveHome />
              <S.ButtonTitle style={{ color: "#495464" }}>Home</S.ButtonTitle>
            </>
          ) : (
            <>
              <I.Home />
              <S.ButtonTitle>Home</S.ButtonTitle>
            </>
          )}
        </S.SideButton>
      </Link>

      <Link to={"/my"}>
        <S.SideButton>
          {window.location.pathname === "/my" ? (
            <>
              <I.ActiveProfile />
              <S.ButtonTitle style={{ color: "#495464" }}>
                Profile
              </S.ButtonTitle>
            </>
          ) : (
            <>
              <I.Profile />
              <S.ButtonTitle>Profile</S.ButtonTitle>
            </>
          )}
        </S.SideButton>
      </Link>

      <Link to={"/signin"}>
        <S.SideButton>
          <I.Logout />
          <S.ButtonTitle>Logout</S.ButtonTitle>
        </S.SideButton>
      </Link>
    </S.SideBar>
  );
};

export default SideBar;
