import React from 'react'

interface FieldGroupPropsType {
  customClasses?: string,
  errors?: string[],
  children: React.ReactElement
}

export default function FieldGroup({ customClasses, errors=[], children }:FieldGroupPropsType) {

  const firstError = [...errors].shift();

  return (
    <div className={customClasses}>
      <div className={`${firstError || 'hidden'} mb-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block`}>
        { firstError }
      </div>
      { children }
    </div>
  )
}
