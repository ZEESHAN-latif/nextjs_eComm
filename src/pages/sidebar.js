import Image from "next/image";
import React from "react";
import style from "../styles/sidebar.module.scss";
import logoImage from "../pages/assets/images/logo.png";
import { useMenusList } from "@/utils/useMenue";
import Link from "next/link";

export default function Sidebar() {
  const menusList = useMenusList();

  const menuList = menusList ?? [];
  return (
    <div className={style.mainWrapper}>
      <div className={style.logoWrraper}>
        <Image src={logoImage} alt="My Image" width={130} height={130} />
      </div>
      <div className={style.sideMenuWrapper}>
        {menuList?.map((item) => {
          const element = item?.menu.map((menueItem, key) => {
            return (
              <Link key={key} href={menueItem.link}  passHref legacyBehavior>
                <a className={style.menueItems}>{menueItem.name}</a>
              </Link>
            );
          });
          return <>{element}
          </>;
        })}
      </div>
      <a className={style.logoutItem}>Logout</a>
    </div>
  );
}
