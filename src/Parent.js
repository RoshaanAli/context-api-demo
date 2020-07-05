import React from 'react';
import Child from './Child';
import Child2 from './Child2';

export default function Parent() {
    return (
        <div>
            Parent
            <Child></Child>
            <Child2></Child2>
        </div>
    )
}
