import {
    Box,
    Input,
    FormControl,
    FormLabel
} from '@chakra-ui/react';

function Register() {
    return (
        <Box>
            <form>
                <FormControl id="email" w="100%" mt="4">
                    <FormLabel
                        textTransform="uppercase"
                        fontWeight="normal">
                        Email/Username
                    </FormLabel>
                    <Input
                        type="text"
                        placeholder="username"
                    />
                </FormControl>
            </form>
        </Box>
    );
}
export default Register;
