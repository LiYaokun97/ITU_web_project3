import React from 'react';
import BasketItem from './BasketItem';
import {BasketContext} from "../context/BasketContext";

class BasketListContainer extends React.Component {
    render() {
        return (
            <BasketContext.Consumer>
                {({basketList}) => (
                    <div id="basket_list_container" className="container-fluid">
                        <br/>
                        <div className="container-fluid text-center">
                            <h2 style={{paddingTop: '10px', fontSize: '22px'}}>
                                Shopping List
                            </h2>
                        </div>
                        <br/>
                        <hr style={{marginLeft: '80px', marginRight: '80px'}}/>
                        <div id="basket_list_items_container">
                            {basketList.map((item) => (
                                <BasketItem
                                    key={item.name}
                                    name={item.name}
                                    num={item.num}
                                    totalPrice={item.totalPrice}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </BasketContext.Consumer>
        );
    }
}

export default BasketListContainer
