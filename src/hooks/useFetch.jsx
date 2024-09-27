import { useQuery } from '@tanstack/react-query';

export const useFetch = (endpoint) => {
    return useQuery({
        queryKey: [endpoint],
        queryFn: async () => {

            console.log(`Fetching data from: ${endpoint}`);
            
            const res = await fetch(endpoint
            //     , {
            //     method: "GET",
            //     mode: "cors",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            // }
            );

            if (!res.ok) {
                throw new Error(`Error: ${res.status} ${res.statusText}`);
            }

            const data = await res.json();

            console.log(data);
            return data;
            
        },

        staleTime: 60000, // Data remains fresh for 1 minute
        cacheTime: 300000, // Data remains in cache for 5 minutes
        retry: 1, // Retry the query once on failure
        onSuccess: (fetchedData) => {
            const timestamp = new Date().toLocaleString()
            console.log('Fetched data at: ', timestamp);
            console.log('Fetched data: ', fetchedData);
        }
    });
};