import { debounce } from "./Debounce";
import axios from "axios";



async function search(cb, value, link, queryParams) {

        let params = queryParams.length ? Object.assign(...queryParams.map((val) => {
        return {[val]: value}
    })) : {}

    const resp = (await axios.get(link, {params: params})).data
    cb(resp)
}

const debouncedSearch = debounce(search)

export default debouncedSearch