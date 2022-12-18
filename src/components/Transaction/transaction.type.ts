export interface ITransaction {
  id: number
  category: string
  name: string
  value: number
  type: 'EXPENSE' |'INCOME'
}