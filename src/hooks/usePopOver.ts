import React, { useState } from 'react'

const usePopOver = (closePopOver?: () => any) => {
  // Setting the Anchor Element from the Pop Over
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  /**
   * Sets the Anchor Element to the Selected Element
   * @param event Takes in the Event Object
   */
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  /**
   * Sets the Anchor Element to Null
   */
  const handleClose = () => {
    closePopOver && closePopOver()
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return { handleClick, handleClose, id, anchorEl, open }
}

export default usePopOver
