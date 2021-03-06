import { FC } from "react"
import { useTranslation } from "react-i18next"
import {
  MysqlIcon,
  PostgresIcon,
  RestApiIcon,
  RedisIcon,
} from "@/page/App/components/ActionEditor/assets/icons"
import {
  ResourceFormSelectorProps,
  DatabaseItemProps,
  ApiItemProps,
} from "./interface"
import {
  categoryStyle,
  categoryTitleStyle,
  applyResourceListStyle,
  resourceItemStyle,
  resourceNameStyle,
  selectLayoutStyle,
} from "./style"

export const ResourceFormSelector: FC<ResourceFormSelectorProps> = (props) => {
  const { onSelect } = props
  const { t } = useTranslation()

  const databaseList: DatabaseItemProps[] = [
    {
      title: t("editor.action.resource.mySql.name"),
      img: <MysqlIcon />,
      type: "mysql",
    },
    {
      title: t("editor.action.resource.postgres.name"),
      img: <PostgresIcon />,
      draft: true,
      type: "postgres",
    },
    {
      title: t("editor.action.resource.redis.name"),
      img: <RedisIcon />,
      draft: true,
      type: "redis",
    },
  ]
  const apiList: ApiItemProps[] = [
    {
      title: t("editor.action.resource.rest_api.name"),
      img: <RestApiIcon />,
      type: "restapi",
    },
  ]

  return (
    <div css={selectLayoutStyle}>
      <div css={categoryTitleStyle}>Select Resource Type</div>
      <div>
        <div css={categoryStyle}>{t("editor.action.form.title.database")}</div>
        <div css={applyResourceListStyle()}>
          {databaseList.map((database) => (
            <div
              key={database.title}
              css={resourceItemStyle}
              onClick={() => {
                !database.draft && onSelect(database.type)
              }}
            >
              <div>{database.img}</div>
              <div css={resourceNameStyle}>{database.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div css={categoryStyle}>{t("editor.action.form.title.api")}</div>
        <div css={applyResourceListStyle(true)}>
          {apiList.map((api) => (
            <div
              key={api.title}
              css={resourceItemStyle}
              onClick={() => {
                !api.draft && onSelect(api.type)
              }}
            >
              <div>{api.img}</div>
              <div css={resourceNameStyle}>{api.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

ResourceFormSelector.displayName = "ResourceFormSelector"
