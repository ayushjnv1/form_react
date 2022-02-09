import React, { useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export const CardComponent2 = (props) => {
    const user = props.user;
    const [view, setview] = useState(false);
    const show = () => {
        if (view)
            setview(false);
        else
            setview(true);
    }
    return (
        <div>
            <Card>
                <img width="50%" height="20%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzH6TfTtq91hzmeIvm_4JOdb5y1UWjTlYZdA&usqp=CAU" />
                <Card body>
                    <CardTitle>{user.name}</CardTitle>
                    <CardText>{user.email}</CardText>
                    {view ? <>

                        <p>street :{user.address.street}</p>
                        <p>suite: {user.address.suite}</p>
                        <p>City : {user.address.city}</p>
                        <p>Zipcode: {user.address.zipcode}</p>
                        {/* <p>{user.address.geo}</p> */}
                        <p>Phone:{user.phone}</p>
                        <p>Street:{user.address.street}</p>

                    </> : <></>}
                    <Button onClick={show}>{!view ? "More details" : "close"}</Button>
                </Card>
            </Card>
        </div>
    );
};

// export CardComponent2;
// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }