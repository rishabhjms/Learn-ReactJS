import React from 'react'

export default function Alert(props) {
    const captialize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (// this (props,alert) if it resolves then code after && will be executed, else it won't
    props.alert && <div><div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{captialize(props.alert.type)}</strong>:&nbsp;{props.alert.msg}
  </div></div>
  )
}
