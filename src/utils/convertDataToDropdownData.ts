import { IDropdownData } from '../interfaces/IDropdownData'

export const convertDataToDropdownData = (
  label: string,
  value: string,
  data: any[]
): IDropdownData[] => {
  const result: { value: string; label: string }[] = []
  data?.forEach((elem) => {
    result.push({
      value: elem[value]!,
      label: elem[label]
    })
  })
  return result
}
