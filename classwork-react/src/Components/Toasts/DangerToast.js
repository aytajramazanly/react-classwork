import React from 'react'
import {Toast,ToastHeader} from 'reactstrap'

function DangerToast() {
  return (
    <Toast>
      <ToastHeader icon="danger">
        Invalid Credentials
      </ToastHeader>
  </Toast>
  )
}

export default DangerToast