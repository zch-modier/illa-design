import { HorizontalEnd, HorizontalStart } from "@/wrappedComponents/svg"
import { colorSchemeOptions } from "@/wrappedComponents/colorSchemeOptions"
import { PanelConfig } from "@/page/App/components/InspectPanel/interface"
import i18n from "@/i18n/config"

const OptionsStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

export const DATE_TIME_PANEL_CONFIG: PanelConfig[] = [
  {
    id: "date_time-basic",
    groupName: i18n.t("editor.inspect.setter_group.basic"),
    children: [
      {
        id: "date_time-basic-DefaultValue",
        labelName: i18n.t("editor.inspect.setter_label.default_value"),
        attrName: "value",
        setterType: "INPUT_SETTER",
      },
      {
        id: "date_time-basic-date-format",
        labelName: i18n.t("editor.inspect.setter_label.format"),
        attrName: "dateFormat",
        setterType: "INPUT_SETTER",
      },
      {
        id: "date_time-basic-placeholder",
        labelName: i18n.t("editor.inspect.setter_label.placeholder"),
        attrName: "placeholder",
        isFullWidth: true,
        setterType: "INPUT_SETTER",
      },
      {
        id: "date_time-basic-max-date",
        labelName: i18n.t("editor.inspect.setter_label.max_date"),
        attrName: "maxDate",
        setterType: "INPUT_SETTER",
      },
      {
        id: "date_time-basic-min-date",
        labelName: i18n.t("editor.inspect.setter_label.min_date"),
        attrName: "minDate",
        setterType: "INPUT_SETTER",
      },
      {
        id: "date_time-basic-time-format",
        labelName: i18n.t("editor.inspect.setter_label.time_format"),
        attrName: "timeFormat",
        setterType: "INPUT_SETTER",
      },
      {
        id: "date_time-basic-minute-step",
        labelName: i18n.t("editor.inspect.setter_label.step_size"),
        attrName: "minuteStep",
        setterType: "INPUT_SETTER",
      },
    ],
  },
  {
    id: "date_time-label",
    groupName: i18n.t("editor.inspect.setter_group.label"),
    children: [
      {
        id: "date_time-label-label",
        labelName: i18n.t("editor.inspect.setter_label.label"),
        attrName: "label",
        setterType: "INPUT_SETTER",
      },
      {
        id: "date_time-label-caption",
        labelName: i18n.t("editor.inspect.setter_label.caption"),
        attrName: "labelCaption",
        setterType: "INPUT_SETTER",
      },
      {
        id: "date_time-label-position",
        labelName: i18n.t("editor.inspect.setter_label.label_position"),
        attrName: "labelPosition",
        setterType: "RADIO_GROUP_SETTER",
        options: [
          { label: "Left", value: "left" },
          { label: "Top", value: "top" },
        ],
      },
      {
        id: "date_time-label-alignment",
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
    id: "date_time-interaction",
    groupName: i18n.t("editor.inspect.setter_group.interaction"),
    children: [
      // eventHandle @aoao
      {
        id: "date_time-interaction-loading",
        labelName: i18n.t("editor.inspect.setter_label.loading"),
        labelDesc: "xxxxx",
        attrName: "loading",
        setterType: "INPUT_SETTER",
      },
      {
        id: "date_time-interaction-disabled",
        labelName: i18n.t("editor.inspect.setter_label.disabled"),
        labelDesc: "xxxxx",
        attrName: "disabled",
        setterType: "INPUT_SETTER",
      },
      {
        id: "date_time-interaction-readonly",
        labelName: i18n.t("editor.inspect.setter_label.read_only"),
        labelDesc: "xxxxx",
        attrName: "readonly",
        setterType: "INPUT_SETTER",
      },
    ],
  },
  {
    id: "date_time-adornments",
    groupName: i18n.t("editor.inspect.setter_group.adornments"),
    children: [
      {
        id: "date_time-adornments-showClear",
        labelName: i18n.t("editor.inspect.setter_label.show_clear_button"),
        attrName: "showClear",
        useCustomLabel: true,
        setterType: "DYNAMIC_SWITCH_SETTER",
      },
      {
        id: "date_time-adornments-tooltip",
        labelName: i18n.t("editor.inspect.setter_label.tooltip"),
        attrName: "tooltipText",
        setterType: "INPUT_SETTER",
      },
    ],
  },
  {
    id: "date-time-validation",
    groupName: i18n.t("editor.inspect.setter_group.validation"),
    children: [
      {
        id: "date-time-validation-required",
        labelName: i18n.t("editor.inspect.setter_label.required_field"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLabel: true,
        attrName: "required",
      },
      {
        id: "date-time-validation-custom",
        labelName: i18n.t("editor.inspect.setter_label.custom_rule"),
        setterType: "INPUT_SETTER",
        attrName: "customRule",
      },
      {
        id: "date-time-validation-hide-message",
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
    id: "date_time-layout",
    groupName: i18n.t("editor.inspect.setter_group.layout"),
    children: [
      {
        id: "date_time-layout-hidden",
        setterType: "INPUT_SETTER",
        labelName: i18n.t("editor.inspect.setter_label.hidden"),
        attrName: "hidden",
      },
    ],
  },
  {
    id: "date_time-style",
    groupName: i18n.t("editor.inspect.setter_group.style"),
    children: [
      {
        id: "date_time-style-list",
        setterType: "LIST_SETTER",
        isFullWidth: true,
        labelName: i18n.t("editor.inspect.setter_label.color"),
        attrName: "color",
        useCustomLabel: true,
        childrenSetter: [
          {
            id: "date_time-style-bg",
            labelName: i18n.t("editor.inspect.setter_label.theme_color"),
            setterType: "COLOR_SELECT_SETTER",
            attrName: "colorScheme",
            defaultValue: "blue",
            options: colorSchemeOptions,
          },
        ],
      },
    ],
  },
]
