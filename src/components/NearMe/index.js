import React from "react";
import Callbookguide from "./callbookguide";
import Topbar from "./top.js";
import Thingstodo from "./thingstodo.js";

export default function NearMe() {
    return (
        <div>
            <Callbookguide />
            <Thingstodo />
            <Topbar />
        </div>
    );
}
