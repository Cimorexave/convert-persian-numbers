import { IConvertNumbers, IInputString } from "./types"

export default function ConvertNumbers(input: IInputString): IConvertNumbers {
  if (!input) return undefined
  return parseFloat(input
    .replace(/[\u0660-\u0669]/g, function (subString) {
      const res = subString.charCodeAt(0) - 1632
      return res.toString()
    })
    .replace(/[\u06F0-\u06F9]/g, function (subString) {
      const res = subString.charCodeAt(0) - 1776
      return res.toString()
    }))
}