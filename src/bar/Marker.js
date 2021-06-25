import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import React from 'react'
import Select from 'react-select'

import { AiOutlineHeatMap } from 'react-icons/ai'
import { BiMapPin } from 'react-icons/bi'
import { FaMapMarker, FaHospitalAlt } from 'react-icons/fa'
import { HiLibrary } from 'react-icons/hi'
import { IconContext } from 'react-icons'
import { IoFastFoodSharp } from 'react-icons/io5'

import PickColor from '../common/pickColor'
import reactToDom from '../common/reactToDom'
import Tooltip from '../common/tooltip'
import InlineElement from '../common/InlineElement'
import AddTextToIcon from '../common/AddTextToIcon'

const ICONS = [
  {
    value: FaMapMarker,
    label: <FaMapMarker size={20} />,
  },
  {
    value: BiMapPin,
    label: <BiMapPin size={20} />,
  },
  {
    value: AiOutlineHeatMap,
    label: <AiOutlineHeatMap size={20} />,
  },
  {
    value: FaHospitalAlt,
    label: <FaHospitalAlt size={20} />,
  },
  {
    value: IoFastFoodSharp,
    label: <IoFastFoodSharp size={20} />,
  },
  {
    value: HiLibrary,
    label: <HiLibrary size={20} />,
  },
]

export default function Marker({ marker, setMarker }) {
  const [color, setColor] = React.useState('#bdc3c7')
  const [size, setSize] = React.useState()
  const [icon, setIcon] = React.useState(ICONS[0])
  const [text, setText] = React.useState('')
  const [textColor, setTextColor] = React.useState('black')
  const [textSize, setTextSize] = React.useState()

  const customMarker = React.useMemo(() => {
    const Icon = icon.value
    return (
      <AddTextToIcon
        icon={
          <IconContext.Provider value={{ color }}>
            <div>
              <Icon size={size} />
            </div>
          </IconContext.Provider>
        }
        text={
          <strong style={{ color: textColor, fontSize: `${textSize}px` }}>
            {text}
          </strong>
        }
      />
    )
  }, [color, size, icon, text, textColor, textSize])

  const putInTheMap = React.useCallback(() => {
    setMarker(
      marker === undefined
        ? {
            element: reactToDom(customMarker),
            draggable: true,
          }
        : undefined
    )
  }, [customMarker, setMarker, marker])

  return (
    <div>
      <p>
        <strong>Marker</strong>
      </p>
      <div className='mb-1'>
        <PickColor onChange={setColor} value={color} />{' '}
        <InlineElement
          Component={Select}
          minWidth='4vw'
          options={ICONS}
          value={icon}
          onChange={setIcon}
        />{' '}
        <InlineElement
          Component={Form.Control}
          type='number'
          minWidth='1vw'
          value={size}
          placeHolder='Icon size'
          onChange={e => setSize(e.currentTarget.value)}
        />
      </div>

      <div className='mb-1'>
        <Form.Control
          value={text}
          placeHolder='Icon text'
          onChange={e => setText(e.currentTarget.value)}
        />
      </div>

      <div>
        <InlineElement
          Component={Form.Control}
          type='number'
          minWidth='1vw'
          value={textSize}
          placeHolder='Text size'
          onChange={e => setTextSize(e.currentTarget.value)}
        />{' '}
        <PickColor onChange={setTextColor} value={textColor} />
      </div>

      <div className='text-md-center'>
        <Tooltip content='put in the map'>
          <Button
            variant='light'
            onClick={putInTheMap}
            active={marker !== undefined}
          >
            {customMarker}
          </Button>
        </Tooltip>
      </div>
    </div>
  )
}
