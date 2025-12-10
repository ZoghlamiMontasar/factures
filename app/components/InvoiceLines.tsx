import { Invoice } from '@/type'
import React from 'react'


interface Props{
    invoice : Invoice 
    setInvoice :(invoice : Invoice) => void
}


const InvoiceLines : React.FC<Props>= ({invoice , setInvoice}) =>  {
  return (
    <div>InvoiceLines</div>
  )
}

export default InvoiceLines