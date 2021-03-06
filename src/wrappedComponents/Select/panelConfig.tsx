import { PanelConfig } from "@/page/App/components/InspectPanel/interface"
import { HorizontalStart, HorizontalEnd } from "@/wrappedComponents/svg"
import i18n from "@/i18n/config"

const OptionsStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

export const SELECT_PANEL_CONFIG: PanelConfig[] = [
  {
    id: "select-options",
    groupName: i18n.t("editor.inspect.setter_group.options"),
    children: [
      {
        id: "select-options-mode",
        isFullWidth: true,
        attrName: "optionMode",
        setterType: "RADIO_GROUP_SETTER",
        defaultValue: "manual",
        options: [
          {
            label: "Manual",
            value: "manual",
          },
          {
            label: "Mapped",
            value: "mapped",
          },
        ],
      },
      {
        id: "select-basic-options",
        useCustomLabel: true,
        attrName: "options",
        setterType: "OPTION_LIST_SETTER",
        bindAttrName: "optionMode",
        shown: (value) => !value || value === "manual",
      },
      {
        id: "select-option-data-sources",
        labelName: i18n.t("editor.inspect.setter_label.data_sources"),
        isFullWidth: true,
        attrName: "dataSources",
        setterType: "INPUT_SETTER",
        defaultValue: "[]",
        bindAttrName: "optionMode",
        shown: (value) => value === "mapped",
      },
      {
        id: "select-option-mapped",
        labelName: i18n.t("editor.inspect.setter_label.mapped_option"),
        useCustomLabel: true,
        isFullWidth: true,
        attrName: "mappedOption",
        setterType: "OPTION_MAPPED_SETTER",
        bindAttrName: "optionMode",
        shown: (value) => value === "mapped",
      },
      {
        id: "select-basic-defaultValue",
        labelName: i18n.t("editor.inspect.setter_label.default_value"),
        attrName: "value",
        setterType: "INPUT_SETTER",
      },
      {
        id: "select-basic-placeholder",
        labelName: i18n.t("editor.inspect.setter_label.placeholder"),
        attrName: "placeholder",
        setterType: "INPUT_SETTER",
      },
    ],
  },
  {
    id: "select-label",
    groupName: i18n.t("editor.inspect.setter_group.label"),
    children: [
      {
        id: "select-label-label",
        labelName: i18n.t("editor.inspect.setter_label.label"),
        attrName: "label",
        setterType: "INPUT_SETTER",
      },
      {
        id: "select-label-caption",
        labelName: i18n.t("editor.inspect.setter_label.caption"),
        attrName: "labelCaption",
        setterType: "INPUT_SETTER",
      },
      {
        id: "select-label-position",
        labelName: i18n.t("editor.inspect.setter_label.label_position"),
        attrName: "labelPosition",
        setterType: "RADIO_GROUP_SETTER",
        options: [
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
        ],
      },
      {
        id: "select-label-alignment",
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
    id: "select-validation",
    groupName: i18n.t("editor.inspect.setter_group.validation"),
    children: [
      {
        id: "select-validation-required",
        labelName: i18n.t("editor.inspect.setter_label.required_field"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLabel: true,
        attrName: "required",
      },
      {
        id: "select-validation-hide-message",
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
    id: "select-interaction",
    groupName: i18n.t("editor.inspect.setter_group.interaction"),
    children: [
      {
        id: "select-interaction-disabled",
        labelName: i18n.t("editor.inspect.setter_label.disabled"),
        attrName: "disabled",
        setterType: "INPUT_SETTER",
        placeholder: "false",
        defaultValue: false,
      },
      {
        id: "select-interaction-readonly",
        labelName: i18n.t("editor.inspect.setter_label.read_only"),
        attrName: "readOnly",
        setterType: "INPUT_SETTER",
        placeholder: "false",
        defaultValue: false,
      },
    ],
  },
  {
    id: "select-Adornments",
    groupName: i18n.t("editor.inspect.setter_group.adornments"),
    children: [
      {
        id: "select-adornments-showClear",
        labelName: i18n.t("editor.inspect.setter_label.show_clear_button"),
        attrName: "showClear",
        useCustomLabel: true,
        setterType: "DYNAMIC_SWITCH_SETTER",
      },
      {
        id: "select-adornments-prefixText",
        labelName: i18n.t("editor.inspect.setter_label.prefix_text"),
        attrName: "prefixText",
        setterType: "INPUT_SETTER",
      },
      {
        id: "select-adornments-suffixText",
        labelName: i18n.t("editor.inspect.setter_label.suffix_text"),
        attrName: "suffixText",
        setterType: "INPUT_SETTER",
      },
      {
        id: "select-adornments-tooltip",
        labelName: i18n.t("editor.inspect.setter_label.tooltip"),
        attrName: "tooltipText",
        setterType: "INPUT_SETTER",
      },
    ],
  },
  {
    id: "select-layout",
    groupName: i18n.t("editor.inspect.setter_group.layout"),
    children: [
      {
        id: "select-layout-hidden",
        labelName: i18n.t("editor.inspect.setter_label.hidden"),
        setterType: "INPUT_SETTER",
        attrName: "hidden",
        placeholder: "false",
      },
    ],
  },
]
