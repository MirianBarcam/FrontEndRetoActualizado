import React from "react";
import "../../styles/item.css";

export const Item = ({title}) => {

	return (
		<div className="item">
            <span>
                {title}
            </span>
		</div>
	);
};
export default Item;