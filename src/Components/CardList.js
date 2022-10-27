import React from "react";
import Card from "../Components/Card";
const CardList=({robots})=>
{
if (true)
{
    throw new Error('Noooooo');
}

    return(
        <div>
            {
                robots.map((users, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                            username={robots[i].username}/>
                    );
                })
            }
        </div>
    );

}
export default CardList;