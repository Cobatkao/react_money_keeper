import React from "react";

require('icons/label.svg');
require('icons/statistic.svg');
require('icons/money.svg');

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../icons', true, /\.svg$/));} catch (error) { console.warn(error);}

type Name = {
    name: string
};

const Icon = (props: Name) => {
    return (
        <svg className="icon">
            <use xlinkHref={'#' + props.name} />
        </svg>
    )
};

export default Icon;

