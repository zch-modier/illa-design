import { FC } from "react"
import { ReactComponent as Logo } from "@assets/illa-logo.svg"
import { useNavigate, useLocation, Outlet } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { TabPane, Tabs } from "@illa-design/tabs"
import { PreIcon } from "@illa-design/icon"
import {
  navBarStyle,
  navBarLogoStyle,
  navBarTabStyle,
  tabPrefixStyle,
  preIconStyle,
  tabPreTextStyle,
} from "./style"

export const Setting: FC = () => {
  let navigate = useNavigate()
  const { t } = useTranslation()
  let location = useLocation()
  let pathList = location.pathname.split("/")

  const tabs: {
    key: string
    title: string
  }[] = [
    {
      key: "account",
      title: t("ACCOUNT"),
    },
    {
      key: "password",
      title: t("PASSWORD"),
    },
    {
      key: "others",
      title: t("SETTING"),
    },
  ]

  return (
    <>
      <div css={navBarStyle}>
        <Logo
          css={navBarLogoStyle}
          onClick={() => {
            navigate("/")
          }}
        />
        <span css={navBarTabStyle} onClick={() => navigate("/dashboard/apps")}>
          Apps
        </span>
        <span
          css={navBarTabStyle}
          onClick={() => navigate("/dashboard/resources")}
        >
          Resources
        </span>
      </div>
      <Tabs
        prefix={
          <div
            key="prefix"
            css={tabPrefixStyle}
            onClick={() => {
              navigate("/dashboard")
            }}
          >
            <PreIcon css={preIconStyle} />
            <span css={tabPreTextStyle}>back</span>
          </div>
        }
        activeKey={pathList[pathList.length - 1]}
        withoutContent
        colorScheme="grayBlue"
        size="large"
        onChange={(key) => {
          switch (key) {
            case "account":
              navigate("./account")
              break
            case "password":
              navigate("./password")
              break
            case "others":
              navigate("./others")
              break
          }
        }}
      >
        {tabs.map((item) => {
          return <TabPane title={item.title} key={item.key} />
        })}
      </Tabs>
      <Outlet />
    </>
  )
}

Setting.displayName = "Setting"
