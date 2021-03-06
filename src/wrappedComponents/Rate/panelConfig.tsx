import { PanelConfig } from "@/page/App/components/InspectPanel/interface"
import { HorizontalEnd, HorizontalStart } from "@/wrappedComponents/svg"
import { HeartIcon, StarIcon } from "@illa-design/icon"
import { globalColor, illaPrefix } from "@illa-design/theme"
import i18n from "@/i18n/config"

const OptionsStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

export const RATE_PANEL_CONFIG: PanelConfig[] = [
  {
    id: "rate-basic",
    groupName: i18n.t("editor.inspect.setter_group.basic"),
    children: [
      {
        id: "rate-basic-DefaultValue",
        labelName: i18n.t("editor.inspect.setter_label.default_value"),
        attrName: "defaultValue",
        setterType: "INPUT_SETTER",
      },
      {
        id: "rate-basic-icon",
        labelName: i18n.t("editor.inspect.setter_label.icon"),
        attrName: "heart",
        setterType: "RADIO_GROUP_SETTER",
        options: [
          {
            label: (
              <HeartIcon
                css={{ color: globalColor(`--${illaPrefix}-red-03`) }}
              />
            ),
            value: true,
          },
          {
            label: (
              <StarIcon
                css={{ color: globalColor(`--${illaPrefix}-yellow-04`) }}
              />
            ),
            value: false,
          },
        ],
      },
      {
        id: "rate-basic-max-rate",
        labelName: i18n.t("editor.inspect.setter_label.max_count"),
        attrName: "maxCount",
        setterType: "INPUT_SETTER",
      },
      {
        id: "rate-basic-allow-half",
        labelName: i18n.t("editor.inspect.setter_label.allow_half"),
        attrName: "allowHalf",
        setterType: "SWITCH_SETTER",
      },
      {
        id: "rate-basic-allow-clear",
        labelName: i18n.t("editor.inspect.setter_label.allow_clear"),
        attrName: "allowClear",
        setterType: "SWITCH_SETTER",
      },
    ],
  },
  {
    id: "rate-label",
    groupName: "LABEL",
    children: [
      {
        id: "rate-label-label",
        labelName: i18n.t("editor.inspect.setter_label.label"),
        attrName: "label",
        setterType: "INPUT_SETTER",
      },
      {
        id: "rate-label-caption",
        labelName: i18n.t("editor.inspect.setter_label.caption"),
        attrName: "labelCaption",
        setterType: "INPUT_SETTER",
      },
      {
        id: "rate-label-position",
        labelName: i18n.t("editor.inspect.setter_label.label_position"),
        attrName: "labelPosition",
        setterType: "RADIO_GROUP_SETTER",
        options: [
          { label: "Left", value: "left" },
          { label: "Top", value: "top" },
        ],
      },
      {
        id: "rate-label-alignment",
        labelName: i18n.t("editor.inspect.setter_label.label_alignment"),
        attrName: "labelAlign",
        setterType: "RADIO_GROUP_SETTER",
        options: [
          {
            label: (
              <div style={OptionsStyle}>
                <HorizontalStart />
              </div>
            ),
            value: "left",
          },
          {
            label: (
              <div style={OptionsStyle}>
                <HorizontalEnd />
              </div>
            ),
            value: "right",
          },
        ],
      },
      {
        id: "select-label-labelWidth",
        labelName: i18n.t("editor.inspect.setter_label.label_width"),
        attrName: "labelWidth",
        setterType: "INPUT_SETTER",
      },
    ],
  },
  {
    id: "rate-interaction",
    groupName: i18n.t("editor.inspect.setter_group.interaction"),
    children: [
      // eventHandle @aoao
      {
        id: "rate-interaction-disabled",
        labelName: i18n.t("editor.inspect.setter_label.disabled"),
        labelDesc: "xxxxx",
        attrName: "disabled",
        setterType: "INPUT_SETTER",
      },
      {
        id: "rate-interaction-readonly",
        labelName: i18n.t("editor.inspect.setter_label.read_only"),
        labelDesc: "xxxxx",
        attrName: "readonly",
        setterType: "INPUT_SETTER",
      },
    ],
  },
  {
    id: "rate-adornments",
    groupName: i18n.t("editor.inspect.setter_group.adornments"),
    children: [
      {
        id: "rate-adornments-tooltip",
        labelName: i18n.t("editor.inspect.setter_label.tooltip"),
        attrName: "tooltipText",
        setterType: "INPUT_SETTER",
      },
    ],
  },
  {
    id: "rate-validation",
    groupName: i18n.t("editor.inspect.setter_group.validation"),
    children: [
      {
        id: "rate-validation-required",
        labelName: i18n.t("editor.inspect.setter_label.required_field"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLabel: true,
        attrName: "required",
      },
      {
        id: "rate-validation-custom",
        labelName: i18n.t("editor.inspect.setter_label.custom_rule"),
        setterType: "INPUT_SETTER",
        attrName: "customRule",
      },
      {
        id: "rate-validation-hide-message",
        labelName: i18n.t(
          "editor.inspect.setter_label.hide_validation_message",
        ),
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLabel: true,
        attrName: "hideValidationMessage",
      },
    ],
  },
  {
    id: "rate-layout",
    groupName: i18n.t("editor.inspect.setter_group.layout"),
    children: [
      {
        id: "rate-layout-hidden",
        setterType: "INPUT_SETTER",
        labelName: i18n.t("editor.inspect.setter_label.hidden"),
        attrName: "hidden",
      },
    ],
  },
]
