import React, {useContext} from 'react'
import { UglyContext } from './UglyContext'
import UglyItem from './UglyItem'

function List(props) {
    const {uglyThings} = useContext(UglyContext)
    const array = uglyThings.uglyData.map(item => <UglyItem item={item} key={item._id}/>)
    return(
        <div className="list">
            {array}
        </div>
    )
}

export default List