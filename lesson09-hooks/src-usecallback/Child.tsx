import {useEffect, memo} from "react";

function Child(){
    console.log('inside child');
    return (
        <>
            <h1>
                Child
            </h1>
        </>
    )
}

export default memo(Child);