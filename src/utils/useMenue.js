import { SidebarRoutes } from "@/pages/constant/sidebarLink";
import { useEffect, useState } from "react";

export const useMenusList = () => {
  const [menuItems, setmenuItems] = useState(null);

  useEffect(() => {
    //   const MenuIcon = greyThemeIcons;

    setmenuItems([
      {
        menu: [
          {
            name: "Term Conditions",
            //   icon: MenuIcon.dashboard,
            link: SidebarRoutes.termAndCondition,
          },
          {
            name: "Abot Company",
            //   icon: MenuIcon.dashboard,
            link: SidebarRoutes.aboutCompany,
          },
          {
            name: "Our Services",
            link: SidebarRoutes.ourServices
          },
          {
            name: "Company Partners",
            link: SidebarRoutes.companyPartners
          },
          {
            name: "Customers Sport",
            link: SidebarRoutes.customersport
          },
          
        ],
      },
    ]);
  }, []);
  return menuItems;
};
