import React from 'react'

const Comp = () =>
{
    const data = localStorage.getItem('listsUser')
    const lists = JSON.parse(data)

    return (
        <div>
            {
                !!lists &&
                lists.map((item, index) => 
                {
                    return (
                        <div key={index}>
                            <div>
                                title:{item.title}
                            </div>
                            <div>
                                name:{item.name}
                            </div>
                            <div>
                                lastname:{item.lastname}
                            </div>
                            <div>
                                birthday:{item.birthday}
                            </div>
                            <div>
                                //-------------------------------------
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Comp;
