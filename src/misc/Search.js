import { debounce } from "./Debounce";
import api from "@/components/shared/api/ky";

async function search(cb, value, link, queryParams) {
  let params = queryParams.length
    ? Object.assign(
        ...queryParams.map((val) => {
          return { [val]: value };
        })
      )
    : {};
  const resp = api.get(link, { searchParams: params }).json();
  await cb(resp);
}

const debouncedSearch = debounce(search);

export default debouncedSearch;
