import {useState} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

import SearchFilters from '../components/SearchFilters';

const Search = () => {
const [searchFilters, setSearchFilters] = useState(false);
const router = useRouter();

return (
    <Box>
        <Flex
        curso="pointer"
        bg="gray.100"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters((prevFilters) => !preFilters)}
        >
<Text>Search Property by Filters</Text>
<Icon paddingLeft="2" w="7" as={BsFilter} />
        </Flex>
        {searchFilters && <SearchFilters />}
    </Box>
)
}

export default Search;