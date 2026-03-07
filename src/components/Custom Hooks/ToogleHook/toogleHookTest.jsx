import { use } from "react";
import useToogle from "./useToogle";

function ToogleTest() {
    const [isOpen, toogleOpen] = useToogle()

    return (
        <div>
            <button onClick={toogleOpen}>Toogle</button>
            {isOpen && <p>Hello World</p>}
        </div>
    )
}

export default ToogleTest;