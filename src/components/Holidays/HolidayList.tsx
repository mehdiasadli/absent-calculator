import { DeleteOutlined } from '@ant-design/icons'
import { Button, List, Tooltip, Typography } from 'antd'
import moment from 'moment'
import { DateItem } from '.'

interface HolidayListProps {
  dates: DateItem[]
  remove: (id: number) => void
}

export default function HolidayList({ dates, remove }: HolidayListProps): JSX.Element {
  return (
    <List
      bordered
      style={{ width: 800, padding: 10 }}
      grid={{ gutter: 10, column: 4 }}
      dataSource={dates}
      split={true}
      itemLayout='horizontal'
      renderItem={(item) => (
        <List.Item
          style={{
            backgroundColor: '#f0f0f0',
            padding: 10,
            margin: 0,
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography>{moment(item.value).format('DD MMMM YYYY')}</Typography>
          <Tooltip title='Delete'>
            <Button onClick={() => remove(item.id)} type='link' icon={<DeleteOutlined />} />
          </Tooltip>
        </List.Item>
      )}
    />
  )
}
