import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const colorSelectWrapperCss = css`
  height: 100%;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: pointer;

  :hover {
    background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
  }
`

export const colorSelectPreviewColorCss = (color: string): SerializedStyles => {
  return css`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    border: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-09`)};
    background-color: ${color};
    box-sizing: border-box;
  `
}

export const colorSelectPreviewNameCss = css`
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  margin-left: 8px;
  width: 60px;
`

export const colorSelectMenuWrapperCss = css`
  width: 120px;
  padding: 8px 0;
`

export const colorSelectMenuItemWrapperCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  cursor: pointer;

  :hover {
    background-color: ${globalColor(`--${illaPrefix}-techPurple-07`)};
  }
`
