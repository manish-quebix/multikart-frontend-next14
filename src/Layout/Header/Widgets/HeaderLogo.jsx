import SettingContext from "@/Context/SettingContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Btn from "@/Elements/Buttons/Btn";
import { ImagePath } from "@/Utils/Constants";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { RiAlignLeft } from "react-icons/ri";

const HeaderLogo = ({ extraClass }) => {
  const { settingData } = useContext(SettingContext);
  const { themeOption, mobileSideBar, setMobileSideBar } =
    useContext(ThemeOptionContext);
  const [logo, setLogo] = useState("");
  const path = useSearchParams();
  const theme = path.get("theme");

  useEffect(() => {
    let logo = themeOption?.logo?.header_logo;
    if (theme) {
      if (
        theme == "fashion_one" ||
        theme == "full_page" ||
        theme == "tools" ||
        theme == "game" ||
        theme == "left_sidebar" ||
        theme == "video"
      ) {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "fashion_two") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "fashion_three") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "yoga") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "watch") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "vegetables_one") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "fashion_four") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "fashion_five") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "jewellery_one") {
        logo = { original_url: `${ImagePath}/icon/logo/1-light.png` };
      } else if (theme == "fashion_six") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "fashion_seven") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (
        theme == "furniture_one" ||
        theme == "furniture_two" ||
        theme == "jewellery_two" ||
        theme == "jewellery_three"
      ) {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "furniture_dark") {
        logo = { original_url: `${ImagePath}/icon/logo/1-light.png` };
      } else if (theme == "electronics_one") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "electronics_two") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "electronics_three" || theme == "marketplace_three") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "marketplace_one") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "marketplace_two" || theme == "marketplace_four") {
        logo = { original_url: `${ImagePath}/icon/logo/1-light.png` };
      } else if (theme == "vegetables_two" || theme == "vegetables_three") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "vegetables_four") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "bag" || theme == "beauty") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "medical") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "perfume") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "marijuana") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "christmas") {
        logo = { original_url: `${ImagePath}/icon/logo/1-light.png` };
      } else if (theme == "bicycle") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "shoes") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "flower") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "kids") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "books") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "goggles") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "gym") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "video_slider") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "pets") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "nursery") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "gradient") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "parallax") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "digital_download") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "surfboard") {
        logo = { original_url: `${ImagePath}/icon/logo/1.png` };
      } else if (theme == "single_product") {
        logo = { original_url: `${ImagePath}/icon/logo/1-light.png` };
      }
    }
    setLogo(logo);
  }, [theme, themeOption?.logo?.header_logo]);
  return (
    <>
      <Link href="/" className={`${extraClass ? extraClass : ""}`}>
        {logo?.original_url ? (
          <Image
            className="img-fluid logo-img"
            src={logo?.original_url}
            height={34}
            width={200}
            // style={{ width: "250px" }}
            // style={{ width: window.innerWidth < 600 ? "180px" : "250px" }}
            alt={
              settingData?.general?.site_name
                ? settingData?.general?.site_name
                : "The Heavenly Gifts"
            }
          />
        ) : (
          settingData?.general?.site_name && (
            <h2 className="f-w-600 m-0">
              {settingData?.general?.site_name
                ? settingData?.general?.site_name.split(" ")[0]
                : "The Heavenly Gifts"}
            </h2>
          )
        )}
      </Link>
    </>
  );
};

export default HeaderLogo;
