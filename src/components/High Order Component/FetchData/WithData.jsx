import { useState, useEffect } from "react";

function withData(WrappedComponent, url) {
    return function EnhancedComponent(props) {
        const [data, setData] = useState([]);

        useEffect(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
        }, [url]);

        return (
            <WrappedComponent posts={data} {...props} />
        );
    }
}

export default withData;