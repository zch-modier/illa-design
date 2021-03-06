import { PanelConfig } from "@/page/App/components/InspectPanel/interface"
import i18n from "@/i18n/config"

export const IMAGE_PANEL_CONFIG: PanelConfig[] = [
  {
    id: "image-basic",
    groupName: i18n.t("editor.inspect.setter_group.basic"),
    children: [
      {
        id: "image-basic-source",
        labelName: i18n.t("editor.inspect.setter_label.image_source"),
        attrName: "src",
        setterType: "INPUT_SETTER",
        defaultValue: "https://placekitten.com/400/300",
      },
      {
        id: "image-basic-alt-text",
        labelName: i18n.t("editor.inspect.setter_label.alt_text"),
        labelDesc: i18n.t("editor.inspect.setter_label.alt_text_desc"),
        attrName: "altText",
        setterType: "INPUT_SETTER",
      },
    ],
  },
  // {
  //   id: "image-Interaction",
  //   groupName: "Interaction",
  //   children: [
  //     {
  //       id: "image-interaction-event",
  //       attrName: "events",
  //       setterType: "EVENT_HANDLER_SETTER",
  //       useCustomLabel: true,
  //       isFullWidth: true,
  //     },
  //   ],
  // },
  {
    id: "image-adornments",
    groupName: i18n.t("editor.inspect.setter_group.adornments"),
    children: [
      {
        id: "image-adornments-tooltip",
        labelName: i18n.t("editor.inspect.setter_label.tooltip"),
        attrName: "tooltipText",
        setterType: "INPUT_SETTER",
      },
    ],
  },
  {
    id: "image-layout",
    groupName: i18n.t("editor.inspect.setter_group.layout"),
    children: [
      {
        id: "image-layout-height",
        labelName: i18n.t("editor.inspect.setter_label.img_height"),
        attrName: "height",
        setterType: "INPUT_SETTER",
      },
      {
        id: "image-layout-width",
        labelName: i18n.t("editor.inspect.setter_label.img_width"),
        attrName: "width",
        setterType: "INPUT_SETTER",
      },
      {
        id: "image-layout-hidden",
        labelName: i18n.t("editor.inspect.setter_label.hidden"),
        attrName: "hidden",
        setterType: "INPUT_SETTER",
      },
    ],
  },
  {
    id: "image-style",
    groupName: i18n.t("editor.inspect.setter_group.style"),
    children: [
      {
        id: "image-style-radius",
        labelName: i18n.t("editor.inspect.setter_label.radius"),
        attrName: "radius",
        setterType: "INPUT_SETTER",
      },
    ],
  },
]
