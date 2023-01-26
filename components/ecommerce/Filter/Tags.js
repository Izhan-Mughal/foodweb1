import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateProductFilters } from "../../../redux/action/productFiltersAction";

const Tags = ({ updateProductFilters }) => {
    const router = useRouter();
    const tags = [
        { value: "" },
        { value: "Drink Beverage" },
        { value: "Rice" },
        { value: "Organic" },
        { value: "Meat" },
        { value: "Seafood" },
        { value: "Healthy food" },
    ];
    const [selectedTags, setTags] = useState([]);
    const [active, setActive] = useState(0);
    useEffect(() => {
        const filters = {
            tags: selectedTags, //
        };

        updateProductFilters(filters);
    }, [selectedTags]);

    const handleClick = (i, target) => {
        setTags(target);
        setActive(active == i ? 0 : i);
    };
    return (
        <>
            <ul className="tags-list">
                {tags.map((tag, i) => (
                    <li  className="hover-up" onClick={() => handleClick(i, tag.value)} key={i}>
                        <a
                            className={
                                active == i
                                    ? "cat-item text-brand-2"
                                    : "cat-item text-brand"
                            }
                        ><i className="fi-rs-cross mr-10"></i>
                            {i == 0 ? "All" : `${tag.value}`}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
};

const mapDidpatchToProps = {
    updateProductFilters,
};

export default connect(null, mapDidpatchToProps)(Tags);
