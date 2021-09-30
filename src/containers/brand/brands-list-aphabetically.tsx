import React, { FC } from "react";

const BrandsListAlphabetically: FC<{ dynamicRefs: any }> = ({
    dynamicRefs,
}) => {
    const handleClick = (id) => {
        const index = dynamicRefs.findIndex((i) => i.id === id);
        dynamicRefs?.[index]?.current?.scrollIntoView();
    };
    const alphabet = [
        "123",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];

    return (
        <ul className="brands-nav">
            {alphabet.map((letter) => {
                return (
                    <li
                        key={letter}
                        onClick={() => {
                            handleClick(letter);
                        }}
                        className="brand-nav-item hover:text-secondary"
                    >
                        <span className="brand-nav-link" data-ink="ink_123">
                            {letter}
                        </span>
                    </li>
                );
            })}
        </ul>
    );
};

export default BrandsListAlphabetically;
