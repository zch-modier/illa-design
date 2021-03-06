import { useState, useRef, FC } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@illa-design/button"
import { Input } from "@illa-design/input"
import { InputUploadProps } from "../interface"
import { displayNoneStyle } from "./style"

export const InputUpload: FC<InputUploadProps> = (props) => {
  const {
    reset,
    register,
    name,
    setValue,
    placeholder = "e.g.path/to/root.crt",
  } = props
  const { t } = useTranslation()
  const registerValue = register(name)
  const [fileName, setFileName] = useState("")
  const uploadRef = useRef<HTMLInputElement | null>(null)
  const handleUpload = () => {
    uploadRef.current?.click()
  }
  const reader = new FileReader()
  reader.onload = function () {
    this.result && setValue(name, this.result as string)
  }
  return (
    <div>
      <Input
        placeholder={placeholder}
        value={fileName}
        suffix={{
          render: (
            <Button
              variant="text"
              colorScheme="techPurple"
              onClick={handleUpload}
              type="button"
            >
              {t("btn.choose_file")}
            </Button>
          ),
        }}
        onClear={() => {
          setFileName("")
          reset(name)
        }}
        allowClear
      />
      <input
        css={displayNoneStyle}
        {...registerValue}
        ref={(e) => {
          registerValue.ref(e)
          uploadRef.current = e
        }}
        onChange={(event) => {
          registerValue.onChange(event)
          const files = event.target.files
          if (files) {
            setFileName(files[0].name)
            reader.readAsText(files[0])
          }
        }}
        type="file"
      />
    </div>
  )
}

InputUpload.displayName = "InputUpload"
