import LabelProps from "@/wrappedComponents/Label/interface"
import { ValidateMessageProps } from "@/wrappedComponents/InvalidMessage/interface"
import { InputBorderColor } from "@illa-design/input"
import { ReactNode } from "react"

export type alignmentType = "start" | "center" | "end" | "fullWidth"

export interface WrappedDateProps extends LabelProps, ValidateMessageProps {
  value?: string
  defaultValue?: string
  placeholder?: string
  dateFormat?: string
  tooltipText?: string
  disabled?: boolean
  loading?: boolean
  readOnly?: boolean
  showClear?: boolean
  beforeIcon?: ReactNode
  afterIcon?: ReactNode
  beforeText?: string
  afterText?: string
  required?: boolean
  colorScheme?: InputBorderColor
  minDate?: string
  maxDate?: string
  handleUpdateDsl?: (value: Record<string, string>) => void
}
