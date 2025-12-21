import { Outlet } from "@tanstack/react-router";
import { MainContainerStyled } from "./styles";

export function Main() {
  return (
    <MainContainerStyled>
        <Outlet />
    </MainContainerStyled>
  )
}