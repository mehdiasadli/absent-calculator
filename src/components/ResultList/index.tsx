import moment from 'moment'
import { List } from 'antd'
import { convertStrToDate } from '../../utils'

interface ResultListProps {
  result: string[]
}

export default function ResultList({ result }: ResultListProps): JSX.Element {
  return (
    <List
      style={{ width: 800 }}
      bordered
      dataSource={result}
      renderItem={(item) => (
        <List.Item>{moment(convertStrToDate(item)).format('DD MMM YYYY')}</List.Item>
      )}
    />
  )
}
