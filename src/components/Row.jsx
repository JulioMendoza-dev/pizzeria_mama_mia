function Row({children}) {
  return (
    <div className='row row-col-3 g-4'>
        {children.map((child,index) => {
          return
          <div key={index} className='col'>
            {child}      
        </div>
        })}
    </div>
  )
}

export default Row